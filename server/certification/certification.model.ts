import mongoose from 'mongoose';
const SubmissionModel = require('../submission/submission.model')
import { ExerciseType } from '../../shared/types/exercise.types';
import { SubmissionStatus } from '../../shared/types/submission.types';
import { CertificationI, CertificationModule } from '../../shared/types/certification.types';

const ModuleSchema = new mongoose.Schema<CertificationModule>({
  name: { type: String, required: true },
  url: { type: String, required: true },
})

const CertificationSchema = new mongoose.Schema<CertificationI>({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  timestamp: { type: Number, required: true },
  module: { type: ModuleSchema, required: true},
  lesson_exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: 'LessonExercise' }]
});

const Certification: mongoose.Model<CertificationI, {}, {}> = mongoose.models.Certification
  || mongoose.model<CertificationI>('Certification', CertificationSchema);

/**
 * To be called manually by admins if the automatic
 * certification generation somehow fails.
 */
async function createCertification(userId: string, module: CertificationModule, moduleType: ExerciseType) {
  const certificationData: CertificationI = {
    module,
    user: userId,
    timestamp: Date.now(),
    lesson_exercises: []
  }

  const userSubmissions = await SubmissionModel.getAllUserSubmissions(userId);
  certificationData.lesson_exercises = userSubmissions
    .filter(submission => submission.status === SubmissionStatus.DONE && submission.exercise.type === moduleType)
    .map(submission => submission.exercise._id.toString());

  const certification = new Certification(certificationData);
  try {
    await certification.save();
  } catch (err) {
    console.error("[createHTMLCertification] Certification couldn't be saved", err);
  }

  console.log("createCertification: done ✔️");
}

export { Certification, createCertification };
