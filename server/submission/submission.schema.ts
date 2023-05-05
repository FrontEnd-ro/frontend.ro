import mongoose, { Types } from 'mongoose';
import { FeedbackType, SubmissionStatus } from '../../shared/types/submission.types';

export interface FeedbackI {
  _id?: Types.ObjectId;

  type: FeedbackType,
  body: string;
  // eslint-disable-next-line camelcase
  file_key: string;
  position: number[];
}

export interface SubmissionI {
  _id?: Types.ObjectId;

  code: string;

  user: Types.ObjectId;

  assignee: Types.ObjectId;

  exercise: Types.ObjectId;

  status: SubmissionStatus;

  feedbacks: FeedbackI[]

  updatedAt: Date;

  createdAt: Date;
}

const FeedbackSchema = new mongoose.Schema(
  {
    body: { type: String, required: true },
    file_key: { type: String, required: true },
    position: { type: [Number], required: true },
    type: { type: String, enum: ['praise', 'opinion', 'improvement'], required: true },
  }
)

const SubmissionSchema = new mongoose.Schema<SubmissionI>(
  {
    code: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    assignee: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
    exercise: { type: mongoose.Schema.Types.ObjectId, ref: 'LessonExercise', required: true },
    status: { type: String, enum: Object.values(SubmissionStatus), default: SubmissionStatus.IN_PROGRESS },
    feedbacks: [FeedbackSchema],
  },
  {
    timestamps: {
      createdAt: 'submittedAt',
      updatedAt: 'updatedAt',
    },
  },
);

SubmissionSchema.index({ user: 1, exercise: 1 }, { unique: true });

const Submission: mongoose.Model<SubmissionI> = mongoose.models.Submission || mongoose.model('Submission', SubmissionSchema);

export { Submission, SubmissionSchema, FeedbackSchema }
