const express = require('express');
const LessonModel = require('./lesson.model');
const { ServerError } = require('../ServerUtils');

const lessonRouter = express.Router();

lessonRouter.get('/:lessonId', async function getLesson(req, res) {
  const { lessonId } = req.params;
  const lesson = await LessonModel.get(lessonId);

  if (!lesson) {
    new ServerError(404, `Lesson with id=${lessonId} doesn't exist!`).send(res);
    return;
  }

  res.json(lesson);
});

lessonRouter.post('/:lessonId/views', async function increaseViews(req, res) {
  const { lessonId } = req.params;

  const lesson = await LessonModel.get(lessonId);

  try {
    if (!lesson) {
      await LessonModel.updateViews(lessonId, 1);
    } else {
      await LessonModel.updateViews(lessonId, lesson.views + 1);
    }

    const updatedLesson = await LessonModel.get(lessonId);
    res.json(updatedLesson);
  } catch (err) {
    new ServerError(
      err.code || 500, 
      err.message || 'Oops! A apărut o problemă. Încearcă din nou!'
    );
  }
});


module.exports = lessonRouter;