/* eslint-disable camelcase */
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import { validateAgainstSchemaProps } from '~/server/database';
import { PAGE_SIZE, ServerError } from '~/server/ServerUtils';
/** Initialize the User Schema because we need it when referencing & populating the results */
import '~/server/model/user.model';
import '~/server/model/exercise.model';

const SubmissionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    exercise: { type: mongoose.Schema.Types.ObjectId, ref: 'Exercise', required: true },
    code: { type: String, required: true },
    assignee: { type: String, default: null },
  },
  {
    timestamps: {
      createdAt: 'submittedAt',
      updatedAt: 'updatedAt',
    },
  },
);

SubmissionSchema.index({ user: 1, exercise: 1 }, { unique: true });
SubmissionSchema.plugin(uniqueValidator);

const Submission = mongoose.models.Submission || mongoose.model('Submission', SubmissionSchema);

class SubmissionModel {
  static get(_id) {
    return Submission.findById(_id);
  }

  static async search(page = 0, query = '') {
    const all = await Submission
      .find({})
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

    return new Promise((resolve, reject) => {
      submission.save((err, data) => {
        if (err) {
          return reject(err);
        }

        resolve(data);
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

export default SubmissionModel;
