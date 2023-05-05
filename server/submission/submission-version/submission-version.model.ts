/**
 * We had to decide between:
 * 1. Keeping the version in the same Document as the real submission
 * 2. Making a separate collection
 * 
 * In most cases where we fetch a submission, we want just the latest info 
 * (eg: code, feedbacks, etc). We don't want to fetch the entire history with it. 
 * 
 * This situation could be handled with GraphQL or JSON-API sparse fieldsets 
 * (https://jsonapi.org/format/#fetching-sparse-fieldsets) but it requires extra code. 
 * Plus we always have to be careful of what we're pulling in.
 * 
 * Thus, we decided to go with variant 2: a separate collection.
 * 
 */
import mongoose, { Types } from 'mongoose';
import { FeedbackI, FeedbackSchema } from '../submission.schema';

export interface SubmissionVersionI {
  _id?: Types.ObjectId;
  feedbacks: FeedbackI[];
  code: string;
  approved: boolean;
  submission: string;
  createdAt: string;
}

const SubmissionVersionSchema = new mongoose.Schema(
  {
    feedbacks: [FeedbackSchema],
    code: { type: String, required: true },
    approved: { type: Boolean, required: true },
    submission: { type: mongoose.Schema.Types.ObjectId, ref: 'Submission', required: true },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: false,
    },
  },
);

const SubmissionVersionModel = mongoose.model<SubmissionVersionI>('SubmissionVersion', SubmissionVersionSchema);

const SubmissionVersion: mongoose.Model<SubmissionVersionI, {}, {}> = mongoose.models.SubmissionVersion || SubmissionVersionModel;

export { SubmissionVersion };
