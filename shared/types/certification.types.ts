import { PopulatedDoc } from 'mongoose';
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

  // IDs of Lesson Exercises
  // eslint-disable-next-line camelcase
  lesson_exercises: string[];
}
