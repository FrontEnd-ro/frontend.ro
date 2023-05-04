import { API_LessonExerciseI } from './lesson-exercise.types';
import { API_UserI } from './user.types';

export interface API_CertificationI {
  _id?: string;
  tutorial?: {
    name: string;
    tutorialId: string;
  };
  challenge?: {
    title: string;
    challengeId: string;
  };
  user: API_UserI;
  timestamp: number;
  lesson_exercises: API_LessonExerciseI[];
  og_image?: string;
  pdf?: string;
}
