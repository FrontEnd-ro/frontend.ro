import mongoose from 'mongoose';
import { TutorialI, WIPPopulatedTutorialI } from '../../shared/types/tutorial.types';

const TutorialSchema = new mongoose.Schema<TutorialI>({
  // Human-readable tutorial ID (example: 'html')
  tutorialId: { type: String, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  lessons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }],
});

const Tutorial: mongoose.Model<TutorialI, {}, {}> = mongoose.models.Tutorial
  || mongoose.model<TutorialI>('Tutorial', TutorialSchema);


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
export { sanitizeTutorial };
