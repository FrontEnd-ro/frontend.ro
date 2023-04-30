import next from 'next';
import cors from 'cors';
import express from 'express';

import appConfig from "./config";

const port = appConfig.APP.port || appConfig.APP.default_port;
const app = express();
const nextApp = next({ dev: true })
const nextHandler = nextApp.getRequestHandler()

app.use(
  cors({
    credentials: true,
    origin: appConfig.APP.env === 'production'
      ? 'https://frontend.ro'
      : `http://localhost:${port}`
  })
);

app.use(express.static('client/public'));
app.use('/_next', express.static('/../dist'));

app.get('*', (req, res) => {
  // @ts-ignore
  // TODO: fix typing for req.url
  nextHandler(req, res, req.url);
});

nextApp
  .prepare()
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

