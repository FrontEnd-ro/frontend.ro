import { Document } from 'mongoose';
import express, { Request, Response } from 'express';
import { PrivateMiddleware, PublicMiddleware } from '../Middlewares';
import Tutorial from '../tutorial/tutorial.model';
import { Certification, createCertification, sanitizeCertification } from './certification.model';
import { LessonI } from '../../shared/types/lesson.types';
import LessonExerciseModel from '../lesson-exercise/lesson-exercise.model';
import { ExerciseType, LessonExerciseI, WIPPopulatedLessonExerciseI } from '../../shared/types/lesson-exercise.types';
import { SubmissionStatus, WIPPopulatedSubmissionI } from '../../shared/types/submission.types';
import appConfig from '../config';
import EmailService, { EMAIL_TEMPLATE } from '../Email.service';
import UserModel from '../user/user.model';
import { UserI } from '../../shared/types/user.types';
import NotificationModel from '../notification/notification.model';
import { NotificationChannel, NotificationType, NotificationUrgency } from '../../shared/types/notification.types';
import Challenge from '../challenge/challenge.model';
import { TutorialI } from '../../shared/types/tutorial.types';
import { ChallengeI } from '../../shared/types/challenge.types';
import { ServerError } from '../utils/ServerError';
import SubmissionModel from '../submission/submission.model';

const certificationRouter = express.Router();

certificationRouter.get('/:certificationId', [
  PublicMiddleware,
  async function getCertification(req: Request, res: Response) {
    const { certificationId } = req.params;
    const SPAN = `getCertification(${certificationId})`;

    try {
      const certification = await Certification.findById(certificationId)
        .populate('user')
        .populate<{ tutorial: TutorialI }>('tutorial')
        .populate<{ challenge: ChallengeI }>('challenge')
        .populate<{ lesson_exercises: WIPPopulatedLessonExerciseI[] }>({
          path: 'lesson_exercises',
          populate: { path: 'user' },
        });
  
      if (certification === null) {
        new ServerError(404, 'generic.404', { certificationId }).send(res);
        return;
      }
  
      res.json(sanitizeCertification(certification));
    } catch (err) {
      console.error(SPAN, err);
      new ServerError(500, 'generic.500', { certificationId }).send(res);
    }
  }
]);

certificationRouter.get('/challenge/:challengeId', [
  PrivateMiddleware,
  async function getCertificationForChallenge(req: Request, res: Response) {
    const { user } = req.body;
    const { challengeId } = req.params;
    const SPAN = `getCertificationForChallenge(${challengeId})`;

    try {
      const challenge = await Challenge.findOne({
        challengeId
      });

      if (challenge === null) {
        new ServerError(404, 'generic.404', { challengeId }).send(res);
        return;
      }

      const certification = await Certification.findOne({
        challenge: challenge._id,
        user: user._id,
      })
        .populate('user')
        .populate('lesson_exercises')
        .populate<{ challenge: ChallengeI }>('challenge');
  
      if (certification === null) {
        new ServerError(404, 'generic.404', { challengeId }).send(res);
        return;
      }
  
      res.json(sanitizeCertification(certification));
    } catch (err) {
      console.log(SPAN, err);
      new ServerError(500, 'generic.500', { challengeId }).send(res);
    }
  }
]);

/**
 * Verify that the user has successfully completed
 * all exercises in this tutorial.
 * > if yes: generated certification and notify user
 * > if not: do nothing
 * @param tutorialId string
 * @param userId string
 * @param dryRun boolean - whether to actually perform the tasks, or simply to log the result, without any side effects
 * @returns 
 */
export async function maybeCreateCertification(
  tutorialId: string,
  userId: string,
  dryRun = false,
) {
  const SPAN = `[maybeCreateCertification, tutorialId=${tutorialId}, userId=${userId}, dryRun=${dryRun}]`;
  const tutorial = await Tutorial
    .findById(tutorialId)
    .populate<{ lessons: LessonI[] }>("lessons");

  if (tutorial === null) {
    console.info(`${SPAN} Tutorial not found.`);
    return;
  }

  const user = await UserModel.findUserBy({ _id: userId});
  if (user === null) {
    console.info(`${SPAN} User not found.`);
    return;
  }

  const tutorialExercises: Document<any, any, WIPPopulatedLessonExerciseI>[] = (
    await Promise.all(
      (tutorial.lessons as LessonI[]).map((lesson) =>
        LessonExerciseModel.getAllFromLesson(lesson.lessonId)
      )
    )
  ).flat();

  if (tutorialExercises.length === 0) {
    console.warn(`${SPAN} Didn't expect the tutorial to have no exercises. Exiting.`);
    return;
  }

  const userSubmissions = await SubmissionModel.getAllUserSubmissions(userId);

  const didFinishAllExercises = tutorialExercises.every((lessonEx) => {
    return (
      userSubmissions.find((userSub) => {
        return (
          // @ts-ignore
          userSub.exercise._id.toString() === lessonEx._id.toString() &&
          userSub.status === SubmissionStatus.DONE
        );
      }) !== undefined
    );
  });

  if (!didFinishAllExercises) {
    console.info(
      `${SPAN} Didn't complete all exercises for tutorialId=${tutorialId}. Exiting.`
    );
    return;
  }

  console.info(
    `${SPAN} Successfully completed all exercises for tutorialId=${tutorialId}. Generating certification!`
  );

  // Persist certification
  const certification = await createCertification(userId, tutorial._id, dryRun);

  // Notify via Email
  if (dryRun === true) {
    console.log(`${SPAN} Skipping email notification.`);
  } else {
    const emailResult = await EmailService.sendTemplateWithAlias(user.email, EMAIL_TEMPLATE.AWARDED_CERTIFICATION, {
      [appConfig.APP.language]: true,
      name: user.name,
      moduleName: tutorial.name,
      moduleUrl: `${appConfig.APP.app_url}/${tutorial.tutorialId}`,
      certificationUrl: `${appConfig.APP.app_url}/certificari/${certification.id}`
    });
  
    if (emailResult.success === true) {
      console.log(`${SPAN} Successfully notified via email.`);
    } else {
      console.error(`${SPAN} Failed to notify user via email.`, emailResult);
    }
  }

  // Notify IN_APP
  if (dryRun === true) {
    console.log(`${SPAN} Skipping in-app notification.`);
  } else {
    try {
      await NotificationModel.notify({
        to: user._id,
        title: `Felicitări Ai completat cu succes ${tutorial.name}`,
        short_message: `Ți-am generat cu succes certificarea pentru ${tutorial.name}. Congrats!`,
        long_message: `Sunt Alex de la FrontEnd.ro și-ți scriu pentru a te felicita că ai completat cu succes ${tutorial.name}`,
        timestamp: Date.now(),
        href: `/certificari/${certification.id}`,
        href_text: 'Vezi certificarea aici',
        type: NotificationType.SUCCESS,
        urgency: NotificationUrgency.REGULAR
      }, [NotificationChannel.IN_APP]);
      console.log(`${SPAN} Successfully notified user IN_APP.`);
    } catch (err) {
      console.error(`${SPAN} Failed to notify user IN_APP.`, err);
    }
  }
}

export default certificationRouter;
