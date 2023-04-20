import mongoose from 'mongoose';
import { LessonI } from '../../shared/types/lesson.types';

const LessonSchema: mongoose.Schema<LessonI> = new mongoose.Schema({
  lessonId: { type: String, required: true, unique: true },
  views: { type: Number, required: true },
}, {
  timestamps: {
    updatedAt: 'updatedAt',
  },
});

export { LessonSchema };
