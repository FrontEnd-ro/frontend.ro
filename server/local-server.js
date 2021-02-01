const next = require('next')
const cors = require('cors');
const express = require('express');

const port = process.env.PORT || 3000;
const app = express();
const nextApp = next({ dev: process.env.NODE_ENV !== 'production' })
const nextHandler = nextApp.getRequestHandler()

app.use(
  cors({
    credentials: true,
    origin: process.env.NODE_ENV === 'production'
      ? 'https://frontend.ro'
      : `http://localhost:${port}`
  })
);

app.use(express.static('client/public'));
app.use('/_next', express.static('/../dist'));

app.get('*', (req, res) => {
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

