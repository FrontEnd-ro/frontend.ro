import { Request, Response } from 'express'
import { ServerError } from '../ServerUtils'
import SubmissionModel from "../submission/submission.model"
import LessonExerciseModel from "./lesson-exercise.model"
import {
  // LESSONS_WITH_EXERCISES,
  SubmissionStatus,
} from "../../shared/SharedConstants"
export default class LessonExerciseController {

  static async getAllLessonExercises(req: Request, res: Response) {
    try {
      const result = await LessonExerciseModel.getAll()
      res.json(result)
    } catch (err) {
      new ServerError(err.code, err.message).send(res)
    }
  }

  static async getLessonExercise(req: Request, res: Response) {
    const { exerciseId } = req.params

    try {
      let result = await LessonExerciseModel.get(exerciseId)

      if (!result) {
        throw new ServerError(404, "Acest exercițiu nu există")
      }
      res.json(result)
    } catch (err) {
      new ServerError(err.code, err.message).send(res)
    }
  }

  static async getAllExercisesForLesson(req: Request, res: Response) {
    const { lessonId } = req.params
    const { user } = req.body

    // if (!LESSONS_WITH_EXERCISES.includes(lessonId)) {
    //   new ServerError(404, `Nu există lecția cu id-ul: ${lessonId}`).send(res);
    //   return
    // }

    try {
      let exercises = await LessonExerciseModel.getAllFromLesson(lessonId)
      let submissions = []

      if (user) {
        submissions = await SubmissionModel.getAllUserSubmissions(user._id)
      }

      const result = exercises.map((ex) => {
        const submissionMatch = submissions.find(
          (sub) => sub.exercise._id.toString() === ex._id.toString()
        )

        return {
          ...ex.toObject(),
          feedbackCount: submissionMatch?.feedbacks?.length ?? 0,
          isApproved: submissionMatch
            ? submissionMatch.status === SubmissionStatus.DONE
            : false,
        }
      })

      res.json(result)
    } catch (err) {
      new ServerError(err.code, err.message).send(res)
    }
  }
}


//(req:Request, res:Response)
