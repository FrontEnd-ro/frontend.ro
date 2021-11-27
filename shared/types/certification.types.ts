import { PopulatedDoc, Document } from 'mongoose';
import { LessonExerciseI, WIPPopulatedLessonExerciseI } from './exercise.types';
import { UserI } from './user.types';

export interface CertificationModule {
  name: string;
  url: string;
}

export interface CertificationI {
  // Optional because when we create certifications
  // we don't know what ID will MongoDB use
  _id?: string;

  module: CertificationModule;

  // UUID of the user that got the certification
  user: PopulatedDoc<UserI>;

  // Nanos
  timestamp: number;

  // UUIDs of Lesson Exercises
  // eslint-disable-next-line camelcase
  lesson_exercises: PopulatedDoc<LessonExerciseI>[];
}

// FIXME: https://github.com/FrontEnd-ro/frontend.ro/issues/443
export interface WIPPopulatedCertificationI {
  // TODO: what is the correct way of defining IDs?
  // https://github.com/FrontEnd-ro/frontend.ro/issues/442
  _id?: string;

  module: CertificationModule;

  user: UserI;

  // Nanos
  timestamp: number;

  // eslint-disable-next-line camelcase
  lesson_exercises: WIPPopulatedLessonExerciseI[];
}
