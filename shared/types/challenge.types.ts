import { ObjectId } from 'mongoose';

export interface ChallengeI {
  _id?: ObjectId;

  // Unique, human-readable ID.
  // This is used when Routing in the UI.
  challengeId: string;

  // Displayed in the UI
  title: string;

  tasks: ChallengeTaskI[];

  // Stringified JSON containing type definitions
  // of the NPM packages we use in this code.
  // These definitions can be loaded into the
  // Editor to provide us with autocomplete
  // and intellisense.
  // NOTE: putting these on the challenge itself
  // instead of on the Task because we expect Challenge
  // to use more-or-less the same packages across tasks.
  typeDefinitions?: string;
}

// When reading this data on the client, we're actually parsing a few
// properties so we have typed JSON objects instead of strings.
export interface ParsedChallengeI extends Omit<ChallengeI, 'typeDefinitions'> {
  typeDefinitions: {content: string; path: string;}[];
}

export interface ChallengeTaskI {
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
