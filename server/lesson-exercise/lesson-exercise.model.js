const mongoose = require('mongoose');
const {
  validateObjectId
} = require('../ServerUtils');
const { LESSONS_WITH_EXERCISES } = require('../../shared/SharedConstants');
const { ExerciseJSONSchema } = require('../../shared/exercise.shared-model');

const LessonExercisesJSONSchema = {
  ...ExerciseJSONSchema,
  lesson: { type: String, enum: LESSONS_WITH_EXERCISES, required: true }
}

const LessonExercisesSchema = new mongoose.Schema(
  LessonExercisesJSONSchema,
  {
    timestamps: true,
  },
);

const LessonExercise = mongoose.models.LessonExercise || mongoose.model('LessonExercise', LessonExercisesSchema);

class LessonExerciseModel {
  static get(_id) {
    validateObjectId();

    return LessonExercise
      .findById(_id)
      .populate('user');
  }

  static getAll() {
    return LessonExercise
      .find({})
      .populate('user');
  }

  static getAllFromLesson(lessonId) {
    return LessonExercise
      .find({ lesson: lessonId })
      .populate('user');
  }
}

module.exports = LessonExerciseModel;
