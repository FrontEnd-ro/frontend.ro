import mongoose, { Types } from 'mongoose';
import { LessonI } from '../lesson/lesson.schema';
import { API_TutorialI } from '../../shared/types/tutorial.types';

import "../lesson/lesson.model";

/**
 * The Tutorial entity is at the center of our platform.
 * Each tutorial has a collection of lessons, each with one
 * or more exercises. When finishing all exercises, the student
 * will receive a Certification.
 */
export interface TutorialI {
  _id?: Types.ObjectId;

  // Unique, human-readable ID.
  // This is used when Routing in the UI.
  tutorialId: string;

  // Displayed in the UI
  name: string;

  // Collection of lesson IDs. The exercises are derived from
  // the lessons, thus they are not first class properties on
  // the tutorial.
  lessons: string[];
}

const TutorialSchema = new mongoose.Schema<TutorialI>({
  // Human-readable tutorial ID (example: 'html')
  tutorialId: { type: String, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  lessons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }],
});

const Tutorial: mongoose.Model<TutorialI, {}, {}> = mongoose.models.Tutorial
  || mongoose.model<TutorialI>('Tutorial', TutorialSchema);

async function findTutorialIdByLessonId(
  lessonId: string
): Promise<string | null> {
  const allTutorials = await Tutorial
    .find()
    .populate<{ lessons: LessonI[] }>("lessons");

  const match = allTutorials.find((tutorial) =>
    tutorial.lessons.find((lesson) => lesson.lessonId === lessonId)
  );
  return match?._id?.toString() ?? null;
}

function sanitizeTutorial(tutorial: Omit<TutorialI, 'lessons'> & { lessons: LessonI[] }): API_TutorialI {
  return {
    tutorialId: tutorial.tutorialId,
    name: tutorial.name,
    // Omit 'views'
    lessons: tutorial.lessons.map((lesson) => ({
      lessonId: lesson.lessonId,
    }))
  }
}

export default Tutorial;
export { findTutorialIdByLessonId, sanitizeTutorial };
