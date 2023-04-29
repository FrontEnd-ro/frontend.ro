import { ServerError } from '../utils/ServerError';
import express, { Request, Response } from 'express';
import { ApplicationConfigModel } from './application-config.schema';
import { ApplicationConfig } from '../../shared/types/application-config.types';

const applicationConfigRouter = express.Router();

applicationConfigRouter.get('/', async function getApplicationConfig(req: Request, res: Response<ApplicationConfig>) {
  const SPAN = 'getApplicationConfig()';
  try {
    const config = await ApplicationConfigModel.findOne()
    if (config === null) {
      new ServerError(404, 'generic.404').send(res);
      return;
    }
    res.json(config);
  } catch (err) {
    console.error(SPAN, err);
    new ServerError(500, 'generic.500').send(res);
  }
});

export default applicationConfigRouter;
