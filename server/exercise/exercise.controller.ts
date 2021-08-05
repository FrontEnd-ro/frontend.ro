import { ServerError } from '../ServerUtils'
import { Request, Response } from 'express'
import { MAX_MEDIA_BYTES, MAX_MEDIA_MB } from '../../shared/SharedConstants'
import UserModel from '../user/user.model'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import multer from 'multer'
import ExerciseModel from './exercise.model'
import SubmissionModel from '../submission/submission.model'

const s3 = new S3Client({ region: process.env.AWS_REGION })
const upload = multer({ storage: multer.memoryStorage() })

export default class ExerciseController {

  static async getUserExercises(req: Request, res: Response) {
    let results = await ExerciseModel.getUserExercises(req.body.user._id)

    res.json(results)
  }


  static async getSolvedExercises(req: Request, res: Response) {
    let results = await SubmissionModel.getAllUserSubmissions(req.body.user._id)

    res.json(results)
  }

  static async getExerciseById(req: Request, res: Response) {
    const { exerciseId } = req.params

    try {
      let result = await ExerciseModel.get(exerciseId)
      res.json(result)
    } catch (err) {
      new ServerError(err.code, err.message).send(res)
    }
  }

  static async getPublicUserExercises(req: Request, res: Response) {
    const { username } = req.params

    const user = await UserModel.findUserBy({ username })

    if (!user) {
      new ServerError(404, `Nu am găsit user-ul cu username: ${username}`).send(res)
      return
    }

    let results = await ExerciseModel.getUserExercises(user._id, true)

    res.json(results)
  }

  static async createExercise(req: Request, res: Response) {
    const exercise = await ExerciseModel.create(req.body)
    res.json(exercise)
  }

  static addMedia(req: Request, res: Response) {
    const userId = req.body.user._id

    upload.single('file')(req, null, async (err) => {
      if (err) {
        console.error('[uploadExerrciseMedia]', err)
        new ServerError(400, 'Fișierul nu a putut fi încărcat. Încearcă din nou!').send(res)
        return
      }

      const { name } = req.body
      const { file } = req

      if (req.file.size > MAX_MEDIA_BYTES) {
        console.error('[uploadExerrciseMedia]', err)
        new ServerError(400, `Dimensiunea maximă a unui fișier este de ${MAX_MEDIA_MB}MB`).send(res)
        return
      }

      const Key = `${userId}/${name}`

      const uploadParams = {
        Bucket: process.env.AWS_BUCKET,
        Key,
        Body: file.buffer,
        ACL: 'public-read',
      }

      try {
        await s3.send(new PutObjectCommand(uploadParams))
        res.json({
          name,
          url: `${process.env.CLOUDFRONT_UPLOAD}/${Key}`,
        })
      } catch (err) {
        console.log('[s3Upload]', err)
        new ServerError(500, err.message || 'Oops! Se pare că nu am putut încărca fișierele. Încearcă din nou.').send(res)
      }
    })
  }

  static async getExercise(req: Request, res: Response) {
    const { exerciseId } = req.params

    const exercise = await ExerciseModel.get(exerciseId)

    if (!exercise) {
      throw new ServerError(404, `No exercise with id='${exerciseId}' found`)
    } else {
      res.json(exercise)
    }
  }

  static async updateExercise(req: Request, res: Response) {
    const { exerciseId } = req.params

    const exercise = await ExerciseModel.update(exerciseId, req.body)
    res.json(exercise)
  }

  static async deleteExercise(req: Request, res: Response) {
    const { exerciseId } = req.params

    await ExerciseModel.delete(exerciseId)
    res.status(200).end()
  }
}