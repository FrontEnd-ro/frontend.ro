import { ServerError } from '../ServerUtils';
import express, { Request, Response } from 'express';
import { ApplicationConfigModel } from './application-config.model';

const applicationConfigRouter = express.Router();

applicationConfigRouter.get('/', async function getApplicationConfig(req: Request, res: Response) {
  try {
    const config = await ApplicationConfigModel.get();
    res.json(config);
  } catch (err) {
    console.error("[getApplicationConfig]", err);
    new ServerError(500, err.message || 'Oops! Getting the application config fails!').send(res);
  }
});

export default applicationConfigRouter;
