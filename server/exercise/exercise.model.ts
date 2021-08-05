// const mongoose from 'mongoose');
import {
  ServerError,
  validateAgainstSchemaProps,
  validateObjectId
} from '../ServerUtils';

import { ExercisesSchema, Exercise, getById, sanitize } from '../../shared/exercise.shared-model';
import { Schema } from 'mongoose'
import {ExerciseJSONInterface, Query} from '../types/type';
class ExerciseModel {
  static async  getAllPublic():Promise<ExerciseJSONInterface[]> {
    return await Exercise.find({ private: false });
  }

  static async getUserExercises(userId:Schema.Types.ObjectId, publicOnly:Boolean = false) :Promise<ExerciseJSONInterface[]> {
    const query : Query =  {
      user: userId
    }
    if (publicOnly) {
      query.private = false
    }
    return await Exercise.find(query).populate("user");
  }

  static get = getById;

  static create(payload) {
    validateAgainstSchemaProps(payload, ExercisesSchema);

    const exercise = new Exercise(payload);

    return new Promise<ExerciseJSONInterface>((resolve, reject) => {
      exercise.save((err, data) => {
        if (err) {
          return reject(err);
        }

        resolve(data);
      });
    });
  }

  static async update(_id, payload):Promise<ExerciseJSONInterface> {
    validateObjectId(_id);
    const exercise = await Exercise.findById(_id);

    if (!exercise) {
      throw new ServerError(404, `Couldn't update non-existent exercise with id=${_id}.`);
    }

    validateAgainstSchemaProps(payload, ExercisesSchema);
    Object.assign(exercise, payload);

    return exercise.save();
  }

  static async delete(_id) {
    validateObjectId(_id);

    const exercise = await Exercise.findById(_id);

    if (!exercise) {
      throw new ServerError(404, `Couldn't delete non-existent exercise with id=${_id}.`);
    }

    return new Promise<void>((resolve, reject) => {
      exercise.delete((err) => {
        if (err) {
          reject(err);
          return;
        }

        resolve();
      });
    });
  }

  static sanitize = sanitize;
}

export default ExerciseModel;
