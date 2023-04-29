import UserModel from '../user/user.model';
import mongoose, { Document } from 'mongoose';
import { ServerError } from '../utils/ServerError';
import { UserI } from '../../shared/types/user.types';
import { LessonExercisesSchema, LessonExercise } from "./lesson-exercise.schema";
import {  WIPPopulatedLessonExerciseI } from '../../shared/types/exercise.types';
import { validateAgainstSchemaProps, validateObjectId } from '../ServerUtils';

class LessonExerciseModel {
  static get(_id) {
    validateObjectId(_id);

    return LessonExercise
      .findById(_id)
      .populate('user');
  }

  static async getCount(lessonId: string) {
    const count = await LessonExercise
      .find({ lesson: lessonId })
      .count();

    return count;
  }

  static async getAll() {
    const lessons = await LessonExercise
      .find({})
      .populate<{ user: UserI}>('user');

    return lessons;
  }

  static async getAllFromLesson(lessonId): Promise<Document<any, any, WIPPopulatedLessonExerciseI>[]> {
    const lessons = await LessonExercise
      .find({ lesson: lessonId })
      .populate<{ user: UserI }>('user');

    return lessons;
  }

  static create(payload) {
    validateAgainstSchemaProps(payload, LessonExercisesSchema);

    const exercise = new LessonExercise(payload);

    return new Promise((resolve, reject) => {
      exercise.save((err, data) => {
        if (err) {
          return reject(err);
        }

        resolve(data);
      });
    });
  }

  static async update(_id, payload) {
    validateObjectId(_id);
    const exercise = await LessonExercise.findById(_id);

    if (!exercise) {
      throw new ServerError(404, 'generic.404', { _id });
    }

    validateAgainstSchemaProps(payload, LessonExercisesSchema);
    Object.assign(exercise, payload);

    return exercise.save();
  }

  static async delete(_id): Promise<void> {
    validateObjectId(_id);

    const exercise = await LessonExercise.findById(_id);

    if (!exercise) {
      throw new ServerError(404, 'generic.404', { _id });
    }

    return new Promise((resolve, reject) => {
      exercise.delete((err) => {
        if (err) {
          reject(err);
          return;
        }

        resolve();
      });
    });
  }

  static sanitize(exercise) {
    // TODO: decide on an approach to use among all schema
    // https://github.com/FrontEnd-ro/frontend.ro/issues/438
    let sanitizedExercise = { ...exercise };
    if (exercise instanceof mongoose.Document) {
      sanitizedExercise = { ...exercise.toObject() };
    }
    const propsToDelete = ['__v', 'updatedAt', 'createdAt'];

    propsToDelete.forEach((prop) => delete sanitizedExercise[prop]);

    sanitizedExercise.user = UserModel.sanitizeForPublic(exercise.user);

    return JSON.parse(JSON.stringify(sanitizedExercise));
  }
}

export default LessonExerciseModel;
