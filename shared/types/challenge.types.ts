import { Types } from 'mongoose';

export interface ChallengeI {
  _id?: Types.ObjectId;

  // Unique, human-readable ID.
  // This is used when Routing in the UI.
  challengeId: string;

  // Displayed in the UI
  title: string;

  tasks: ChallengeTaskI[];

  // This can be used to give some general information
  // regarding the challenge.
  introExplainer?: {
    title: string;

    markdown: string;
  }
}

export interface ChallengeTaskI {
  _id?: Types.ObjectId;

  // Unique, human-readable ID.
  // This is used when routing in the UI.
  taskId: string;

  title: string;

  // In markdown format
  explainer: string;

  // Stringified JSON
  // If this is missing it means we have a
  // challenge that doesn't involve coding,
  // for example the Git/GitHub one.
  startingCode?: string;

  // Which file to initially open/show to the User.
  startingFile?: string;

  // Stringified JSON
  // If this is missing it means we have a
  // challenge that doesn't involve coding,
  // for example the Git/GitHub one.
  solution?: string;

  // Ids of files the user can edit when
  // solving this challenge. If the challenge
  // doesn't involve coding, leave this empty.
  filesThatCanBeEdited: string[];
}

export type API_ChallengeTaskI = {
  taskId: string;
  title: string;
  explainer: string;
  startingCode?: string;
  startingFile?: string;
  solution?: string;
  filesThatCanBeEdited: string[];
}

export type API_ChallengeI = {
  challengeId: string;
  title: string;
  tasks: API_ChallengeTaskI[];
  introExplainer?: {
    title: string;
    markdown: string;
  }
}

export type TypeDefinition = {content: string; path: string;};
