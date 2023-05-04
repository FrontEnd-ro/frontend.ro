import { Types } from 'mongoose';
import { API_UserI, UserI } from './user.types';

export enum ExerciseType {
  HTML = 'html',
  CSS = 'css',
  JS = 'js',
}

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

export type API_LessonExerciseI = {
  _id: string;
  user: API_UserI;
  type: ExerciseType;
  body: string;
  example?: string;
  solution: string;
  suggestion?: string;
  lesson: string;
}
