import mongoose from 'mongoose';
import { SubmissionI, SubmissionStatus } from '../../shared/types/submission.types';

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

export { SubmissionSchema, FeedbackSchema }
