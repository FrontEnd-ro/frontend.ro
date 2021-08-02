import { Schema, model, models } from "mongoose";

import {
  validateObjectId
} from '../ServerUtils';
import { LESSONS_WITH_EXERCISES } from '../../shared/SharedConstants';
import { ExerciseJSONSchema } from '../../shared/exercise.shared-model';
import { LeasonExercicesJsonInterface } from "server/types/type"

const LessonExercisesJSONSchema = {
  ...ExerciseJSONSchema,
  lesson: { type: String, enum: LESSONS_WITH_EXERCISES, required: true }
}

const LessonExercisesSchema = new Schema<LeasonExercicesJsonInterface>(
  LessonExercisesJSONSchema,
  {
    timestamps: true,
  },
);

const LessonExercise = models.LessonExercise || model('LessonExercise', LessonExercisesSchema);

class LessonExerciseModel {
  static get(_id) {
    validateObjectId(_id);

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

export default LessonExerciseModel;
