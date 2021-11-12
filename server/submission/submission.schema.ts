import mongoose from 'mongoose';
const { SUBMISSION_STATUS } = require('../../shared/SharedConstants');

const FeedbackSchema = new mongoose.Schema(
  {
    body: { type: String, required: true },
    file_key: { type: String, required: true },
    position: { type: [Number], required: true },
    type: { type: String, enum: ['praise', 'opinion', 'improvement'], required: true },
  }
)

const SubmissionSchema = new mongoose.Schema(
  {
    code: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    assignee: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
    exercise: { type: mongoose.Schema.Types.ObjectId, ref: 'LessonExercise', required: true },
    status: { type: String, enum: Object.values(SUBMISSION_STATUS), default: SUBMISSION_STATUS.IN_PROGRESS },
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
