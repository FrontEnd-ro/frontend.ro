import { Types } from "mongoose";
import { UserI, API_UserI } from "./user.types";
import { WIPPopulatedLessonExerciseI, WIPSanitizedLessonExercise } from "./lesson-exercise.types";

export enum FeedbackType {
  PRAISE = 'praise',
  OPINION = 'opinion',
  IMPROVEMENT = 'improvement',
}

export interface FeedbackI {
  _id?: string;

  type: FeedbackType,
  body: string;
  // eslint-disable-next-line camelcase
  file_key: string;
  position: number[];
}

export interface SubmissionI {
  _id?: Types.ObjectId;

  code: string;

  user: Types.ObjectId;

  assignee: Types.ObjectId;

  exercise: Types.ObjectId;

  status: SubmissionStatus;

  feedbacks: FeedbackI[]

  updatedAt: Date;

  createdAt: Date;
}

export interface WIPPopulatedSubmissionI {
  _id: Types.ObjectId;

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

  user: API_UserI;

  exercise: WIPSanitizedLessonExercise;

  assigneed: API_UserI;
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
