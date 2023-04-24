import mongoose from 'mongoose';
import { LessonExerciseI } from '../../shared/types/exercise.types';

const LessonExercisesSchema = new mongoose.Schema<LessonExerciseI>({
  // Who created this exercise?
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

  // Which general module/topic does this exercise belong to?
  // NOTE: since we also have lesson, do we need this?
  type: { type: String, enum: ['html', 'css', 'js'] },

  // Requirement of this exercise. This is a
  // description in the markdown.
  body: { type: String, required: true },

  // Starting code
  example: { type: String },

  // Code solution to this exercise
  solution: { type: String, required: true },
  
  // What lesson does this exercise belong to?
  // NOTE: this might later be changed into an Array<string>
  // if we want to have an exercise in multiple lessons.
  lesson: { type: String, required: true }
});

const LessonExerciseModel = mongoose.model<LessonExerciseI>('LessonExercise', LessonExercisesSchema);

const LessonExercise: mongoose.Model<LessonExerciseI> = mongoose.models.LessonExercise || LessonExerciseModel;

export {
  LessonExercise,
  LessonExerciseModel,
  LessonExercisesSchema,
};
