import express from 'express';
import UserModel from '../user/user.model';
import { ServerError } from '../utils/ServerError';
import { UserRole } from '../../shared/types/user.types';
import NotificationModel from '../notification/notification.model';
import { SolvableExercise, UserRoleMiddleware } from '../Middlewares'
import { findTutorialIdByLessonId } from '../tutorial/tutorial.model';
import { maybeCreateCertification } from '../certification/certification.router';
import { SubmissionVersion } from './submission-version/submission-version.model';
import { SubmissionStatus, WIPPopulatedSubmissionI } from '../../shared/types/submission.types';
import { NotificationChannel, NotificationI, NotificationType, NotificationUrgency } from "../../shared/types/notification.types";

const SubmissionModel = require('./submission.model');

const adminSubmissionRouter = express.Router();

adminSubmissionRouter.get('/', [UserRoleMiddleware(UserRole.ADMIN)], async function getSubmissions(req, res) {
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

adminSubmissionRouter.get('/:submissionId', [UserRoleMiddleware(UserRole.ADMIN)], async function getSubmissionAsAdmin(req, res) {
  const { submissionId } = req.params;
  const SPAN = `getSubmissionAsAdmin(${submissionId})`;

  try {
    const submission = await SubmissionModel.get(submissionId);
    if (!submission) {
      new ServerError(404, 'generic.404', { submissionId }).send(res);
    } else {
      res.json(SubmissionModel.sanitize(submission));
    }
  } catch (err) {
    console.error(SPAN, err);
    new ServerError(500, 'generic.500').send(res);
  }

});

adminSubmissionRouter.get('/:username/:exerciseId', [UserRoleMiddleware(UserRole.ADMIN), SolvableExercise], async function getUserSubmission(req, res) {
  const { username, exerciseId } = req.params;
  const { user } = req.body;
  const SPAN = `getUserSubmission(${username}, ${exerciseId})`;

  try {
    // @ts-ignore
    const targetUser = await UserModel.getUser({ username });

    if (!targetUser) {
      new ServerError(404, 'generic.404', { username }).send(res);
      return;
    }

    const submission = await SubmissionModel.getUserSubmission(targetUser._id, exerciseId);

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

adminSubmissionRouter.post('/:submissionId/approve', [UserRoleMiddleware(UserRole.ADMIN)], async function approveSubmission(req, res) {
  const { submissionId } = req.params;
  const { feedbacks, user: admin } = req.body;

  const SPAN = `approveSubmission(${submissionId})`;

  try {
    const submission: WIPPopulatedSubmissionI = await SubmissionModel.get(submissionId);

    if (!submission) {
      throw new ServerError(404, 'generic.404');
    }

    if (submission.status !== SubmissionStatus.AWAITING_REVIEW) {
      throw new ServerError(400, 'admin-submission.can_only_approve_submitted_solutions');
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
    console.log(SPAN, err);
    new ServerError(500, 'generic.500').send(res);
  }
});

adminSubmissionRouter.post('/:submissionId/feedback', [UserRoleMiddleware(UserRole.ADMIN)], async function feedbackSubmission(req, res) {
  const { submissionId } = req.params;
  const { feedbacks, user: admin } = req.body;
  const SPAN = `feedbackSubmission(${submissionId})`;

  try {
    const submission = await SubmissionModel.get(submissionId);

    if (!submission) {
      throw new ServerError(404, 'generic.404', { submissionId });
    }

    if (submission.status !== SubmissionStatus.AWAITING_REVIEW) {
      throw new ServerError(400, 'admin-submission.can_only_give_feedback_submitted_solutions');
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
    console.log(SPAN, err);
    new ServerError(500, 'generic.500').send(res);
  }
});

export { adminSubmissionRouter };
