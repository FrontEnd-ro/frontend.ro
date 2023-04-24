const multer = require('multer');
const express = require('express');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { default: appConfig } = require('../config');

const ExerciseModel = require('./exercise.model');
const SubmissionModel = require('../submission/submission.model');

const {
  PublicMiddleware,
  PrivateMiddleware,
  PublicOrOwnExercise,
  OwnExercise
} = require('../Middlewares');

const { ServerError } = require('../ServerUtils');
const { MAX_MEDIA_BYTES } = require('../../shared/SharedConstants');
const UserModel = require('../user/user.model');

const exerciseRouter = express.Router();

const s3 = new S3Client({ region: appConfig.AWS.region });
const upload = multer({ storage: multer.memoryStorage() });

exerciseRouter.get('/', [PrivateMiddleware], async function getUserExercises(req, res) {
  let results = await ExerciseModel.getUserExercises(req.body.user._id);
  let sanitizedResults = results.map(ExerciseModel.sanitize);

  res.json(sanitizedResults);
})

exerciseRouter.get('/:exerciseId', [PublicMiddleware, PublicOrOwnExercise], async function getExerciseById(req, res) {
  const { exerciseId } = req.params;

  const exercise = await ExerciseModel
    .get(exerciseId)
    .populate('user');

  if (!exercise) {
    throw new ServerError(404, `No exercise with id='${exerciseId}' found`);
  } else {
    const sanitizedExercise = ExerciseModel.sanitize(exercise);
    res.json(sanitizedExercise);
  }
})

exerciseRouter.get('/public/:username', [PublicMiddleware], async function getPublicUserExercises(req, res) {
  const { username } = req.params

  const user = await UserModel.findUserBy({ username });

  if (!user) {
    new ServerError(404, `Nu am găsit user-ul cu username: ${username}`).send(res);
    return
  }

  let results = await ExerciseModel.getUserExercises(user._id, true);
  const sanitizedResults = results.map(ExerciseModel.sanitize);

  res.json(sanitizedResults);
})

exerciseRouter.post('/', [PrivateMiddleware], async function createExercise(req, res) {
  const exercise = await ExerciseModel.create(req.body);
  const sanitizedExercise = ExerciseModel.sanitize(exercise);
  res.json(sanitizedExercise);
})

exerciseRouter.post('/media', [PrivateMiddleware], function createExercise(req, res) {
  const userId = req.body.user._id;

  upload.single('file')(req, null, async (err) => {
    if (err) {
      console.error('[uploadExerrciseMedia]', err);
      new ServerError(400, 'Fișierul nu a putut fi încărcat. Încearcă din nou!').send(res);
      return;
    }

    const { name } = req.body;
    const { file } = req;

    if (req.file.size > MAX_MEDIA_BYTES) {
      console.error('[uploadExerrciseMedia]', err);
      new ServerError(400, `Dimensiunea maximă a unui fișier este de ${MAX_MEDIA_MB}MB`).send(res);
      return;
    }

    const Key = `${userId}/${name}`;

    const uploadParams = {
      Bucket: appConfig.AWS.bucket,
      Key,
      Body: file.buffer,
      ACL: 'public-read',
    };

    try {
      await s3.send(new PutObjectCommand(uploadParams));
      res.json({
        name,
        url: `${appConfig.CDN.user_generated}/${Key}`,
      });
    } catch (err) {
      console.log('[s3Upload]', err);
      new ServerError(500, err.message || 'Oops! Se pare că nu am putut încărca fișierele. Încearcă din nou.').send(res);
    }
  });
})

exerciseRouter.put('/:exerciseId', [PrivateMiddleware, OwnExercise], async function updateExercise(req, res) {
  const { exerciseId } = req.params;

  const exercise = await ExerciseModel.update(exerciseId, req.body);
  const sanitizedExercise = ExerciseModel.sanitize(exercise);
  res.json(sanitizedExercise);
})

exerciseRouter.delete('/:exerciseId', [PrivateMiddleware, OwnExercise], async function deleteExercise(req, res) {
  const { exerciseId } = req.params;

  await ExerciseModel.delete(exerciseId);
  res.status(200).end();
})

module.exports = exerciseRouter;
