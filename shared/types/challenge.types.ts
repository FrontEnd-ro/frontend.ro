import { ObjectId } from 'mongoose';

export interface ChallengeI {
  _id?: ObjectId;

  // Unique, human-readable ID.
  // This is used when Routing in the UI.
  challengeId: string;

  // Displayed in the UI
  title: string;

  tasks: ChallengeTaskI[];
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
