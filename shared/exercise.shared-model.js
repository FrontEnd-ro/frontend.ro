/* eslint-disable @typescript-eslint/no-var-requires */
const mongoose = require('mongoose');
const { validateObjectId } = require('../server/ServerUtils');
const { sanitize: userSanitize } = require('./user.shared-model');

const ExercisesSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    type: { type: String, enum: ['html', 'css', 'js'] },
    tags: [{ type: String }],
    body: { type: String, required: true },
    example: { type: String },
    solution: { type: String, required: true },
    private: { type: Boolean, default: false },
    suggestion: { type: String, required: false },
  },
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
  const sanitizedExercise = { ...exercise.toObject() };
  const propsToDelete = ['__v', 'updatedAt', 'createdAt'];

  propsToDelete.forEach((prop) => delete sanitizedExercise[prop]);

  sanitizedExercise.user = userSanitize(exercise.user);

  return JSON.parse(JSON.stringify(sanitizedExercise));
}

module.exports = {
  Exercise,
  ExercisesSchema,
  getById,
  sanitize,
};
