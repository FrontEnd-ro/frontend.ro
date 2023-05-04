import { differenceInBusinessDays as getDifferenceInBusinessDays } from 'date-fns';

import { connectToDb } from '../../../server/database';
import UserModel from '../../../server/user/user.model';
import { UserI } from '../../../shared/types/user.types';
import { LessonI } from '../../../shared/types/lesson.types';
import Tutorial from '../../../server/tutorial/tutorial.model';
import { TutorialI } from '../../../shared/types/tutorial.types';
import NotificationModel from '../../../server/notification/notification.model';
import { SubmissionStatus, WIPPopulatedSubmissionI } from '../../../shared/types/submission.types';
import {
  NotificationI,
  NotificationChannel,
  NotificationType,
  NotificationUrgency,
} from '../../../shared/types/notification.types';
import SubmissionModel from '../../../server/submission/submission.model';
import { LessonExerciseI } from '../../../shared/types/lesson-exercise.types';

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
  const submissions = await SubmissionModel.getAllUserSubmissions(
    user._id,
  );
  console.log(`${SPAN} User has ${submissions.length} submissions.`);

  await Promise.all(tutorials.map(async (tutorialId) => {
    const SPAN = `[NotificationsCron.processUserTutorial user=${user.username}, tutorial=${tutorialId}]`;

    let tutorial: Omit<TutorialI, 'lessons'> & { lessons: LessonI[] };
    try {
      tutorial = await Tutorial.findOne({ tutorialId }).populate<{lessons: LessonI[]}>('lessons');
    } catch (err) {
      console.error(`${SPAN} Tutorial not found. Skipping.`, err);
      return;
    }

    const tutorialLessonIds = tutorial.lessons.map((lesson) => lesson.lessonId);
    const tutorialSubmissions = submissions.filter((submission) => {
      return tutorialLessonIds.includes((submission.exercise as unknown as LessonExerciseI).lesson);
    });
    console.log(`${SPAN} User has ${tutorialSubmissions.length} submissions`);

    const awaitingReviewTutorialSubmissions = tutorialSubmissions.filter(
      (submission) => submission.status === SubmissionStatus.AWAITING_REVIEW,
    );
    if (awaitingReviewTutorialSubmissions.length > 0) {
      console.log(`${SPAN} User has some submissions that are awaiting review. Skipping.`);
      return;
    }

    const inProgressTutorialSubmissions = tutorialSubmissions.filter(
      (submission) => submission.status === SubmissionStatus.IN_PROGRESS,
    );

    if (inProgressTutorialSubmissions.length === 0) {
      console.log(`${SPAN} User has no IN_PROGRESS submissions. Skipping.`);
      return;
    }
    console.log(`${SPAN} User has ${inProgressTutorialSubmissions.length} IN_PROGRESS submissions`);

    // @ts-ignore
    const oldestSubmission = getMostRecentSubmission(inProgressTutorialSubmissions);
    console.log(`${SPAN} Oldest submission is from ${oldestSubmission.updatedAt}`);

    const differenceInBusinessDays = getDifferenceInBusinessDays(
      new Date(),
      new Date(oldestSubmission.updatedAt),
    );

    if (differenceInBusinessDays > 7) {
      const notification = getNotificationPayload(user, tutorial, oldestSubmission, 7, 'abandoned');
      await maybeNotify(notification, dryRun);
    } else if (differenceInBusinessDays > 3) {
      const notification = getNotificationPayload(user, tutorial, oldestSubmission, 3, 'inactivity');
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
  tutorial: Omit<TutorialI, 'lessons'>,
  oldestSubmission: WIPPopulatedSubmissionI,
  inactivityInterval: number,
  // If we think this user abandoned the tutorial, we send a different message
  type?: 'inactivity' | 'abandoned',
): NotificationI {
  const tags = new Map<string, string>();
  tags.set('tutorial', tutorial.tutorialId);
  tags.set('inactivityInterval', inactivityInterval.toString());
  tags.set('oldestSubmission', oldestSubmission._id.toString());

  const longMessage = type === 'inactivity'
    ? `Am văzut că nu ai mai lucrat la exercițiile din acest tutorial.
     Știai că dacă le termini pe toate, vei primi o certificare din partea noastră?`
    : `A trecut mai mult de o săptămână de când ai lucrat la acest tutorial. Totul ok? Dacă l-ai abandonat,
     îmi poți spune motivele? Asta ne ajută să-l facem și mai bun pentru viitorii utilizatori :D Iar dacă nu l-ai
     abandonat, poți să-l continui apăsând pe linkul de mai jos.`;

  return {
    to: user._id,
    timestamp: Date.now(),
    type: NotificationType.INFO,
    title: `Nu uita de ${tutorial.name}`,
    short_message: `Nu uita de ${tutorial.name}`,
    long_message: longMessage,
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
    notification.to.toString(), notification.tags,
  );

  if (latestSimilarNotification !== null) {
    console.log(`${SPAN} We already have sent this notification. Exiting`);
    return;
  }

  if (!dryRun) {
    const resp = await NotificationModel.notify(notification, [NotificationChannel.EMAIL]);

    if (resp.success) {
      console.log(`${SPAN} successfully notified.`, notification);
    } else {
      console.error(`${SPAN} failed to notify.`, resp.responses);
    }
  } else {
    console.log(`${SPAN} On a dry run, so not sending notification.`, notification);
  }
}
