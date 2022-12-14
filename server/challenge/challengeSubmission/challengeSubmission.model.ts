import mongoose from 'mongoose';
import { UserI } from '../../../shared/types/user.types';
import { ChallengeI } from '../../../shared/types/challenge.types';
import FolderStructure from '../../../shared/utils/FolderStructure';
import { sanitize as sanitizeUser } from '../../../shared/user.shared-model';
import { ChallengeSubmissionI, ChallengeSubmissionTaskI, VerificationStatus } from '../../../shared/types/challengeSubmissions.types';

const VerificationErrorSchema = new mongoose.Schema<VerificationStatus['error']>({
  description: { type: String, required: true },
  stackTrace: { type: String, required: false },
  suggestions: [{ type: String, required: false }]
});

const VerificationStatusSchema = new mongoose.Schema<VerificationStatus>({
  valid: { type: Boolean, required: true },
  error: { type: VerificationErrorSchema, required: false }
});

const ChallengeSubmissionTaskSchema = new mongoose.Schema<ChallengeSubmissionTaskI>({
  taskId: { type: String, required: true, unique: true },
  codeForFilesThatCanBeEdited: {type: String, required: true },
  status: {type: VerificationStatusSchema, required: false },
  createdAt: { type: Date, required: false },
  updatedAt: { type: Date, required: false },
}, {
  timestamps: {
    createdAt: 'submittedAt',
    updatedAt: 'updatedAt',
  },
});

const ChallengeSubmissionSchema = new mongoose.Schema<ChallengeSubmissionI>({
  challengeId: { type: String, required: true, unique: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  tasks: [{ type: ChallengeSubmissionTaskSchema, required: true }],
});

const ChallengeSubmission: mongoose.Model<ChallengeSubmissionI, {}, {}> = mongoose.models.ChallengeSubmission || mongoose.model('ChallengeSubmission', ChallengeSubmissionSchema);

const sanitize = (challengeSubmission: ChallengeSubmissionI) :  ChallengeSubmissionI => {
  let sanitizedChallengeSubmission = { ...challengeSubmission };
  if (challengeSubmission instanceof mongoose.Document) {
    sanitizedChallengeSubmission = { ...challengeSubmission.toObject() };
  }

  if (typeof sanitizedChallengeSubmission.user !== 'string') {
    sanitizedChallengeSubmission.user = sanitizeUser(sanitizedChallengeSubmission.user);
  }

  const propsToDelete = ['_id'];
  propsToDelete.forEach((prop) => delete sanitizedChallengeSubmission[prop]);

  sanitizedChallengeSubmission.tasks.forEach(task => {
    delete task._id;
  });

  return sanitizedChallengeSubmission;
}

// This function is used to create an initial ChallengeSubmission object
// starting from the Challenge definition.
const mapFromChallenge = (challenge: ChallengeI, user: UserI): ChallengeSubmissionI => {
  let challengeObject = challenge instanceof mongoose.Document
    ? challenge.toObject()
    : challenge;

  delete challengeObject._id;

  return {
    ...challengeObject,
    user: sanitizeUser(user),
    tasks: challengeObject.tasks.map((task) => {
      // Do not return the task ID
      delete task._id;

      const taskFolderStructure = new FolderStructure(JSON.parse(task.startingCode));
      const codeFolderStructure = new FolderStructure();
      task.filesThatCanBeEdited.forEach((fileId) => {
        const { file } = taskFolderStructure.getFile(fileId);
        if (file !== null) {
          codeFolderStructure.addFile(undefined, file);
        }
      })
      return {
        ...task,        
        codeForFilesThatCanBeEdited: codeFolderStructure.toJSON()
      }
    })
  }
}

// Returns a new object that contains all the fields of a ChallengeSubmissionI, not
// just the ones we save in the DB. Keep in mind, in the DB we only save
// the user code, so to get the full context we need to merge this with the Challenge
// definition.
const mergeChallengeSubmission = (challengeSubmission: ChallengeSubmissionI, challenge: ChallengeI) : ChallengeSubmissionI => {
  return {
    challengeId: challenge.challengeId,
    title: challenge.title,
    user: challengeSubmission.user,
    typeDefinitions: challenge.typeDefinitions,
    tasks: challenge.tasks.map((task) => {
      const submissionTask = challengeSubmission.tasks.find(t => t.taskId === task.taskId);

      return {
        taskId: task.taskId,
        title: task.title,
        explainer: task.explainer,
        filesThatCanBeEdited: task.filesThatCanBeEdited,
        startingCode: task.startingCode,
        status: submissionTask.status,
        codeForFilesThatCanBeEdited: submissionTask.codeForFilesThatCanBeEdited,
        solution: task.solution,
        startingFile: task.startingFile,
      }
    })
  }
}

export { ChallengeSubmission, sanitize, mapFromChallenge, mergeChallengeSubmission };
