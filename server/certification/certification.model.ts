import mongoose, { Schema, Types } from 'mongoose';

import appConfig from '../config';
import { SanitizeRole } from '../ServerUtils';
import Tutorial from '../tutorial/tutorial.model';
import { UserI } from '../../shared/types/user.types';
import { LessonI } from '../../shared/types/lesson.types';
import { LambdaService } from '../services/Lambda.service';
import UserModel from '../user/user.model';
import SubmissionModel from '../submission/submission.model';
import LessonExerciseModel from '../lesson-exercise/lesson-exercise.model';
import { TutorialI } from '../../shared/types/tutorial.types';
import { ChallengeI } from '../../shared/types/challenge.types';
import { SubmissionStatus } from '../../shared/types/submission.types';
import { API_CertificationI, CertificationI } from '../../shared/types/certification.types';
import { LessonExerciseI } from '../../shared/types/lesson-exercise.types';

const CertificationSchema = new mongoose.Schema<CertificationI>({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  timestamp: { type: Number, required: true },
  tutorial: { type: mongoose.Schema.Types.ObjectId, ref: 'Tutorial' },
  challenge: { type: mongoose.Schema.Types.ObjectId, ref: 'Challenge' },
  lesson_exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: 'LessonExercise' }],
  og_image: { type: String, required: false },
  pdf: { type: String, required: false }
}, {
  timestamps: true
});

const Certification: mongoose.Model<CertificationI, {}, {}> = mongoose.models.Certification
  || mongoose.model<CertificationI>('Certification', CertificationSchema);

function sanitizeCertification(
  certification: Omit<CertificationI, 'user' | 'lesson_exercises' | 'challenge' | 'tutorial'> & {
    user: UserI;
    lesson_exercises: LessonExerciseI[];
    challenge?: Schema.Types.ObjectId | ChallengeI;
    tutorial?: Schema.Types.ObjectId | TutorialI;
  }
): API_CertificationI {
  return {
    pdf: certification.pdf,
    og_image: certification.og_image,
    user: UserModel.sanitize(certification.user, SanitizeRole.PUBLIC),
    timestamp: certification.timestamp,
    lesson_exercises: certification.lesson_exercises.map(LessonExerciseModel.sanitize),
    challenge: (certification.challenge === undefined || certification.challenge instanceof mongoose.Schema.Types.ObjectId)
      ? undefined
      : {
        title: certification.challenge.title,
        challengeId: certification.challenge.challengeId
      },
    tutorial: (certification.tutorial === undefined || certification.tutorial instanceof mongoose.Schema.Types.ObjectId)
      ? undefined
      : {
        name: certification.tutorial.name,
        tutorialId: certification.tutorial.tutorialId
      },
  }
}

/**
 * Store a certification into the Database and trigger a Lambda Function
 * to generate it's corresponding assets: PDF and JPEG.
 * > NOTE: this function is somewhat idempotent - in the sense that
 * > multiple calls to this function don't create multiple Certifications,
 * > instead they update the same one.
 * @param userId string
 * @param tutorial_id ObjectId
 * @param dryRun boolean - whether to actually perform the tasks, or simply to log the result, without any side effects
 * @returns 
 */
async function createCertification(
  userId: string,
  tutorial_id: Types.ObjectId,
  dryRun = false
): Promise<mongoose.Document<any, any, CertificationI> & CertificationI> {
  const SPAN = `[createCertification, userId=${userId}, tutorial_id=${tutorial_id}, dryRun=${dryRun}]`;
  const tutorial = await Tutorial
    .findById(tutorial_id)
    .populate<{ lessons: LessonI[] }>("lessons");

  if (tutorial === null) {
    console.error(`${SPAN} couldn't find tutorial. Exiting.`);
    return;
  }

  let certification: mongoose.Document<any, any, CertificationI> & CertificationI;
  // Step 1: store certification into the DB
  try {
    certification = await storeCertificationData(tutorial, userId, dryRun);
  } catch (err) {
    console.error(`${SPAN} Certification couldn't be saved in DB`, err);
    return;
  }

  try {
    certification = await refreshCertificationAssets(certification, dryRun);
  } catch (err) {
    console.error(`${SPAN} Certification assets couldn't be generated.`, err);
    return certification;
  }
  
  console.info(`${SPAN} successfully created certification`);
  return certification;
}

/**
 * Create or Update (if already exists) certification information into the Database.
 * @param userId string
 * @param tutorial_id ObjectId
 * @param dryRun boolean - whether to actually perform the tasks, or simply to log the result, without any side effects
 * @returns Persisted Certification
 */
async function storeCertificationData(
  tutorial: Omit<TutorialI, 'lessons'> & { lessons: LessonI[] },
  userId: string,
  dryRun = false
) {
  const SPAN = `[storeCertificationData, userId=${userId}, tutorial_id=${tutorial._id}, dryRun=${dryRun}]`;

  let certification = await Certification.findOne({ tutorial: tutorial._id, user: userId });
  if (certification !== null) {
    console.info(`${SPAN} Certification already exists. We'll update it!`)
    certification.timestamp = Date.now();
  } else {
    certification = new Certification({
      tutorial: tutorial._id,
      user: userId,
      timestamp: Date.now(),
      lesson_exercises: [],
      _id: new mongoose.Types.ObjectId(),
    });
  }

  const lessonIds = tutorial.lessons.map((lesson) => lesson.lessonId);
  const userSubmissions = await SubmissionModel.getAllUserSubmissions(userId);
  certification.lesson_exercises = userSubmissions
    .filter(submission => submission.status === SubmissionStatus.DONE)
    .filter(submission => {
      return lessonIds.includes((submission.exercise as unknown as LessonExerciseI).lesson)
    })
    .map(submission => (submission.exercise as unknown as LessonExerciseI)._id);

  if (dryRun === true) {
    console.info(`${SPAN} Skipping persistance.`);
  } else {
    certification = await certification.save();
    console.info(`${SPAN} successfully persisted certification.`);
  }

  return certification;
}

/**
 * Generate and store certification assets inside AWS S3:
 * - PDF Diploma
 * - JPG OG Image
 * @param certification mongoose.Document<any, any, CertificationI>
 * @param dryRun boolean - whether to actually perform the tasks, or simply to log the result, without any side effects
 * @returns Promise
 */
export async function refreshCertificationAssets(
  certification: mongoose.Document<any, any, CertificationI> & CertificationI,
  dryRun = false
) {
  // TODO: extract this outside this function
  // into a more generic way (per environment)
  const FunctionName = appConfig.APP.env === 'production'
    ? 'diploma-screenshot'
    : 'diploma-test';

  const SPAN = `[refreshCertificationAssets, certificationId=${certification.id}, FunctionName=${FunctionName}, region=${appConfig.AWS.region}, dryRun=${dryRun}]`;

  const payload = {
    certificationId: certification.id,
    url: getCertificationUrl(certification.id),
    dryRun,
  }

  const body = await LambdaService.invokeWithIdleRetry(FunctionName, payload);
  if (body === null) {
    console.log(`${SPAN} Got "null" response. Exiting.`);
    return certification;
  }

  if (!body?.pdf?.success) {
    console.error(`${SPAN} PDF wasn't successfully generated`);
  } else {
    certification.pdf = body.pdf.uri;
  }

  if (!body?.ogImage?.success) {
    console.error(`${SPAN} OG_IMAGE wasn't successfully generated`);
  } else {
    certification.og_image = body.ogImage.uri;
  }

  if (dryRun === true) {
    console.info(`${SPAN} Skipping persistance.`);
  } else {
    await certification.save();
    console.info(`${SPAN} successfully generated and persisted assets`, certification.toJSON());
  }

  return certification;
}

/**
 * Return the Public URL of the certification. This is used to create the PDF and JPEG assets.
 * @returns string
 */
function getCertificationUrl(certificationId: string) {
  return `${appConfig.APP.app_url}/certificari/${certificationId}`;
}

export { Certification, createCertification, sanitizeCertification };
