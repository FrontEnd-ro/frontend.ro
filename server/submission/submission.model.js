const mongoose = require('mongoose');
import { SubmissionSchema } from './submission.schema';
const uniqueValidator = require('mongoose-unique-validator');
const { PAGE_SIZE, ServerError, validateAgainstSchemaProps, validateObjectId } = require('../ServerUtils');
import { SubmissionStatus } from '../../shared/types/submission.types';

/** Initialize the User Schema because we need it when referencing & populating the results */
require('../user/user.model');
require('../exercise/exercise.model');

SubmissionSchema.index({ user: 1, exercise: 1 }, { unique: true });
SubmissionSchema.plugin(uniqueValidator);

const Submission = mongoose.models.Submission || mongoose.model('Submission', SubmissionSchema);

class SubmissionModel {
  static get(_id) {
    return Submission
      .findById(_id)
      .populate({ path: 'user' })
      .populate({ path: 'exercise' });
  }

  static getByExerciseId(userId, exerciseId) {
    validateObjectId(exerciseId);

    return Submission
      .findOne({
        user: userId,
        exercise: exerciseId
      })
      .populate({ path: 'user' })
      .populate({ path: 'exercise' })
      .populate({
        path: 'exercise',
        populate: {
          path: 'user'
        }
      });
  }

  static getUserSubmission(userId, exerciseId) {
    validateObjectId(exerciseId);
    validateObjectId(userId);

    return Submission
      .findOne({
        user: userId,
        exercise: exerciseId
      })
      .populate({ path: 'user' })
      .populate({ path: 'exercise' })
      .populate({
        path: 'exercise',
        populate: {
          path: 'user'
        }
      });
  }

  static getAllUserSubmissions(userId) {
    validateObjectId(userId);

    return Submission
      .find({ user: userId })
      .populate({
        path: 'exercise',
        populate: {
          path: 'user'
        }
      });
  }

  static async search(page = 0, query = '', statuses = [SubmissionStatus.AWAITING_REVIEW]) {
    const all = await Submission
      .find({
        // Filter by one or more statuses
        $or: statuses.map(status => ({ status }))
      })
      .populate({
        path: 'user',
        match: {
          $or: [
            { email: { $regex: new RegExp(`${query.toLowerCase()}`, 'i') } },
            { name: { $regex: new RegExp(`${query.toLowerCase()}`, 'i') } },
            { username: { $regex: new RegExp(`${query.toLowerCase()}`, 'i') } },
          ],
        },
      })
      .populate('exercise')
      .sort('-submittedAt');

    const results = [];
    let index = 0;

    /**
     * FIXME
     * Shurely that has to be a better way to do pagination with an offset
     * than this 👇
     */
    // eslint-disable-next-line no-restricted-syntax
    for (const submission of all) {
      if (submission.user) {
        if (index >= page * PAGE_SIZE) {
          results.push(submission);
        }
        index += 1;
      }
      if (results.length === PAGE_SIZE) {
        return results;
      }
    }
    return results;
  }

  static async update(_id, payload) {
    const submission = await Submission.findById(_id);

    if (!submission) {
      throw new ServerError(404, `Couldn't update non-existent submission with id=${_id}.`);
    }

    validateAgainstSchemaProps(payload, SubmissionSchema);
    Object.assign(submission, payload);

    return new Promise((resolve, reject) => {
      submission.save((err, data) => {
        if (err) {
          return reject(err);
        }

        resolve();
      });
    });
  }

  static async create(payload) {
    validateAgainstSchemaProps(payload, SubmissionSchema);

    const submission = new Submission(payload);

    return new Promise((resolve, reject) => {
      submission.save((err, data) => {
        if (err) {
          return reject(err);
        }

        resolve(data);
      });
    });
  }

  static async delete(_id) {
    const submission = await Submission.findById(_id);

    if (!submission) {
      throw new ServerError(404, `Couldn't delete non-existent submission with id=${_id}.`);
    }

    return new Promise((resolve, reject) => {
      submission.delete((err) => {
        if (err) {
          return reject(err);
        }

        resolve();
      });
    });
  }
}

module.exports = SubmissionModel;
