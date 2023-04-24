const mongoose = require('mongoose');
const {
  validateObjectId
} = require('../ServerUtils');
const { ExerciseSchemaJSONDefinition } = require('../exercise/exercise.schema');

const LessonExercisesJSONSchema = {
  ...ExerciseSchemaJSONDefinition,
  lesson: { type: String, required: true }
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
