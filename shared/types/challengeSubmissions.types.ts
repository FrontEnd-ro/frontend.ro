import { API_UserI } from './user.types';

export interface API_ChallengeSubmissionTaskI {
  title: string;
  taskId: string;
  explainer: string;
  startingCode?: string;
  startingFile?: string;
  solution?: string;
  filesThatCanBeEdited: string[];
  codeForFilesThatCanBeEdited: string;
  status?: API_VerificationStatus;
}

export interface API_ChallengeSubmissionI {
  challengeId: string;
  user: API_UserI;
  tasks: API_ChallengeSubmissionTaskI[];
  title: string;
  introExplainer?: {
    title: string;
    markdown: string;
  }
}

export interface API_VerificationStatus {
  valid: boolean;
  error?: {
    description: string;
    stackTrace?: string;
    suggestions?: string[];
  };
}
