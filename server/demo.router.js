const express = require('express');
const fetch = require('node-fetch');

const demoRouter = express.Router();


const IMG_SRC = 'https://d3tycb976jpudc.cloudfront.net/demo-assets/eiffel-tower-during-night.jpg';
const DELAY = 2000;

demoRouter.get('/slow-image', async function getSlowImage(req, res) {
  fetch(IMG_SRC)
    .then((fetchRes) => fetchRes.buffer())
    .then((buffer) => {
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

module.exports = demoRouter;