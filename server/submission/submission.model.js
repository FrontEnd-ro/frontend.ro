const mongoose = require('mongoose');
import { SubmissionSchema } from './submission.schema';
const { PAGE_SIZE, validateAgainstSchemaProps, validateObjectId } = require('../ServerUtils');
import UserModel from '../user/user.model';
import { SubmissionStatus } from '../../shared/types/submission.types';
import LessonExerciseModel from '../lesson-exercise/lesson-exercise.model';
const { ServerError } = require('../utils/ServerError');

/** Initialize the User Schema because we need it when referencing & populating the results */
require('../user/user.model');
require('../lesson-exercise/lesson-exercise.model');

SubmissionSchema.index({ user: 1, exercise: 1 }, { unique: true });

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
      .sort('-updatedAt');

    // Sort first the `AWAITING_REVIEW` status
    // TODO: find a way to do this at the DB level.
    // After a brief search online I couldn't find anything
    // that worked "out-of-the-box". My guess is that it's
    // not so trivial, but it needs further research.
    const sortedByStatus = all.sort((s1, s2) => {
      if (s1.status === SubmissionStatus.AWAITING_REVIEW) {
        return -1;
      }

      if (s2.status === SubmissionStatus.AWAITING_REVIEW) {
        return 1;
      }

      return 0;
    });

    const results = [];
    let index = 0;

    /**
     * FIXME
     * Surely that has to be a better way to do pagination with an offset
     * than this 👇
     */
    // eslint-disable-next-line no-restricted-syntax
    for (const submission of sortedByStatus) {
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
      throw new ServerError(404, 'generic.404', { _id });
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
      throw new ServerError(404, 'generic.404', { _id });
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

  static sanitize(submission) {
    let sanitizedSubmission = { ...submission };
    if (submission instanceof mongoose.Document) {
      sanitizedSubmission = { ...submission.toObject() };
    }

    sanitizedSubmission.user = UserModel.sanitize(sanitizedSubmission.user);
    sanitizedSubmission.exercise = LessonExerciseModel.sanitize(sanitizedSubmission.exercise);

    const propsToDelete = ['__v'];

    propsToDelete.forEach((prop) => delete sanitizedSubmission[prop]);

    return sanitizedSubmission;
  }
}

module.exports = SubmissionModel;
