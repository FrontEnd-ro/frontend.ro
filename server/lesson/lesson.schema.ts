import mongoose, { Types } from 'mongoose';

export interface LessonI {
  _id?: Types.ObjectId;

  lessonId: string;

  views?: number;
}

const LessonSchema: mongoose.Schema<LessonI> = new mongoose.Schema({
  lessonId: { type: String, required: true, unique: true },
  views: { type: Number, required: true },
}, {
  timestamps: {
    updatedAt: 'updatedAt',
  },
});

export { LessonSchema };
