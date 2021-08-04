import { Schema, model, models } from "mongoose";
import { LeasonsInterface } from "server/types/type"
const { ServerError } = require('../ServerUtils');

const LessonsSchema = new Schema<LeasonsInterface>({
  lessonId: { type: String, required: true, unique: true },
  views: { type: Number, required: true },
}, {
  timestamps: {
    updatedAt: 'updatedAt',
  },
});

const Lesson = models.Lesson || model('Lesson', LessonsSchema);

class LessonModel {
  static async get(lessonId):Promise<LeasonsInterface> {
    return Lesson.findOne({ lessonId });
  }

  static async updateViews(lessonId, views):Promise<void> {
    let lesson = null;

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

    return new Promise<void>((resolve, reject) => {
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

export default LessonModel;