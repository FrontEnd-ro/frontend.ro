import mongoose, { Document, ObjectId } from 'mongoose';
const SharedUserModel = require('../../shared/user.shared-model');
const SubmissionModel = require('../submission/submission.model');
import { ExerciseType } from '../../shared/types/exercise.types';
import SharedExerciseModel from '../../shared/exercise.shared-model';
import { SubmissionStatus } from '../../shared/types/submission.types';
import { LambdaClient, InvokeCommand } from '@aws-sdk/client-lambda';
import { CertificationI, WIPPopulatedCertificationI } from '../../shared/types/certification.types';
import appConfig from '../config';

const CertificationSchema = new mongoose.Schema<CertificationI>({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  timestamp: { type: Number, required: true },
  tutorial: { type: mongoose.Schema.Types.ObjectId, ref: 'Tutorial' },
  lesson_exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: 'LessonExercise' }],
  og_image: { type: String, required: false },
  pdf: { type: String, required: false }
});

const Certification: mongoose.Model<CertificationI, {}, {}> = mongoose.models.Certification
  || mongoose.model<CertificationI>('Certification', CertificationSchema);

function sanitizeCertification(certification: Document<any, any, WIPPopulatedCertificationI> & WIPPopulatedCertificationI) {
  // https://github.com/Automattic/mongoose/issues/2790
  const sanitizedCertfication: WIPPopulatedCertificationI = JSON.parse(JSON.stringify(certification.toObject()));

  sanitizedCertfication.user = SharedUserModel.sanitize(sanitizedCertfication.user);
  sanitizedCertfication.lesson_exercises = sanitizedCertfication.lesson_exercises.map(lessonExercise => {
    return SharedExerciseModel.sanitize(lessonExercise)
  });

  return sanitizedCertfication;
}

/**
 * To be called manually by admins if the automatic
 * certification generation somehow fails.
 */
async function createCertification(userId: string, tutorial_id: ObjectId, moduleType: ExerciseType, certificationPath: string) {
  const certificationData: CertificationI = {
    tutorial: tutorial_id,
    user: userId,
    timestamp: Date.now(),
    lesson_exercises: []
  }

  // Step 1: store certification
  const userSubmissions = await SubmissionModel.getAllUserSubmissions(userId);
  certificationData.lesson_exercises = userSubmissions
    .filter(submission => submission.status === SubmissionStatus.DONE && submission.exercise.type === moduleType)
    .map(submission => submission.exercise._id.toString());

  let certification = new Certification({
    ...certificationData,
    _id: new mongoose.Types.ObjectId(),
  });
  try {
    certification = await certification.save();
  } catch (err) {
    console.error("[createHTMLCertification] Certification couldn't be saved", err);
    return;
  }

  // Step 2: generate assets
  await refreshCertificationAssets(
    certification.id,
    certificationPath
  );
}

/**
 * Refresh the generated assets for each certification:
 * - PDF Diploma
 * - JPG OG Image
 */
async function refreshCertificationAssets(certificationId: string, certificationUrl: string) {
  const certification = await Certification.findById(certificationId);

  if (certification === null) {
    console.error(`[refreshCertificationAssets] ceritification with id='${certificationId}' doesn't exist`);
    return null;
  }

  const lambda = new LambdaClient({});
  // TODO: extract this outside this function
  // into a more generic way (per environment)
  const FunctionName = appConfig.APP.env === 'production'
    ? 'diploma-screenshot'
    : 'diploma-test';

  const payload = {
    certificationId,
    url: certificationUrl,
  }
  const invokeCommand = new InvokeCommand({
    FunctionName,
    InvocationType: 'RequestResponse',
    Payload: Buffer.from(JSON.stringify(payload), 'utf-8'),
  });

  const response = await lambda.send(invokeCommand);

  console.log("Got response from lambda function", response);

  const decodedPayload = new TextDecoder('ascii').decode(response.Payload);
  console.log("Decoded payload is", decodedPayload);

  const jsonPayload = JSON.parse(decodedPayload);
  const body = JSON.parse(jsonPayload.body)


  if (!body?.pdf?.success) {
    console.error("❌ PDF wasn't successfully generated");
  } else {
    certification.pdf = body.pdf.uri;
  }

  if (!body?.ogImage?.success) {
    console.error("❌ PDF wasn't successfully generated");
  } else {
    certification.og_image = body.ogImage.uri;
  }

  await certification.save();

  console.log("[refreshCertificationAssets] done ✔️");
  return certification;
}

export { Certification, createCertification, sanitizeCertification, refreshCertificationAssets };
