const express = require('express');
const PresentationModel = require('./presentation.model');
const { ServerError } = require('../ServerUtils');

const presentationRouter = express.Router();

presentationRouter.get('/', async function getAllPresentations(req, res) {
  const presentations = await PresentationModel.getAll();
  res.json(presentations);
});

presentationRouter.get('/:presentationId', async function getPresentation(req, res) {
  const { presentationId } = req.params;
  const presentation = await PresentationModel.get(presentationId);

  if (!presentation) {
    new ServerError(404, `Presentation with id=${presentationId} doesn't exist!`).send(res);
    return;
  }

  res.json(presentation);
});

presentationRouter.post('/:presentationId/views', async function increaseViews(req, res) {
  const { presentationId } = req.params;

  const presentation = await PresentationModel.get(presentationId);

  try {
    if (!presentation) {
      await PresentationModel.updateViews(presentationId, 1);
    } else {
      await PresentationModel.updateViews(presentationId, presentation.views + 1);
    }

    const updatedPresentation = await PresentationModel.get(presentationId);
    res.json(updatedPresentation);
  } catch (err) {
    new ServerError(
      err.code || 500, 
      err.message || 'Oops! A apărut o problemă. Încearcă din nou!'
    );
  }
});


module.exports = presentationRouter;