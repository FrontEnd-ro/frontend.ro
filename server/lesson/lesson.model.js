const mongoose = require('mongoose');
const { ServerError } = require('../ServerUtils');

const LessonsSchema = new mongoose.Schema({
  lessonId: { type: String, required: true, unique: true },
  views: { type: Number, required: true },
}, {
  timestamps: {
    updatedAt: 'updatedAt',
  },
});

const Lesson = mongoose.models.Lesson || mongoose.model('Lesson', LessonsSchema);

class LessonModel {
  static get(lessonId) {
    return Lesson.findOne({ lessonId });
  }

  static async updateViews(lessonId, views) {
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

module.exports = LessonModel;