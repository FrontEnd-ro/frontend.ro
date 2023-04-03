import pick from 'lodash/pick';
import mongoose from 'mongoose';
import { LessonSchema } from './lesson.schema';
import { LessonI } from '../../shared/types/lesson.types';

const Lesson: mongoose.Model<LessonI> = mongoose.models.Lesson || mongoose.model('Lesson', LessonSchema);

class LessonModel {
  static get(lessonId) {
    return Lesson.findOne({ lessonId });
  }

  static async updateViews(lessonId, views): Promise<void> {
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

    return new Promise((resolve, reject) => {
      lesson.save((err) => {
        if (err) {
          console.error(`
            [LessonModel.updateViews] got while saving lessonId=${lessonId}`,
            err
          );

          reject(err);
          return;
        }

        resolve();
      });
    });
  }
}

function sanitizeLesson(lesson: mongoose.Document<any, any, LessonI> & LessonI) {
  const propsToKeep: (keyof LessonI)[] = ['lessonId', 'views'];
  return pick(lesson.toJSON(), propsToKeep);
}

export default LessonModel;
export { sanitizeLesson };
