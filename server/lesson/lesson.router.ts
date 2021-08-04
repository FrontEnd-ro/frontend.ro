import express from 'express' ;
import LessonController from './lesson.controller'


const lessonRouter = express.Router();

lessonRouter.get('/:lessonId',LessonController.getLesson);

lessonRouter.post('/:lessonId/views',LessonController.increaseViews);


export default lessonRouter;