import LessonModel from './lesson.model' ;
import { ServerError } from '../ServerUtils' ;
import {Request,Response} from 'express'
// (req:Request, res:Response)

export default class LessonController{
  static async getLesson (req:Request, res:Response) {
    const { lessonId } = req.params;
    const lesson = await LessonModel.get(lessonId);
  
    if (!lesson) {
      new ServerError(404, `Lesson with id=${lessonId} doesn't exist!`).send(res);
      return;
    }
  
    res.json(lesson);
  }

  static async increaseViews (req:Request, res:Response) {
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
  }
}