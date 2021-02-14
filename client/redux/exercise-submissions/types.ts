import { Exercise } from '../user/types';

export enum ChapterType {
  HTML = 'html',
  CSS = 'css',
  JS = 'js',
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
  status: string;
  submittedAt: number;
  updatedAt: number;
  code: string;
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
