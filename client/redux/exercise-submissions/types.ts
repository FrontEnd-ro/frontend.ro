import { Exercise } from '../user/types';

export enum ChapterType {
  HTML = 'html',
  CSS = 'css',
  JS = 'js',
}

interface SubmissionFeedback {
    _id: string;
    // FIXME: use a type for SubmissionFeedback types
    type: string;
    body: string;
    // eslint-disable-next-line camelcase
    file_key: string;
    position: number[];
}
interface User {
  name: string;
  username: string;
  email: string;
  avatar: string;
}

export interface Submission {
  _id: string;
  user: User;
  exercise: Exercise;
  chapter: ChapterType;
  type: SubmissionType;
  // FIXME 👇
  // SUBMISSION_STATUS
  status: string;
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
