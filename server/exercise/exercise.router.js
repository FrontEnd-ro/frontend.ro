const multer = require('multer');
const express = require('express');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');

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

const s3 = new S3Client({ region: process.env.AWS_REGION });
const upload = multer({ storage: multer.memoryStorage() });

exerciseRouter.get('/', [PrivateMiddleware], async function getUserExercises(req, res) {
  let results = await ExerciseModel.getUserExercises(req.body.user._id);

  res.json(results);
})

exerciseRouter.get('/solved', [PrivateMiddleware], async function getSolvedExercises(req, res) {
  let results = await SubmissionModel.getAllUserSubmissions(req.body.user._id);

  res.json(results);
})

exerciseRouter.get('/:exerciseId', [PublicMiddleware, PublicOrOwnExercise], async function getExerciseById(req, res) {
  const { exerciseId } = req.params;

  try {
    let result = await ExerciseModel.get(exerciseId);
    res.json(result);
  } catch (err) {
    new ServerError(err.code, err.message).send(res);
  }
});

exerciseRouter.get('/public/:username', [PublicMiddleware], async function getPublicUserExercises(req, res) {
  const { username } = req.params

  const user = await UserModel.findUserBy({ username });

  if (!user) {
    new ServerError(404, `Nu am găsit user-ul cu username: ${username}`).send(res);
    return
  }

  let results = await ExerciseModel.getUserExercises(user._id, true);

  res.json(results);
})



exerciseRouter.post('/', [PrivateMiddleware], async function createExercise(req, res) {
  const exercise = await ExerciseModel.create(req.body);
  res.json(exercise);
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
      Bucket: process.env.AWS_BUCKET,
      Key,
      Body: file.buffer,
      ACL: 'public-read',
    };

    try {
      await s3.send(new PutObjectCommand(uploadParams));
      res.json({
        name,
        url: `${process.env.CLOUDFRONT_UPLOAD}/${Key}`,
      });
    } catch (err) {
      console.log('[s3Upload]', err);
      new ServerError(500, err.message || 'Oops! Se pare că nu am putut încărca fișierele. Încearcă din nou.').send(res);
    }
  });
})

exerciseRouter.get('/:exerciseId', [PublicOrOwnExercise], async function getExercise(req, res) {
  const { exerciseId } = req.params;

  const exercise = await ExerciseModel.get(exerciseId);

  if (!exercise) {
    throw new ServerError(404, `No exercise with id='${exerciseId}' found`);
  } else {
    res.json(exercise);
  }
})

exerciseRouter.put('/:exerciseId', [PrivateMiddleware, OwnExercise], async function updateExercise(req, res) {
  const { exerciseId } = req.params;

  const exercise = await ExerciseModel.update(exerciseId, req.body);
  res.json(exercise);
})

exerciseRouter.delete('/:exerciseId', [PrivateMiddleware, OwnExercise], async function deleteExercise(req, res) {
  const { exerciseId } = req.params;

  await ExerciseModel.delete(exerciseId);
  res.status(200).end();
})

module.exports = exerciseRouter;
