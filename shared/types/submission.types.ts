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

export interface SubmissionVersionI {
  feedbacks: FeedbackI[];
  code: string;
  approved: boolean;
  submission: string;
}
