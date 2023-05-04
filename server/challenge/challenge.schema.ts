import mongoose, { Types } from 'mongoose';

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

const ChallengeTaskSchema = new mongoose.Schema<ChallengeTaskI>({
  taskId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  explainer: { type: String, required: true },
  solution: { type: String, required: false },
  startingFile: { type: String, required: false},
  startingCode: { type: String, required: false },
  filesThatCanBeEdited: [{ type: String, required: false }],
});

const ChallengeIntroExplainerSchema = new mongoose.Schema<{ title: string; markdown: string}>({
  title: { type: String, required: true },
  markdown: { type: String, required: true },
})

const ChallengeSchema = new mongoose.Schema<ChallengeI>({
  challengeId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  tasks: [{ type: ChallengeTaskSchema, required: true }],
  introExplainer: { type: ChallengeIntroExplainerSchema, required: false },
});

const Challenge: mongoose.Model<ChallengeI, {}, {}> = mongoose.models.Challenge || mongoose.model('Challenge', ChallengeSchema);

export default Challenge;
