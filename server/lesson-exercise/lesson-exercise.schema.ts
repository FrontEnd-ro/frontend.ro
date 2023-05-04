import mongoose, { Types } from 'mongoose';
import { ExerciseType } from '../../shared/types/lesson-exercise.types';

export interface LessonExerciseI {
  // TODO: is this the correct way of defining IDs?
  // https://github.com/FrontEnd-ro/frontend.ro/issues/442
  _id: Types.ObjectId;

  // UUID of the user that created it
  user: Types.ObjectId;

  type: ExerciseType;

  body: string;

  // Starting code
  example?: string;

  solution: string;

  // Lesson suggestion for which this exercise was created
  //
  // IMPORTANT: this is not the lesson ID, but a basic string
  // for human-users to understand when looking at the exercise/DB.
  // Examples: "html/Despre HTML"
  suggestion?: string;

  // Lesson to which this exercise is assigned to
  // This is not an UUID
  lesson: string;
}

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
