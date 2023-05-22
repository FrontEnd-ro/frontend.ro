import express, { Request, Response } from 'express';
import LessonModel, { sanitizeLesson } from './lesson.model';
import { ServerError } from '../utils/ServerError';
import { API_LessonI } from '../../shared/types/lesson.types';

const lessonRouter = express.Router();

lessonRouter.get('/:lessonId', async function getLesson(req: Request<{ lessonId: string; }>, res: Response<API_LessonI>) {
  const { lessonId } = req.params;
  const lesson = await LessonModel.get(lessonId);

  if (!lesson) {
    new ServerError(404, 'generic.404', { lessonId }).send(res);
    return;
  }

  res.json(sanitizeLesson(lesson));
});

lessonRouter.post('/:lessonId/views', async function increaseViews(req: Request<{ lessonId: string; }>, res: Response<API_LessonI>) {
  const { lessonId } = req.params;
  const SPAN = `increaseViews(${lessonId})`;

  const lesson = await LessonModel.get(lessonId);

  try {
    if (!lesson) {
      await LessonModel.updateViews(lessonId, 1);
    } else {
      await LessonModel.updateViews(lessonId, lesson.views + 1);
    }

    const updatedLesson = await LessonModel.get(lessonId);
    res.json(sanitizeLesson(updatedLesson));
  } catch (err) {
    console.log(SPAN, err);
    new ServerError(500, 'generic.500');
  }
});

export default lessonRouter;
