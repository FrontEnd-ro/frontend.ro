import { API_UserI } from '~/../shared/types/user.types';
import { LessonExercise } from '../user/types';
import { SubmissionStatus } from '~/../shared/types/submission.types';

interface SubmissionFeedback {
    _id: string;
    // FIXME: use a type for SubmissionFeedback types
    type: string;
    body: string;
    // eslint-disable-next-line camelcase
    file_key: string;
    position: number[];
}
export interface Submission {
  _id: string;
  user: API_UserI;
  exercise: LessonExercise;
  status: SubmissionStatus;
  submittedAt: number;
  updatedAt: number;
  code: string;
  feedbacks: SubmissionFeedback[]
}
export interface SubmissionState {
  submissions: Submission[];
  search: string;
  page: number;
  end: boolean;
}
export enum SubmissionType {
  PENDING = 'pending',
  ASSIGNED = 'assigned',
}
