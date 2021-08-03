import {
  PAGE_SIZE,
  ServerError,
  validateAgainstSchemaProps,
  validateObjectId,
} from "../ServerUtils";
import { SubmissionStatus } from "../../shared/SharedConstants";
/* eslint-disable camelcase */
import { Schema, model, models } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import { FeedbackInterface, SubmissionInterface } from "../types/type";
/** Initialize the User Schema because we need it when referencing & populating the results */
require("../user/user.model");
require("../exercise/exercise.model");

const FeedbackSchema = new Schema<FeedbackInterface>(
  {
    body: { type: String, required: true },
    file_key: { type: String, required: true },
    position: { type: [Number], required: true },
    type: {
      type: String,
      enum: ["praise", "opinion", "improvement"],
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "submittedAt",
      updatedAt: "updatedAt",
    },
  }
);

const SubmissionSchema = new Schema<SubmissionInterface>(
  {
    code: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    assignee: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    exercise: {
      type: Schema.Types.ObjectId,
      ref: "LessonExercise",
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(SubmissionStatus),
      default: SubmissionStatus.IN_PROGRESS,
    },
    feedbacks: [FeedbackSchema],
  },
  {
    timestamps: {
      createdAt: "submittedAt",
      updatedAt: "updatedAt",
    },
  }
);

SubmissionSchema.index({ user: 1, exercise: 1 }, { unique: true });
SubmissionSchema.plugin(uniqueValidator);

const Submission = models.Submission || model("Submission", SubmissionSchema);

class SubmissionModel {
  static get(_id) {
    return Submission.findById(_id)
      .populate({ path: "user" })
      .populate({ path: "exercise" });
  }

  static getByExerciseId(userId, exerciseId) {
    validateObjectId(exerciseId);

    return Submission.findOne({
      user: userId,
      exercise: exerciseId,
    })
      .populate({ path: "user" })
      .populate({ path: "exercise" })
      .populate({
        path: "exercise",
        populate: {
          path: "user",
        },
      });
  }

  static getUserSubmission(userId, exerciseId) {
    validateObjectId(exerciseId);
    validateObjectId(userId);

    return Submission.findOne({
      user: userId,
      exercise: exerciseId,
    })
      .populate({ path: "user" })
      .populate({ path: "exercise" })
      .populate({
        path: "exercise",
        populate: {
          path: "user",
        },
      });
  }

  static getAllUserSubmissions(userId) {
    validateObjectId(userId);

    return Submission.find({ user: userId }).populate({
      path: "exercise",
      populate: {
        path: "user",
      },
    });
  }

  static async search(page = 0, query = "") {
    const all = await Submission.find({
      status: SubmissionStatus.AWAITING_REVIEW,
    })
      .populate({
        path: "user",
        match: {
          $or: [
            { email: { $regex: new RegExp(`${query.toLowerCase()}`, "i") } },
            { name: { $regex: new RegExp(`${query.toLowerCase()}`, "i") } },
            { username: { $regex: new RegExp(`${query.toLowerCase()}`, "i") } },
          ],
        },
      })
      .populate("exercise")
      .sort("-submittedAt");

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
      throw new ServerError(
        404,
        `Couldn't update non-existent submission with id=${_id}.`
      );
    }

    validateAgainstSchemaProps(payload, SubmissionSchema);
    Object.assign(submission, payload);

    return new Promise<void>((resolve, reject): void => {
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
      throw new ServerError(
        404,
        `Couldn't delete non-existent submission with id=${_id}.`
      );
    }

    return new Promise<void>((resolve, reject) => {
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
