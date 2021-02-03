const mongoose = require('mongoose');
const {
  ServerError,
  validateAgainstSchemaProps,
  validateObjectId
} = require('../ServerUtils');

const ExercisesSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    type: { type: String, enum: ['html', 'css', 'js'] },
    tags: [{ type: String }],
    body: { type: String, required: true },
    example: { type: String },
    solution: { type: String, required: true },
    private: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

const Exercise = mongoose.models.Exercise || mongoose.model('Exercise', ExercisesSchema);

class ExerciseModel {
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

    return Exercise.find(query);
  }

  static get(_id) {
    validateObjectId(_id);
    return Exercise.findById(_id);
  }

  static create(payload) {
    validateAgainstSchemaProps(payload, ExercisesSchema);

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
    const sanitizedExercise = { ...exercise.toObject() };
    sanitizedExercise.id = sanitizedExercise._id;

    const propsToDelete = ['__v', 'user'];

    propsToDelete.forEach((prop) => delete sanitizedExercise[prop]);

    return sanitizedExercise;
  }
}

module.exports = ExerciseModel;
