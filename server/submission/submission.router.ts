import NotificationModel from '../notification/notification.model';
import { SubmissionVersion } from './submission-version/submission-version.model';
import { NotificationChannel, NotificationI, NotificationType, NotificationUrgency } from "../../shared/types/notification.types";
import submissionVersionRouter from './submission-version/submission-version.router';
import { UserRole } from '../../shared/types/user.types';
import { SubmissionStatus, WIPPopulatedSubmissionI } from '../../shared/types/submission.types';
import LessonExerciseModel from '../lesson-exercise/lesson-exercise.model';
import { findTutorialIdByLessonId } from '../tutorial/tutorial.model';
import { maybeCreateCertification } from '../certification/certification.router';

const express = require('express');
const UserModel = require('../user/user.model');
const SubmissionModel = require('./submission.model');
const { PublicMiddleware, PrivateMiddleware, SolvableExercise, UserRoleMiddleware } = require('../Middlewares');
const { ServerError } = require('../ServerUtils');

const submissionRouter = express.Router();

// Since those two are interconnected (same base types)
// let's not use a separate main route, rather use a sub-route here.
submissionRouter.use('/versions', submissionVersionRouter);

submissionRouter.get('/', [UserRoleMiddleware(UserRole.ADMIN)], async function getSubmissions(req, res) {
  const { page, query, status } = req.query;

  // The query param is called status so it makes sense when
  // reading the URL: ?status=A&status=B. However, here
  // we're creating a `statuses` (plural) variable so it's clear
  // we're working with a list.
  let statuses = status;

  // If it's string, create an array from it.
  // Otherwise it's already an Array or `undefined`
  // in which case we're not doing anything
  if (typeof statuses === 'string') {
    statuses = [statuses];
  }

  const results = await SubmissionModel.search(+page, query, statuses);
  res.json(results.map(SubmissionModel.sanitize));
});

submissionRouter.get('/:submissionId', [UserRoleMiddleware(UserRole.ADMIN)], async function getSubmission(req, res) {
  const { submissionId } = req.params;

  try {
    const submission = await SubmissionModel.get(submissionId);
    if (!submission) {
      new ServerError(404, `No submission with id='${submissionId}' found`).send(res);
    } else {
      res.json(SubmissionModel.sanitize(submission));
    }
  } catch (err) {
    new ServerError(400, err.message).send(res);
  }

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

submissionRouter.get('/:username/:exerciseId', [UserRoleMiddleware(UserRole.ADMIN), SolvableExercise], async function getUserSubmission(req, res) {
  const { username, exerciseId } = req.params;
  const { user } = req.body;

  try {
    const targetUser = await UserModel.getUser({ username });

    if (!targetUser) {
      new ServerError(404, `User '${username}' doesn't exist.`).send(res);
      return;
    }

    const submission = await SubmissionModel.getUserSubmission(targetUser._id, exerciseId);

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

submissionRouter.post('/', [PrivateMiddleware], async function createSubmission(req, res) {
  const submission = await SubmissionModel.create(req.body);
  res.json(SubmissionModel.sanitize(submission));
});

submissionRouter.post('/:submissionId/approve', [UserRoleMiddleware('admin')], async function approveSubmission(req, res) {
  const { submissionId } = req.params;
  const { feedbacks, user: admin } = req.body;

  try {
    const submission: WIPPopulatedSubmissionI = await SubmissionModel.get(submissionId);

    if (!submission) {
      throw new ServerError(404, 'Nu am găsit nici o submisie cu acest id');
    }

    if (submission.status !== SubmissionStatus.AWAITING_REVIEW) {
      throw new ServerError(400, 'Poți aproba doar submisii ce așteaptă feedback-ul tău.');
    }

    await SubmissionModel.update(submissionId, {
      status: SubmissionStatus.DONE,
      feedbacks
    });

    // Not using async-await because we don't want to block the execution of this function
    new SubmissionVersion({
      approved: true,
      feedbacks: [],
      code: submission.code,
      submission: submissionId
    }).save().catch(err => {
      console.error("[submissionRouter.approveSubmission] Failed to persist submission version", err);
    });

    const notification: NotificationI = {
      to: submission.user,
      // We want this to be unique across all exercise notifications,
      // so they get correctly "bundled" into the same GMail thread.
      title: `Exercițiu ${submission.exercise.type.toUpperCase()} | FrontEnd.ro (#${submission.exercise._id.toString().slice(-4)})`,
      short_message: 'ți-a aprobat exercițiul. Congrats!',
      long_message: 'Tocmai ne-am uitat pe exercițiul tău și rezolvarea e corectă.',
      timestamp: Date.now(),
      href: `/rezolva/${submission.exercise._id.toString()}`,
      href_text: 'Vezi soluția aici',
      from: admin._id,
      type: NotificationType.SUCCESS,
      urgency: NotificationUrgency.REGULAR
    }

    const tutorial_id = await findTutorialIdByLessonId(submission.exercise.lesson);
    if (tutorial_id === null) {
      console.warn(`[approveSubmission] There is no tutorial linked to the lesson with ID=${submission.exercise.lesson}.`)
    } else {
      maybeCreateCertification(tutorial_id, submission.user._id.toString());
    }

    const { success, responses } = await NotificationModel.notify(
      notification,
      [NotificationChannel.IN_APP, NotificationChannel.EMAIL]
    );
    if (!success) {
      console.error("approveSubmission.notify", responses);
    }

    res.status(200).send();
  } catch (err) {
    console.log("[API][approveSubmission]", err);
    new ServerError(err.code, err.message).send(res);
  }
});

submissionRouter.post('/:submissionId/feedback', [UserRoleMiddleware('admin')], async function feedbackSubmission(req, res) {
  const { submissionId } = req.params;
  const { feedbacks, user: admin } = req.body;

  try {
    const submission = await SubmissionModel.get(submissionId);

    if (!submission) {
      throw new ServerError(404, 'Nu am găsit nici o submisie cu acest id');
    }

    if (submission.status !== SubmissionStatus.AWAITING_REVIEW) {
      throw new ServerError(400, 'Poți da feedback doar las submisii ce așteaptă feedback-ul tău.');
    }

    await SubmissionModel.update(submissionId, {
      status: SubmissionStatus.IN_PROGRESS,
      feedbacks
    });

    // Not using async-await because we don't want to block the execution of this function
    new SubmissionVersion({
      feedbacks,
      approved: false,
      code: submission.code,
      submission: submissionId
    }).save().catch(err => {
      console.error("[submissionRouter.feedbackSubmission] Failed to persist submission version", err);
    });

    const notification: NotificationI = {
      to: submission.user,
      // We want this to be unique across all exercise notifications,
      // so they get correctly "bundled" into the same GMail thread.
      title: `Exercițiu ${submission.exercise.type.toUpperCase()} | FrontEnd.ro (#${submission.exercise._id.toString().slice(-4)})`,
      short_message: 'ți-a trimis feedback pentru soluția ta.',
      long_message: 'Tocmai ne-am uitat pe soluția ta și ți-am trimis feedback de îmbunătățire.',
      timestamp: Date.now(),
      href: `/rezolva/${submission.exercise._id.toString()}`,
      href_text: 'Continuă rezolvarea exercițiului',
      from: admin._id,
      type: NotificationType.INFO,
      urgency: NotificationUrgency.REGULAR
    }

    const { success, responses } = await NotificationModel.notify(
      notification,
      [NotificationChannel.IN_APP, NotificationChannel.EMAIL]
    );
    if (!success) {
      console.error("[API][feedbackSubmission.notify]", responses);
    }

    res.status(200).send();
  } catch (err) {
    console.log("[API][feedbackSubmission]", err);
    new ServerError(err.code, err.message).send(res);
  }
});

submissionRouter.put('/:submissionId', [PrivateMiddleware], async function updateSubmission(req, res) {
  const { submissionId } = req.params;
  const { user, payload } = req.body;

  try {
    const submission = await SubmissionModel.get(submissionId);
    if (submission.user._id.toString() !== user._id.toString()) {
      new ServerError(401, 'Nu poți actualiza submisiile altcuiva').send(res);
      return;
    }

    await SubmissionModel.update(submission._id, payload);
    const updatedSubmission = await SubmissionModel.get(submissionId);

    res.json(SubmissionModel.sanitize(updatedSubmission));
  } catch (err) {
    console.error("[API][put.updateSubmission]", err);
    new ServerError(err.code, err.message).send(res);
  }

});

submissionRouter.post('/exercise/:exerciseId', [PrivateMiddleware, SolvableExercise], async function createSubmission(req, res) {
  const { exerciseId } = req.params;
  const { code, user, status } = req.body;

  const existingSubmission = await SubmissionModel.getByExerciseId(user._id, exerciseId);
  let updatedSubmission;

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