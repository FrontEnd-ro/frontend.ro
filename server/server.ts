import next  from 'next';
import cors  from 'cors';
import express  from 'express';
import bodyParser  from 'body-parser';
import compression  from 'compression';
import cookieParser  from 'cookie-parser';
import { connectToDb }  from './database';
import sslRedirect from 'heroku-ssl-redirect';
import {parse} from 'url'
require('dotenv').config();

/** API routers */
import userRouter  from './user/user.router';
import exerciseRouter  from './exercise/exercise.router';
import submissionRouter  from './submission/submission.router';
import lessonExerciseRouter  from './lesson-exercise/lesson-exercise.router';
import demoRouter  from './demo.router';
import eventRouter  from './event/event.router';
import githubRouter  from './github/github.router.js';
import challengeRouter  from './challenge/challenge.router.js';
import lessonRouter  from './lesson/lesson.router';
import presentationRouter  from './presentation/presentation.router';

const port = process.env.PORT || 3000;
const app = express();
const nextApp = next({ dev: process.env.NODE_ENV !== 'production' })
const nextHandler = nextApp.getRequestHandler()

app.use(
  cors({
    credentials: true,
    origin: process.env.APP_ENV === 'production'
      ? 'https://frontend.ro'
      : 'http://localhost:3000'
  })
);


app.use(sslRedirect());
app.use(compression());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cookieParser());


app.use(express.static('client/public'));
app.use('/_next', express.static('/../dist'));

/** API routers */
app.use('/api/auth', userRouter);
app.use('/api/exercises', exerciseRouter);
app.use('/api/lesson-exercises', lessonExerciseRouter);
app.use('/api/submissions', submissionRouter);
app.use('/api/demo', demoRouter);
app.use('/api/events', eventRouter);
app.use('/api/github', githubRouter);
app.use('/api/challenges', challengeRouter);
app.use('/api/lessons', lessonRouter);
app.use('/api/presentations', presentationRouter);

app.get('*', (req, res) => {
  nextHandler(req, res, parse(req.url,true));
});

connectToDb()
  .catch(err => {
    console.error('[connectToDB]', err);
    throw true;
  })
  .then(() => nextApp.prepare())
  .catch(err => {
    console.error('[nextApp.prepare]', err);
    throw true;
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on localhost:${port}`);
    })
  })
  .catch(() => console.log('Server failed to start.'))
