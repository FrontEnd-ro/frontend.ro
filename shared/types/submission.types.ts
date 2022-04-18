import { ObjectId } from "mongoose";
import { UserI, WIPSanitizedUser } from "./user.types";
import { WIPPopulatedLessonExerciseI, WIPSanitizedLessonExercise } from "./exercise.types";

export enum FeedbackType {
  PRAISE = 'praise',
  OPINION = 'opinion',
  IMPROVEMENT = 'improvement',
}

export interface FeedbackI {
  type: FeedbackType,
  body: string;
  // eslint-disable-next-line camelcase
  file_key: string;
  position: number[];
}

export interface SubmissionI {
  _id?: ObjectId;

  code: string;

  user: ObjectId;

  assignee: ObjectId;

  exercise: ObjectId;

  status: SubmissionStatus;

  feedbacks: ObjectId[]

  updatedAt: Date;

  createdAt: Date;
}

export interface WIPPopulatedSubmissionI {
  _id: ObjectId;

  code: string;

  user: UserI;

  exercise: WIPPopulatedLessonExerciseI;

  assignee: UserI;
  
  status: SubmissionStatus;

  feedbacks: FeedbackI[];

  updatedAt: Date;

  createdAt: Date;
}

// FIXME: https://github.com/FrontEnd-ro/frontend.ro/issues/443
export type WIPSanitiedSubmission = Pick<WIPPopulatedSubmissionI, 'code' | 'status' | 'feedbacks'> & {
  _id: string;

  user: WIPSanitizedUser;

  exercise: WIPSanitizedLessonExercise;

  assigneed: WIPSanitizedUser;
}

export interface SubmissionVersionI {
  // TODO: is this the correct way of defining IDs?
  // https://github.com/FrontEnd-ro/frontend.ro/issues/442
  _id: string;
  feedbacks: FeedbackI[];
  code: string;
  approved: boolean;
  submission: string;
  createdAt: string;
}

export enum SubmissionStatus {
  IN_PROGRESS = 'in_progress',
  AWAITING_REVIEW = 'awaiting_review',
  DONE = 'done',
}
