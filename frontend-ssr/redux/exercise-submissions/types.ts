import { ChapterType } from '~/shared-types';

interface User {
  name: string;
  username: string;
  email: string;
  avatar: string;
}

interface Exercise {
  type: ChapterType;
  body: string;
}
export interface Submission {
  _id: string;
  user: User;
  exercise: Exercise;
  chapter: ChapterType;
  type: SubmissionType;
  submittedAt: number;
  updatedAt: number;
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
