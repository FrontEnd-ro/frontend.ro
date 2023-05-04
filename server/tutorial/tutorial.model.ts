import mongoose from 'mongoose';
import { LessonI } from '../../shared/types/lesson.types';
import { API_TutorialI, TutorialI } from '../../shared/types/tutorial.types';

import "../lesson/lesson.model";

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
