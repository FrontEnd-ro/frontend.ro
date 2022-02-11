import express, { Request, Response } from 'express';
import UserModel from '../user/user.model';
import { ServerError } from '../ServerUtils';
import { UserI } from '../../shared/types/user.types';
import Tutorial, { sanitizeTutorial } from './tutorial.model';
import { PublicMiddleware, PrivateMiddleware } from '../Middlewares';
import { WIPPopulatedLessonExerciseI } from '../../shared/types/exercise.types';
import { TutorialProgressI, WIPPopulatedTutorialI } from '../../shared/types/tutorial.types';
import { SubmissionStatus, WIPPopulatedSubmissionI } from '../../shared/types/submission.types';

const SubmissionModel = require('../submission/submission.model')
const LessonExerciseModel = require('../lesson-exercise/lesson-exercise.model');

const tutorialRouter = express.Router();

tutorialRouter.get('/', [
  PublicMiddleware,
  async function getAllTutorials(req: Request, res: Response) {
    const tutorials: WIPPopulatedTutorialI[] = await Tutorial.find({}).populate('lessons');

    res.json(tutorials.map(sanitizeTutorial));
  }
]);

tutorialRouter.get('/:tutorialName', [
  PublicMiddleware,
  async function getTutorial(req: Request, res: Response) {
    const { tutorialName } = req.params;

    const tutorial: WIPPopulatedTutorialI = await Tutorial.findOne({ name: tutorialName })
      .populate('lessons');

    if (tutorial === null) {
      new ServerError(404, `Nu există nici un tutorial cu name=${tutorialName}`).send(res);
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

    if (user.tutorials.includes(tutorialId)) {
      new ServerError(422, `Ai început deja tutorialul cu ID=${tutorialId}`).send(res);
      return;
    }

    try {
      const tutorial = await Tutorial.findOne({ name: tutorialId });
      if (tutorial === null) {
        new ServerError(404, `Nu există nici un tutorial cu ID=${tutorialId}`).send(res);
        return;
      }

      await UserModel.update(user._id, { tutorials: [...user.tutorials, tutorialId] });
    } catch (err) {
      new ServerError(
        err.code || 500,
        err.message || `Error tying to start tutorial with ID=${tutorialId}`,
      ).send(res);
    }

    res.status(200).send();
  }
])

tutorialRouter.get('/:tutorialName/progress', [
  PrivateMiddleware,
  async function getTutorialProgress(req: Request, res: Response) {
    const { tutorialName } = req.params;
    const { user }: { user: UserI } = req.body;

    const tutorial: WIPPopulatedTutorialI = await Tutorial
      .findOne({ name: tutorialName })
      .populate('lessons');

    if (tutorial === null) {
      new ServerError(404, `Nu există nici un tutorial cu name=${tutorialName}`).send(res);
      return;
    }

    const progress: TutorialProgressI = {
      name: tutorial.name,
      lessons: tutorial.lessons.map((lesson) => ({
        lessonId: lesson.lessonId,
        progress: {
          done: 0,
          inProgress: 0,
          total: 0
        }
      }))
    };

    const [
      submissions,
      lessonExercises
    ]: [WIPPopulatedSubmissionI[], WIPPopulatedLessonExerciseI[]] = await Promise.all([
      SubmissionModel.getAllUserSubmissions(user._id.toString()),
      LessonExerciseModel.getAll()
    ]);

    progress.lessons.forEach((lesson) => {
      submissions
        .filter((submission) => submission.exercise.lesson === lesson.lessonId)
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

    res.json(progress);
  }
]);

export default tutorialRouter;
