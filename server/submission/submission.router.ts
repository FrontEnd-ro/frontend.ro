import express from 'express';
import UserModel from '../user/user.model';
import SubmissionModel from './submission.model';
import { ServerError } from '../utils/ServerError';
import { UserRole } from '../../shared/types/user.types';
import { APIErrorReasons } from '../../shared/SharedConstants';
import EmailService, { EMAIL_TEMPLATE } from '../Email.service';
import { PrivateMiddleware, SolvableExercise } from '../Middlewares';
import { SubmissionStatus } from '../../shared/types/submission.types';
import LessonExerciseModel from '../lesson-exercise/lesson-exercise.model';
import submissionVersionRouter from './submission-version/submission-version.router';

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
  const SPAN = `getSubmissionByExercise(${exerciseId})`;

  try {
    const submission = await SubmissionModel.getByExerciseId(user._id, exerciseId);
    if (!submission) {
      new ServerError(404, 'generic.404', { exerciseId }).send(res);
      return;
    } else {
      res.json(SubmissionModel.sanitize(submission));
    }
  } catch (err) {
    console.log(SPAN, err);
    new ServerError(500, 'generic.500').send(res);
  }
});

submissionRouter.get(
  "/lesson/:lessonId",
  [PrivateMiddleware],
  async function getAllSubmissionsFromLesson(req, res) {
    const { lessonId } = req.params;
    const { user } = req.body;
    const SPAN = `getAllSubmissionsFromLesson(${lessonId})`

    try {
      const exercises = await LessonExerciseModel.getAllFromLesson(lessonId);
      const submissions = await Promise.all(
        exercises.map((ex) => SubmissionModel.getByExerciseId(user._id, ex._id))
      );

      res.json(submissions);
    } catch (err) {
      console.log(SPAN, err);
      new ServerError(500, 'generic.500').send(res);
    }
  }
);

submissionRouter.put('/:submissionId', [PrivateMiddleware], async function updateSubmission(req, res) {
  const { submissionId } = req.params;
  const { user, payload } = req.body;
  const SPAN = `updateSubmission(${submissionId})`;

  try {
    const submission = await SubmissionModel.get(submissionId);
    if (submission.user._id.toString() !== user._id.toString()) {
      new ServerError(401, 'generic.401').send(res);
      return;
    }

    if (submission.feedbacks.length > 0) {
      new ServerError(403, 'submission.still_have_unresolved_feedback').send(res);
      return;
    }

    await SubmissionModel.update(submission._id, payload);
    const updatedSubmission = await SubmissionModel.get(submissionId);

    res.json(SubmissionModel.sanitize(updatedSubmission));

    if (payload.status === SubmissionStatus.AWAITING_REVIEW) {
      notifyAdminsNewSubmission(user.name || user.username);
    }
  } catch (err) {
    console.error(SPAN, err);
    new ServerError(500, 'generic.500').send(res);
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
  const SPAN = `markFeedbackAsDone(${feedbackId})`;

  try {
    const allUserSubmissions = await SubmissionModel.getAllUserSubmissions(user._id);

    // FIXME: optimize this to send the submissionId in the request
    const match = allUserSubmissions.find(sub => sub.feedbacks.find(f => f._id.toString() === feedbackId) !== undefined);

    if (!match) {
      console.log(`[API][delete.markFeedbackAsDone] No feedback with id ${feedbackId} found`);
      throw new ServerError(404, 'generic.404', { feedbackId });
    }

    if (match.status !== SubmissionStatus.IN_PROGRESS) {
      throw new ServerError(400, 'submission.readonly_submission');
    }

    const newFeedbacks = match.feedbacks.filter(f => f._id.toString() !== feedbackId);
    await SubmissionModel.update(match._id, {
      feedbacks: newFeedbacks
    });

    res.status(200).send();
  } catch (err) {
    console.error(SPAN, err);
    new ServerError(500, 'generic.500').send(res);
  }
})

submissionRouter.delete('/:submissionId', [PrivateMiddleware], async function deleteSubmission(req, res) {
  const { submissionId } = req.query;

  await SubmissionModel.delete(submissionId);
  res.status(200).end();
})

export default submissionRouter;

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
