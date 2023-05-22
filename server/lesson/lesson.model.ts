import mongoose from 'mongoose';
import { LessonSchema, LessonI } from './lesson.schema';
import { API_LessonI } from '../../shared/types/lesson.types';

const Lesson: mongoose.Model<LessonI> = mongoose.models.Lesson || mongoose.model('Lesson', LessonSchema);

class LessonModel {
  static get(lessonId: string) {
    return Lesson.findOne({ lessonId });
  }

  static async updateViews(lessonId: string, views: number): Promise<void> {
    let lesson: mongoose.Document<any, any, LessonI> & LessonI = null;

    try {
      lesson = await LessonModel.get(lessonId);
    } catch (err) {
      console.error(`
        [LessonModel.updateViews] got while fetching for lessonId=${lessonId}`,
        err
      );

      throw err;
    }

    if (!lesson) {
      lesson = new Lesson({ lessonId });
      console.log(`[LessonModel.updateViews] created lesson on demand, with id=${lessonId}`);
    }

    lesson.views = views;
    await lesson.save();
  }
}

function sanitizeLesson(lesson: mongoose.Document<any, any, LessonI> & LessonI): API_LessonI {
  return {
    lessonId: lesson.lessonId,
    views: lesson.views
  }
}

export default LessonModel;
export { sanitizeLesson };
