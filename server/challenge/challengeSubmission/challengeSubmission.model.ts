import mongoose, { Types } from 'mongoose';
import { UserI } from '../../user/user.schema';
import { SanitizeRole } from '../../ServerUtils';
import FolderStructure from '../../../shared/utils/FolderStructure';
import UserModel from '../../user/user.model';
import { API_ChallengeSubmissionI } from '../../../shared/types/challengeSubmissions.types';
import { ChallengeI } from '../challenge.schema';

// This collection has a unique composed key <UserId, ChallengeId>.
export interface ChallengeSubmissionI {
  _id?: Types.ObjectId;

  // Unique, human-readable ID.
  // This is used when Routing in the UI.
  challengeId: string;

  // The user that submitten this solution
  user: Types.ObjectId;

  tasks: ChallengeSubmissionTaskI[];
}


export interface VerificationStatus {
  _id?: Types.ObjectId;

  valid: boolean;
  // In case verification failed, we're populating
  // the fields below with the error details.
  error?: {
    // Human readable description of what failed.
    description: string;

    // Optional Stack Trace in case the code/program
    // doesn't even run/compile.
    stackTrace?: string;

    // Optional suggestions for fixing the problem.
    // These are meant to be shown to the user,
    // and guide him towards the fix.
    suggestions?: string[];
  };
}

export interface ChallengeSubmissionTaskI {
  _id: Types.ObjectId;

  // Unique, human-readable ID.
  // This is used when routing in the UI.
  taskId: string;

  // Stringified code that should contain only the files that
  // can be edited by the user (see ./challenge.types.ts).
  codeForFilesThatCanBeEdited: string;

  // This is optional. If missing then it means the user
  // hasn't started this Task yet.
  status?: VerificationStatus;

  updatedAt?: Date;

  createdAt?: Date;
}


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
  taskId: { type: String, required: true },
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
  challengeId: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  tasks: [{ type: ChallengeSubmissionTaskSchema, required: true }],
});

const ChallengeSubmission: mongoose.Model<ChallengeSubmissionI, {}, {}> = mongoose.models.ChallengeSubmission || mongoose.model('ChallengeSubmission', ChallengeSubmissionSchema);

// This function is used to create an initial ChallengeSubmission object
// starting from the Challenge definition.
const mapFromChallenge = (challenge: ChallengeI, user: UserI): ChallengeSubmissionI => {
  let challengeObject = challenge instanceof mongoose.Document
    ? challenge.toObject()
    : challenge;

  delete challengeObject._id;

  return {
    ...challengeObject,
    user,
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
const mergeChallengeSubmission = (
  challengeSubmission: Omit<ChallengeSubmissionI, 'user'> & { user: UserI },
  challenge: ChallengeI
) : API_ChallengeSubmissionI => {
  if (challengeSubmission instanceof mongoose.Document) {
    challengeSubmission = challengeSubmission.toObject();
  }

  if (challenge instanceof mongoose.Document) {
    challenge = challenge.toObject();
  }

  return {
    challengeId: challenge.challengeId,
    title: challenge.title,
    introExplainer: challenge.introExplainer !== undefined
       ? { title: challenge.introExplainer.title, markdown: challenge.introExplainer.markdown }
       : undefined,
    user: UserModel.sanitize(challengeSubmission.user, SanitizeRole.SELF),
    tasks: challenge.tasks.map((task) => {
      const submissionTask = challengeSubmission.tasks.find(t => t.taskId === task.taskId);

      return {
        taskId: task.taskId,
        title: task.title,
        explainer: task.explainer,
        filesThatCanBeEdited: task.filesThatCanBeEdited,
        startingCode: task.startingCode,
        status: submissionTask.status !== undefined
          ? { valid: submissionTask.status.valid, error: submissionTask.status.error }
          : undefined,
        codeForFilesThatCanBeEdited: submissionTask.codeForFilesThatCanBeEdited,
        solution: task.solution,
        startingFile: task.startingFile,
      }
    })
  }
}

export { ChallengeSubmission, mapFromChallenge, mergeChallengeSubmission };
