import mongoose from 'mongoose';
import { ChallengeI, ChallengeTaskI } from '../../shared/types/challenge.types';

const ChallengeTaskSchema = new mongoose.Schema<ChallengeTaskI>({
  taskId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  explainer: { type: String, required: true },
  solution: { type: String, required: false },
  startingFile: { type: String, required: false},
  startingCode: { type: String, required: false },
  filesThatCanBeEdited: [{ type: String, required: false }],
});

const ChallengeSchema = new mongoose.Schema<ChallengeI>({
  challengeId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  tasks: [{ type: ChallengeTaskSchema, required: true }],
  typeDefinitions: { type: String, required: false },
});

const Challenge = mongoose.models.Challenge || mongoose.model('Challenge', ChallengeSchema);

export default Challenge;
