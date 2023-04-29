import express, { Request, Response } from 'express';
import { ServerError } from '../utils/ServerError';
import PresentationModel from './presentation.model';
import { Presentation } from './presentation.schema';
import { PresentationI } from '../../shared/types/presentation.types';

const presentationRouter = express.Router();

presentationRouter.get('/', async function getAllPresentations(_, res: Response<PresentationI[]>) {
  const presentations = await Presentation.find({});
  res.json(presentations);
});

presentationRouter.get('/:presentationId', async function getPresentation(
  req: Request<{ presentationId: string; }>,
  res: Response<PresentationI>
) {
  const { presentationId } = req.params;
  const presentation = await Presentation.findOne({ presentationId });

  if (!presentation) {
    new ServerError(404, 'generic.404', { presentationId }).send(res);
    return;
  }

  res.json(presentation);
});

presentationRouter.post('/:presentationId/views', async function increaseViews(
  req: Request<{ presentationId: string; }>,
  res: Response<PresentationI>
) {
  const { presentationId } = req.params;
  const SPAN = `increaseViews(${presentationId})`;

  const presentation = await Presentation.findOne({ presentationId });

  try {
    if (!presentation) {
      await PresentationModel.updateViews(presentationId, 1);
    } else {
      await PresentationModel.updateViews(presentationId, presentation.views + 1);
    }

    const updatedPresentation = await Presentation.findOne({ presentationId });
    res.json(updatedPresentation);
  } catch (err) {
    console.log(SPAN, err);
    new ServerError(500, 'generic.500');
  }
});

export default presentationRouter;
