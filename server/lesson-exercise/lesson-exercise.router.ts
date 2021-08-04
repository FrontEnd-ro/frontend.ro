import express from "express";
import { PublicMiddleware } from "../Middlewares";
import LessonExerciseController from "./lesson-exercise.controller"


const lessonExerciseRouter = express.Router();

lessonExerciseRouter.get(
  "/",
  [PublicMiddleware],
  LessonExerciseController.getAllLessonExercises
);

lessonExerciseRouter.get(
  "/:exerciseId",
  [PublicMiddleware],
  LessonExerciseController.getLessonExercise
);

lessonExerciseRouter.get(
  "/lesson/:lessonId",
  [PublicMiddleware],
  LessonExerciseController.getAllExercisesForLesson
);

export default lessonExerciseRouter;
