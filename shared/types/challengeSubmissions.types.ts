import { ObjectId, PopulatedDoc } from 'mongoose';
import { UserI } from './user.types';
import { ChallengeI, ChallengeTaskI } from './challenge.types';

// This collection has a unique composed key <UserId, ChallengeId>.
export interface ChallengeSubmissionI extends Omit<ChallengeI, 'tasks'> {
  _id?: ObjectId;

  // Unique, human-readable ID.
  // This is used when Routing in the UI.
  challengeId: string;

  // The user that submitten this solution
  user: PopulatedDoc<UserI>;

  tasks: ChallengeSubmissionTaskI[];
}

export interface ChallengeSubmissionTaskI extends ChallengeTaskI {
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

export interface VerificationStatus {
  _id?: ObjectId;

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
