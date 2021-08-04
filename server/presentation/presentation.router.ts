import express from 'express';
import { ServerError } from '../ServerUtils';
import PresentationController from './presentation.controller';
const presentationRouter = express.Router();

presentationRouter.get('/', PresentationController.getAllPresentations);

presentationRouter.get('/:presentationId', PresentationController.getPresentation);

presentationRouter.post('/:presentationId/views', PresentationController.increaseViews);


export default presentationRouter;