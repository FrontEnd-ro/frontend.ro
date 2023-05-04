import { ObjectId, Types } from 'mongoose';
import { ChallengeI } from './challenge.types';
import { API_LessonExerciseI } from './lesson-exercise.types';
import { API_TutorialI } from './tutorial.types';
import { API_UserI } from './user.types';

export interface CertificationI {
  // Optional because when we create certifications
  // we don't know what ID will MongoDB use
  _id?: Types.ObjectId;

  tutorial: ObjectId;

  // FIXME
  // We should merge the concepts of Tutorial and Challenge. They are very similar.
  // When we do this, remove this code. We added it because we had no time left to
  // properly implement this before Christmas Advent.
  challenge: ObjectId;

  // UUID of the user that got the certification
  user: Types.ObjectId;

  // Nanos
  timestamp: number;

  // UUIDs of Lesson Exercises
  // eslint-disable-next-line camelcase
  lesson_exercises: Types.ObjectId[];

  // eslint-disable-next-line camelcase
  og_image?: string;

  pdf?: string;
}

export interface API_CertificationI {
  _id?: string;
  tutorial: API_TutorialI;
  challenge: ChallengeI;
  user: API_UserI;
  timestamp: number;
  lesson_exercises: API_LessonExerciseI[];
  og_image?: string;
  pdf?: string;
}
