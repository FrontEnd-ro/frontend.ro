import { API_UserI } from "./user.types";
import { API_LessonExerciseI } from "./lesson-exercise.types";

export enum FeedbackType {
  PRAISE = 'praise',
  OPINION = 'opinion',
  IMPROVEMENT = 'improvement',
}

export type API_SubmissionI = {
  _id: string;
  code: string;
  user: API_UserI;
  exercise: API_LessonExerciseI;
  assignee: API_UserI;
  status: SubmissionStatus;
  feedbacks: API_FeedbackI[];
}

export interface API_SubmissionVersionI {
  _id: string;
  feedbacks: API_FeedbackI[];
  code: string;
  approved: boolean;
  submission: string;
  createdAt: string;
}

export interface API_FeedbackI {
  // When adding feedback the ID gets populated server side
  _id?: string;
  type: FeedbackType,
  body: string;
  file_key: string;
  position: number[];
}

export enum SubmissionStatus {
  IN_PROGRESS = 'in_progress',
  AWAITING_REVIEW = 'awaiting_review',
  DONE = 'done',
}
