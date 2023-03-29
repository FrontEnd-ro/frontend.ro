import { PopulatedDoc, Document, ObjectId } from 'mongoose';
import { ChallengeI } from './challenge.types';
import { LessonExerciseI, WIPPopulatedLessonExerciseI } from './exercise.types';
import { TutorialI } from './tutorial.types';
import { PublicUserI, UserI } from './user.types';

export interface CertificationI {
  // Optional because when we create certifications
  // we don't know what ID will MongoDB use
  _id?: string;

  tutorial: ObjectId;

  // FIXME
  // We should merge the concepts of Tutorial and Challenge. They are very similar.
  // When we do this, remove this code. We added it because we had no time left to
  // properly implement this before Christmas Advent.
  challenge: ObjectId;

  // UUID of the user that got the certification
  user: PopulatedDoc<UserI>;

  // Nanos
  timestamp: number;

  // UUIDs of Lesson Exercises
  // eslint-disable-next-line camelcase
  lesson_exercises: PopulatedDoc<LessonExerciseI>[];

  // eslint-disable-next-line camelcase
  og_image?: string;

  pdf?: string;
}

// FIXME: https://github.com/FrontEnd-ro/frontend.ro/issues/443
export interface WIPPopulatedCertificationI {
  // TODO: what is the correct way of defining IDs?
  // https://github.com/FrontEnd-ro/frontend.ro/issues/442
  _id?: string;

  tutorial: TutorialI;

  challenge: ChallengeI;

  user: PublicUserI;

  // Nanos
  timestamp: number;

  // eslint-disable-next-line camelcase
  lesson_exercises: WIPPopulatedLessonExerciseI[];

  // eslint-disable-next-line camelcase
  og_image?: string;

  pdf?: string;
}
