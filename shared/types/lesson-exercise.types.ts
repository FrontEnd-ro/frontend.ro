import { API_UserI } from './user.types';

export enum ExerciseType {
  HTML = 'html',
  CSS = 'css',
  JS = 'js',
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
