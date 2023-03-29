const mongoose = require('mongoose');
const {
  ServerError,
  validateAgainstSchemaProps,
  validateObjectId
} = require('../ServerUtils');
const UserModel = require('../user/user.model');
const { ExerciseSchema } = require('./exercise.schema');

const Exercise = mongoose.models.Exercise || mongoose.model('Exercise', ExerciseSchema);

class ExerciseModel {
  // TODO: rename to getById
  static get(_id) {
    validateObjectId(_id);
    return Exercise.findById(_id).populate('user');
  }

  static getAllPublic() {
    return Exercise.find({ private: false });
  }

  static getUserExercises(userId, publicOnly = false) {
    const query = {
      user: userId
    }

    if (publicOnly) {
      query.private = false
    }

    return Exercise.find(query).populate("user");
  }

  static create(payload) {
    validateAgainstSchemaProps(payload, ExerciseSchema);

    const exercise = new Exercise(payload);

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
    const exercise = await Exercise.findById(_id);

    if (!exercise) {
      throw new ServerError(404, `Couldn't update non-existent exercise with id=${_id}.`);
    }

    validateAgainstSchemaProps(payload, ExerciseSchema);
    Object.assign(exercise, payload);

    return exercise.save();
  }

  static async delete(_id) {
    validateObjectId(_id);

    const exercise = await Exercise.findById(_id);

    if (!exercise) {
      throw new ServerError(404, `Couldn't delete non-existent exercise with id=${_id}.`);
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

module.exports = ExerciseModel;
