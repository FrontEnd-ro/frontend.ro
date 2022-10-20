import mongoose, { Document, ObjectId } from 'mongoose';

import appConfig from '../config';
import Tutorial from '../tutorial/tutorial.model';
import { LessonI } from '../../shared/types/lesson.types';
import { LambdaService } from '../services/Lambda.service';
const SharedUserModel = require('../../shared/user.shared-model');
const SubmissionModel = require('../submission/submission.model');
import SharedExerciseModel from '../../shared/exercise.shared-model';
import { WIPPopulatedTutorialI } from '../../shared/types/tutorial.types';
import { SubmissionStatus, WIPPopulatedSubmissionI } from '../../shared/types/submission.types';
import { CertificationI, WIPPopulatedCertificationI } from '../../shared/types/certification.types';

const CertificationSchema = new mongoose.Schema<CertificationI>({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  timestamp: { type: Number, required: true },
  tutorial: { type: mongoose.Schema.Types.ObjectId, ref: 'Tutorial' },
  lesson_exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: 'LessonExercise' }],
  og_image: { type: String, required: false },
  pdf: { type: String, required: false }
}, {
  timestamps: true
});

const Certification: mongoose.Model<CertificationI, {}, {}> = mongoose.models.Certification
  || mongoose.model<CertificationI>('Certification', CertificationSchema);

function sanitizeCertification(certification: Document<any, any, WIPPopulatedCertificationI>) {
  // https://github.com/Automattic/mongoose/issues/2790
  const sanitizedCertfication: WIPPopulatedCertificationI = JSON.parse(JSON.stringify(certification.toObject()));

  if (typeof sanitizedCertfication.user !== 'string') {
    sanitizedCertfication.user = SharedUserModel.sanitize(sanitizedCertfication.user);
  }
  sanitizedCertfication.lesson_exercises = sanitizedCertfication.lesson_exercises.map(lessonExercise => {
    return SharedExerciseModel.sanitize(lessonExercise)
  });

  return sanitizedCertfication;
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
  tutorial_id: ObjectId,
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
  tutorial: WIPPopulatedTutorialI,
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

  const lessonIds = (tutorial.lessons as LessonI[]).map((lesson) => lesson.lessonId);
  const userSubmissions: WIPPopulatedSubmissionI[] = await SubmissionModel.getAllUserSubmissions(userId);
  certification.lesson_exercises = userSubmissions
    .filter(submission => submission.status === SubmissionStatus.DONE)
    .filter(submission => lessonIds.includes(submission.exercise.lesson))
    .map(submission => submission.exercise._id.toString());

  if (!dryRun) {
    certification = await certification.save();
  }

  console.info(`${SPAN} successfully persisted certification.`);
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

  if (!dryRun) {
    await certification.save();
  }

  console.info(`${SPAN} successfully generated and persisted assets`, certification.toJSON());
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
