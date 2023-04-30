import mongoose from 'mongoose';
import UserModel from '../user/user.model';
import { ServerError } from '../utils/ServerError';
import { UserI } from '../../shared/types/user.types';
import { Submission, SubmissionSchema } from './submission.schema';
import { LessonExerciseI } from '../../shared/types/exercise.types';
import { SubmissionStatus } from '../../shared/types/submission.types';
import LessonExerciseModel from '../lesson-exercise/lesson-exercise.model';
import { PAGE_SIZE, validateAgainstSchemaProps, validateObjectId } from '../ServerUtils';

class SubmissionModel {
  static get(_id) {
    return Submission
      .findById(_id)
      .populate<{ user: UserI }>({ path: 'user' })
      .populate<{ exercise: LessonExerciseI }>({ path: 'exercise' });
  }

  static getByExerciseId(userId, exerciseId) {
    validateObjectId(exerciseId);

    return Submission
      .findOne({
        user: userId,
        exercise: exerciseId
      })
      .populate<{ user: UserI }>({ path: 'user' })
      .populate<{ exercise: LessonExerciseI }>({ path: 'exercise' })
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
      .populate<{ user: UserI }>({ path: 'user' })
      .populate<{ exercise: LessonExerciseI }>({ path: 'exercise' })
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
      .populate<{ exercise: LessonExerciseI }>({ path: 'exercise' })
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

    await submission.save();
  }

  static create(payload) {
    validateAgainstSchemaProps(payload, SubmissionSchema);
    return new Submission(payload).save();
  }

  static async delete(_id) {
    const submission = await Submission.findById(_id);

    if (!submission) {
      throw new ServerError(404, 'generic.404', { _id });
    }
    const x = await submission.delete();
    console.log(x);
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

export default SubmissionModel;
