/* eslint-disable @typescript-eslint/no-var-requires */
import { Schema, model, models } from 'mongoose';
import { ExerciseJSONInterface } from '../server/types/type';

import { validateObjectId } from '../server/ServerUtils';
// import { sanitize as userSanitize} from './user.shared-model';
import UserSharedModel from './user.shared-model';
// import userSharedModel from './user.shared-model'
const userSanitize = UserSharedModel.sanitize;
const ExerciseJSONSchema = {
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  type: { type: String, enum: ['html', 'css', 'js'] },
  tags: [{ type: String }],
  body: { type: String, required: true },
  example: { type: String },
  solution: { type: String, required: true },
  private: { type: Boolean, default: false },
  suggestion: { type: String, required: false },
};

const ExercisesSchema = new Schema<ExerciseJSONInterface>(
  ExerciseJSONSchema,
  {
    timestamps: true,
  },
);

const Exercise = models.Exercise || model('Exercise', ExercisesSchema);

function getById(_id) {
  validateObjectId(_id);
  return Exercise.findById(_id).populate('user');
}

function sanitize(exercise) {
  const sanitizedExercise = { ...exercise.toObject() };
  const propsToDelete = ['__v', 'updatedAt', 'createdAt'];

  propsToDelete.forEach((prop) => delete sanitizedExercise[prop]);

  sanitizedExercise.user = userSanitize(exercise.user);

  return JSON.parse(JSON.stringify(sanitizedExercise));
}

export default {
  Exercise,
  ExercisesSchema,
  ExerciseJSONSchema,
  getById,
  sanitize,
};

export {
  Exercise,
  ExercisesSchema,
  ExerciseJSONSchema,
  getById,
  sanitize,
};
