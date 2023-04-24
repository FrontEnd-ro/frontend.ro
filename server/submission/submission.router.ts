import { UserRole } from '../../shared/types/user.types';
import { APIErrorReasons } from '../../shared/SharedConstants';
import EmailService, { EMAIL_TEMPLATE } from '../Email.service';
import { SubmissionStatus } from '../../shared/types/submission.types';
import LessonExerciseModel from '../lesson-exercise/lesson-exercise.model';
import submissionVersionRouter from './submission-version/submission-version.router';

const express = require('express');
const UserModel = require('../user/user.model');
const SubmissionModel = require('./submission.model');
const { PrivateMiddleware, SolvableExercise } = require('../Middlewares');
const { ServerError } = require('../ServerUtils');

const submissionRouter = express.Router();

// Since those two are interconnected (same base types)
// let's not use a separate main route, rather use a sub-route here.
submissionRouter.use('/versions', submissionVersionRouter);

submissionRouter.get('/', [PrivateMiddleware], async function getOwnSubmissions(req, res) {
  let results = await SubmissionModel.getAllUserSubmissions(req.body.user._id);
  let sanitizedResults = results.map(SubmissionModel.sanitize);
  res.json(sanitizedResults);
});

submissionRouter.get('/exercise/:exerciseId', [PrivateMiddleware, SolvableExercise], async function getSubmissionByExercise(req, res) {
  const { exerciseId } = req.params;
  const { user } = req.body;

  try {
    const submission = await SubmissionModel.getByExerciseId(user._id, exerciseId);
    if (!submission) {
      new ServerError(404, `No submission for exercise='${exerciseId}' found`).send(res);
      return;
    } else {
      res.json(SubmissionModel.sanitize(submission));
    }
  } catch (err) {
    console.log("[API][getSubmissionByExercise]", err);
    new ServerError(err.code, err.message).send(res);
  }
});

submissionRouter.get(
  "/lesson/:lessonId",
  [PrivateMiddleware],
  async function getAllSubmissionsFromLesson(req, res) {
    const { lessonId } = req.params;
    const { user } = req.body;

    try {
      const exercises = await LessonExerciseModel.getAllFromLesson(lessonId);
      const submissions = await Promise.all(
        exercises.map((ex) => SubmissionModel.getByExerciseId(user._id, ex._id))
      );

      res.json(submissions);
    } catch (err) {
      console.log("[API][getAllSubmissionsFromLesson]", err);
      new ServerError(err.code, err.message).send(res);
    }
  }
);

submissionRouter.put('/:submissionId', [PrivateMiddleware], async function updateSubmission(req, res) {
  const { submissionId } = req.params;
  const { user, payload } = req.body;

  try {
    const submission = await SubmissionModel.get(submissionId);
    if (submission.user._id.toString() !== user._id.toString()) {
      new ServerError(401, 'Nu poți actualiza submisiile altcuiva').send(res);
      return;
    }

    if (submission.feedbacks.length > 0) {
      new ServerError(403, 'Încă ai feedback-uri nerezolvate pentru acest exercițiu.').send(res);
      return;
    }

    await SubmissionModel.update(submission._id, payload);
    const updatedSubmission = await SubmissionModel.get(submissionId);

    res.json(SubmissionModel.sanitize(updatedSubmission));

    if (payload.status === SubmissionStatus.AWAITING_REVIEW) {
      notifyAdminsNewSubmission(user.name || user.username);
    }
  } catch (err) {
    console.error("[API][put.updateSubmission]", err);
    new ServerError(err.code, err.message).send(res);
  }

});

submissionRouter.post('/exercise/:exerciseId', [PrivateMiddleware, SolvableExercise], async function createSubmission(req, res) {
  const { exerciseId } = req.params;
  const { code, user, status } = req.body;

  const [lessonExercise, existingSubmission] = await Promise.all([
    LessonExerciseModel.get(exerciseId),
    SubmissionModel.getByExerciseId(user._id, exerciseId),
  ]);
  let updatedSubmission;

  if (!user.tutorials.includes(lessonExercise.type)) {
    res.status(403).json({
      code: 403,
      reason: APIErrorReasons.EXERCISE_SUBMISSION_WITHOUT_TUTORIAL_START,
      message: 'Trebuie să te înscrii la acest tutorial pentru a putea trimite soluții.'
    });
    return;
  }

  if (!existingSubmission) {
    console.log("[submitSolution] First solution for this exercise. Let's create it");
    await SubmissionModel.create({
      code,
      status,
      user: user._id,
      exercise: exerciseId,
    })
    updatedSubmission = await SubmissionModel.getByExerciseId(user._id, exerciseId);
  } else {
    console.log("[submitSolution] Existing solution for this exercise. Let's update it");
    await SubmissionModel.update(existingSubmission._id, {
      code,
      status,
    });
    updatedSubmission = await SubmissionModel.get(existingSubmission._id);
  }

  res.json(SubmissionModel.sanitize(updatedSubmission));
  if (updatedSubmission.status === SubmissionStatus.AWAITING_REVIEW) {
    notifyAdminsNewSubmission(user.name || user.username);
  }
});


submissionRouter.delete('/feedback/:feedbackId', [PrivateMiddleware], async function markFeedbackAsDone(req, res) {
  const { feedbackId } = req.params;
  const { user } = req.body;

  try {
    const allUserSubmissions = await SubmissionModel.getAllUserSubmissions(user._id);

    // FIXME: optimize this to send the submissionId in the request
    const match = allUserSubmissions.find(sub => sub.feedbacks.find(f => f._id.toString() === feedbackId) !== undefined);

    if (!match) {
      console.log(`[API][delete.markFeedbackAsDone] No feedback with id ${feedbackId} found`);
      throw new ServerError(404, `Nu am gasit feedback-ul asta.`);
    }

    if (match.status !== SubmissionStatus.IN_PROGRESS) {
      throw new ServerError(400, 'Submisia așteaptă feedback. Până atunci nu o poți edita');
    }

    const newFeedbacks = match.feedbacks.filter(f => f._id.toString() !== feedbackId);
    await SubmissionModel.update(match._id, {
      feedbacks: newFeedbacks
    });

    res.status(200).send();
  } catch (err) {
    console.error("[API][delete.markFeedbackAsDone]", err);
    new ServerError(err.code, err.message).send(res);
  }
})

submissionRouter.delete('/:submissionId', [PrivateMiddleware], async function deleteSubmission(req, res) {
  const { submissionId } = req.query;

  await SubmissionModel.delete(submissionId);
  res.status(200).end();
})

module.exports = submissionRouter;

async function notifyAdminsNewSubmission(studentName: string) {
  const admins = (await UserModel.search()).filter(
    (user) => user.role === UserRole.ADMIN
  );

  admins.forEach((admin) => {
    EmailService.sendTemplateWithAlias(
      admin.email,
      EMAIL_TEMPLATE.NOTIFICATION,
      {
        subject: "Nou Exercițiu Rezolvat",
        headline: "Nou Exercițiu Rezolvat",
        body: `${studentName} a rezolvat un exercitiu.`,
        cta_text: "Vezi solutia",
        cta_link: "https://frontend.ro/exercitii-rezolvate",
      }
    );
  });
}
