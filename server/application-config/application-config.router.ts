import { ServerError } from '../ServerUtils';
import express, { Request, Response } from 'express';
import { ApplicationConfigModel } from './application-config.schema';
import { ApplicationConfig } from '../../shared/types/application-config.types';

const applicationConfigRouter = express.Router();

applicationConfigRouter.get('/', async function getApplicationConfig(req: Request, res: Response<ApplicationConfig>) {
  try {
    const config = await ApplicationConfigModel.findOne()
    if (config === null) {
      new ServerError(404, 'No ApplicationConfig found!').send(res);
      return;
    }
    res.json(config);
  } catch (err) {
    console.error("[getApplicationConfig]", err);
    new ServerError(500, err.message || 'Oops! Getting the application config fails!').send(res);
  }
});

export default applicationConfigRouter;
