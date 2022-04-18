import mongoose from 'mongoose';
import { LessonI } from '../../shared/types/lesson.types';
import { TutorialI, WIPPopulatedTutorialI } from '../../shared/types/tutorial.types';

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
  const allTutorials: WIPPopulatedTutorialI[] = await Tutorial
    .find()
    .populate("lessons");

  const match = allTutorials.find((tutorial) =>
    tutorial.lessons.find((lesson) => lesson.lessonId === lessonId)
  );
  return match?._id?.toString() ?? null;
}

function sanitizeTutorial(tutorial: WIPPopulatedTutorialI) {
  const result: WIPPopulatedTutorialI = {
    tutorialId: tutorial.tutorialId,
    name: tutorial.name,
    // Omit 'views'
    lessons: tutorial.lessons.map((lesson) => ({
      lessonId: lesson.lessonId,
    }))
  }

  return result;
}

export default Tutorial;
export { findTutorialIdByLessonId, sanitizeTutorial };
