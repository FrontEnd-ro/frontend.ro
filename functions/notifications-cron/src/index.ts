import { differenceInBusinessDays as getDifferenceInBusinessDays } from 'date-fns';

import { connectToDb } from '../../../server/database';
import UserModel from '../../../server/user/user.model';
import { UserI } from '../../../shared/types/user.types';
import { LessonI } from '../../../shared/types/lesson.types';
import Tutorial from '../../../server/tutorial/tutorial.model';
import { WIPPopulatedTutorialI } from '../../../shared/types/tutorial.types';
import NotificationModel from '../../../server/notification/notification.model';
import { SubmissionStatus, WIPPopulatedSubmissionI } from '../../../shared/types/submission.types';
import {
  NotificationI,
  NotificationChannel,
  NotificationType,
  NotificationUrgency,
} from '../../../shared/types/notification.types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const SubmissionModel = require('../../../server/submission/submission.model');

exports.handler = run;

async function run() {
  // Whether to actually send the notifications, or simply to log the result,
  // without any side effects.
  const dryRun = process.env.DRY_RUN === 'true';
  const SPAN = `[NotificationsCron.run, dryRun=${dryRun}]`;

  console.log(`${SPAN} <<<<<< STARTED`);
  try {
    await connectToDb();

    const allUsers: UserI[] = await UserModel.search();

    const usersThatStartedATutorial = allUsers.filter((user) => user.tutorials.length > 0);
    console.log(`${SPAN} Got ${usersThatStartedATutorial.length} users that started a tutorial`);

    // Process the in order, so the logs make sense.
    for (const user of usersThatStartedATutorial) {
      try {
        // NOTE: we want to process users synchronously,
        // so that the logs make sense when we read them.
        // eslint-disable-next-line no-await-in-loop
        await processUser(user, dryRun);
      } catch (err) {
        console.error(`${SPAN} Failed to process user=${user._id.toString()}`, err);
      }
    }

    console.log(`${SPAN} <<<<<< DONE`);
  } catch (err) {
    console.error(`${SPAN} <<<<<< FAILED.`, err);
  }
}

async function processUser(user: UserI, dryRun: boolean) {
  const SPAN = `[NotificationsCron.processUser user=${user.username}]`;

  const { tutorials } = user;
  const submissions: WIPPopulatedSubmissionI[] = await SubmissionModel.getAllUserSubmissions(
    user._id,
  );
  console.log(`${SPAN} User has ${submissions.length} submissions.`);

  await Promise.all(tutorials.map(async (tutorialId) => {
    const SPAN = `[NotificationsCron.processUserTutorial user=${user.username}, tutorial=${tutorialId}]`;

    let tutorial: WIPPopulatedTutorialI;
    try {
      tutorial = await Tutorial.findOne({ tutorialId }).populate<{lessons: LessonI[]}>('lessons');
    } catch (err) {
      console.error(`${SPAN} Tutorial not found. Skipping.`, err);
      return;
    }

    const tutorialLessonIds = tutorial.lessons.map((lesson) => lesson.lessonId);
    const tutorialSubmissions = submissions.filter((submission) => {
      return tutorialLessonIds.includes(submission.exercise.lesson);
    });
    console.log(`${SPAN} User has ${submissions.length} submissions`);

    const inProgressTutorialSubmissions = tutorialSubmissions.filter(
      (submission) => submission.status === SubmissionStatus.IN_PROGRESS,
    );

    if (inProgressTutorialSubmissions.length === 0) {
      console.log(`${SPAN} User has no IN_PROGRESS submissions. Skipping.`);
      return;
    }
    console.log(`${SPAN} User has ${inProgressTutorialSubmissions.length} IN_PROGRESS submissions`);

    const oldestSubmission = getMostRecentSubmission(inProgressTutorialSubmissions);
    console.log(`${SPAN} Oldest submission is from ${oldestSubmission.updatedAt}`);

    const differenceInBusinessDays = getDifferenceInBusinessDays(
      new Date(),
      new Date(oldestSubmission.updatedAt),
    );

    if (differenceInBusinessDays > 7) {
      const notification = getNotificationPayload(user, tutorial, oldestSubmission, 7);
      await maybeNotify(notification, dryRun);
    } else if (differenceInBusinessDays > 3) {
      const notification = getNotificationPayload(user, tutorial, oldestSubmission, 3);
      await maybeNotify(notification, dryRun);
    } else {
      console.log(`${SPAN} notification doesn't match any interval. Skipping.`);
    }
  }));
}

function getMostRecentSubmission(submissions: WIPPopulatedSubmissionI[]) {
  let mostRecentSubmission = submissions[0];

  submissions.forEach((submission) => {
    if (
      new Date(submission.updatedAt).getTime()
        > new Date(mostRecentSubmission.updatedAt).getTime()
    ) {
      mostRecentSubmission = submission;
    }
  });

  return mostRecentSubmission;
}

function getNotificationPayload(
  user: UserI,
  tutorial: WIPPopulatedTutorialI,
  oldestSubmission: WIPPopulatedSubmissionI,
  inactivityInterval: number,
): NotificationI {
  const tags = new Map<string, string>();
  tags.set('tutorial', tutorial.tutorialId);
  tags.set('inactivityInterval', inactivityInterval.toString());
  tags.set('oldestSubmission', oldestSubmission._id.toString());

  return {
    to: user,
    timestamp: Date.now(),
    type: NotificationType.INFO,
    title: `Nu uita de exercițiile ${tutorial.name}`,
    short_message: `Nu uita de ${tutorial.name}`,
    long_message: `Am văzut că nu ai mai lucrat la exercițiile din acest tutorial.
Știai că dacă le termini pe toate, vei primi o certificare din partea noastră?`,
    href_text: 'Continuă să rezolvi exercițiile!',
    href: `/${tutorial.tutorialId}`,
    urgency: NotificationUrgency.REGULAR,
    tags,
  };
}

/**
 * Only sends notificaiton if no other notificaiton with these tags was previously sent.
 * @param notification NotificationI
 * @param dryRun boolean
 * @returns Promise<void>
 */
async function maybeNotify(notification: NotificationI, dryRun: boolean): Promise<any> {
  const SPAN = `[NotificationsCron.maybeNotify, dryRun=${dryRun}]`;
  const latestSimilarNotification = await NotificationModel.findOneByTagsAndUser(
    (notification.to as UserI)._id.toString(), notification.tags,
  );

  if (latestSimilarNotification !== null) {
    console.log(`${SPAN} We already have sent this notification. Exiting`);
    return;
  }

  if (!dryRun) {
    const resp = await NotificationModel.notify(notification, [NotificationChannel.EMAIL]);

    if (resp.success) {
      console.log(`${SPAN} successfully notified.`);
    } else {
      console.error(`${SPAN} failed to notify.`, resp.responses);
    }
  } else {
    console.log(`${SPAN} On a dry run, so not sending notification.`, {
      ...notification,
      to: (notification.to as UserI)._id.toString(),
    });
  }
}
