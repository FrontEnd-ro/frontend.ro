import express, { Request, Response } from 'express';
import UserModel from '../user/user.model';
import { ServerError } from '../utils/ServerError';
import Tutorial, { TutorialI, sanitizeTutorial } from './tutorial.model';
import { PublicMiddleware, PrivateMiddleware } from '../Middlewares';
import LessonExerciseModel from '../lesson-exercise/lesson-exercise.model';
import { Certification, sanitizeCertification } from '../certification/certification.model';
import { API_TutorialProgressI } from '../../shared/types/tutorial.types';
import { SubmissionStatus } from '../../shared/types/submission.types';
import SubmissionModel from '../submission/submission.model';
import { UserI } from '../user/user.schema';
import { LessonExerciseI } from '../lesson-exercise/lesson-exercise.schema';
import { LessonI } from '../lesson/lesson.schema';

const tutorialRouter = express.Router();

tutorialRouter.get('/', [
  PublicMiddleware,
  async function getAllTutorials(req: Request, res: Response) {
    const tutorials = await Tutorial.find({}).populate<{ lessons: LessonI[] }>('lessons');

    res.json(tutorials.map(sanitizeTutorial));
  }
]);

tutorialRouter.get('/:tutorialId', [
  PublicMiddleware,
  async function getTutorial(req: Request, res: Response) {
    const { tutorialId } = req.params;

    const tutorial = await Tutorial.findOne({ tutorialId })
      .populate<{ lessons: LessonI[] }>('lessons');

    if (tutorial === null) {
      new ServerError(404, 'generic.404', { tutorialId }).send(res);
      return;
    }

    const sanitizedTutorial = sanitizeTutorial(tutorial);
    res.json(sanitizedTutorial);
  }
]);

tutorialRouter.post('/:tutorialId/start', [
  PrivateMiddleware,
  async function startTutorial(req: Request, res: Response) {
    const { tutorialId } = req.params;
    const { user } = req.body;
    const SPAN = `startTutorial(${tutorialId})`

    if (user.tutorials.includes(tutorialId)) {
      new ServerError(422, 'tutorial.already_started').send(res);
      return;
    }

    try {
      const tutorial = await Tutorial.findOne({ tutorialId });
      if (tutorial === null) {
        new ServerError(404, 'generic.404', { tutorialId }).send(res);
        return;
      }

      await UserModel.update(user._id, { tutorials: [...user.tutorials, tutorialId] });
    } catch (err) {
      console.error(SPAN, err);
      new ServerError(500, 'generic.500').send(res);
    }

    res.status(200).send();
  }
])

tutorialRouter.get('/:tutorialId/progress', [
  PrivateMiddleware,
  async function getTutorialProgress(req: Request, res: Response) {
    const { tutorialId } = req.params;
    const { user }: { user: UserI } = req.body;

    const tutorial = await Tutorial
      .findOne({ tutorialId })
      .populate<{ lessons: LessonI[] }>('lessons');

    if (tutorial === null) {
      new ServerError(404, 'generic.404', { tutorialId }).send(res);
      return;
    }

    const progress: API_TutorialProgressI = {
      tutorialId: tutorial.tutorialId,
      name: tutorial.name,
      lessons: tutorial.lessons.map((lesson) => ({
        lessonId: lesson.lessonId,
        // Initially undefined, we'll compute it later
        locked: undefined,
        progress: {
          done: 0,
          inProgress: 0,
          total: 0,
        }
      })),
      certification: null,
    };

    const [submissions, lessonExercises, certification] = await Promise.all([
      SubmissionModel.getAllUserSubmissions(user._id.toString()),
      LessonExerciseModel.getAll(),
      Certification.findOne({
        tutorial: tutorial._id,
        user: user._id,
      })
        .populate<{ user: UserI }>("user")
        .populate<{
          lesson_exercises: LessonExerciseI[];
        }>({
          path: "lesson_exercises",
          populate: { path: "user" },
        }),
    ]);

    if (certification !== null) {
      progress.certification = sanitizeCertification(certification);
    }

    progress.lessons.forEach((lesson) => {
      submissions
        .filter((submission) => (submission.exercise as unknown as LessonExerciseI).lesson === lesson.lessonId)
        .forEach((submission) => {
          if (submission.status === SubmissionStatus.DONE) {
            lesson.progress.done++;
          } else {
            lesson.progress.inProgress++;
          }
        })

      lesson.progress.total = lessonExercises
        .filter((lessonExercise) => lessonExercise.lesson === lesson.lessonId)
        .length;
    });

    // Compute and fill in the `locked` field for all lessons.
    // NOTE: using `forEach` instead of the functionally pure `.map` because
    // there's also a situation in which we care about the previous computed value.
    progress.lessons.forEach((lesson, index, arr) => {
      // First lesson is always unlocked
      if (index === 0) {
        lesson.locked = false;
        return;
      }

      const previousLesson = arr[index - 1];

      // If the previous lesson has no exercises,
      // the current one should have the same locked
      // value as the previous.
      if (previousLesson.progress.total === 0) {
        lesson.locked = previousLesson.locked;
        return;
      }

      // Sent solutions to all exercises. Some of them may be pending approval, which is fine,
      // he/she can continue with the next lesson.
      if (previousLesson.progress.inProgress + previousLesson.progress.done === previousLesson.progress.total) {
        lesson.locked = false;
        return;
      }

      lesson.locked = true;
    });

    res.json(progress);
  }
]);

tutorialRouter.get("/:tutorialId/status", [
  PrivateMiddleware,
  async function getTutorialStatus(req: Request, res: Response<{ status: 'not_started' | 'started' | 'completed'}>) {
    const { tutorialId } = req.params;
    const { user }: { user: UserI } = req.body;
    const SPAN = `getTutorialStatus(${tutorialId})`;

    try {
      const tutorial: TutorialI = await Tutorial.findOne({ tutorialId });
      if (tutorial === null) {
        new ServerError(404, 'generic.404', { tutorialId }).send(res);
        return;
      }
  
      const certification = await Certification.findOne({
        tutorial: tutorial._id,
        user: user._id,
      });
  
      if (certification !== null) {
        res.json({ status: "completed" });
        return;
      }
  
      if (user.tutorials.includes(tutorialId)) {
        res.json({ status: "started" });
        return;
      }
  
      res.json({ status: "not_started" });
    } catch (err) {
      console.error(SPAN, err);
      new ServerError(500, 'generic.500').send(res);
    }
  },
]);

export default tutorialRouter;
