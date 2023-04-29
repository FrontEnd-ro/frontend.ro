import express, { Response } from 'express';

const demoRouter = express.Router();

const IMG_SRC = 'https://d3tycb976jpudc.cloudfront.net/demo-assets/eiffel-tower-during-night.jpg';
const DELAY = 2000;

demoRouter.get('/slow-image', async function getSlowImage(_, res: Response) {
  fetch(IMG_SRC)
    .then((fetchRes) => fetchRes.arrayBuffer())
    .then((arrayBuffer) => {
      const buffer = Buffer.from(arrayBuffer);
      setTimeout(() => {
        /** Artificially delay returning the response */
        res.setHeader('Content-type', 'image/jpeg');
        res.status(200);
        res.write(buffer);
        res.end();
      }, DELAY);
    })
    .catch((err) => {
      console.error('[SlowImageFetch] Failed with error', err);
      res.status(404).end();
    });
});

export default demoRouter;
