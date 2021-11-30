/* eslint-disable @typescript-eslint/no-var-requires */
const mongoose = require('mongoose');
const { validateObjectId } = require('../server/ServerUtils');
const { sanitize: userSanitize } = require('./user.shared-model');

const ExerciseJSONSchema = {
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  type: { type: String, enum: ['html', 'css', 'js'] },
  tags: [{ type: String }],
  body: { type: String, required: true },
  example: { type: String },
  solution: { type: String, required: true },
  private: { type: Boolean, default: false },
  suggestion: { type: String, required: false },
};

const ExercisesSchema = new mongoose.Schema(
  ExerciseJSONSchema,
  {
    timestamps: true,
  },
);

const Exercise = mongoose.models.Exercise || mongoose.model('Exercise', ExercisesSchema);

function getById(_id) {
  validateObjectId(_id);
  return Exercise.findById(_id).populate('user');
}

function sanitize(exercise) {
  // TODO: decide on an approach to use among all schema
  // https://github.com/FrontEnd-ro/frontend.ro/issues/438
  let sanitizedExercise = { ...exercise };
  if (exercise instanceof mongoose.Document) {
    sanitizedExercise = { ...exercise.toObject() };
  }
  const propsToDelete = ['__v', 'updatedAt', 'createdAt'];

  propsToDelete.forEach((prop) => delete sanitizedExercise[prop]);

  sanitizedExercise.user = userSanitize(exercise.user);

  return JSON.parse(JSON.stringify(sanitizedExercise));
}

module.exports = {
  Exercise,
  ExercisesSchema,
  ExerciseJSONSchema,
  getById,
  sanitize,
};
