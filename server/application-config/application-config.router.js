const express = require('express');
const { ServerError } = require('../ServerUtils');
const ApplicationConfigModel = require('./application-config.model');

const applicationConfigRouter = express.Router();

applicationConfigRouter.get('/', async function getApplicationConfig(req, res) {
  try {
    const config = await ApplicationConfigModel.get();
    res.json(config);
  } catch (err) {
    console.error("[getApplicationConfig]", err);
    new ServerError(500, err.message || 'Oops! Getting the application config fails!').send(res);
  }
});


module.exports = applicationConfigRouter;