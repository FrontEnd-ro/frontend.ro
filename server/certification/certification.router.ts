import express, { Request, Response } from 'express';
import { ServerError } from '../ServerUtils';
import { PrivateMiddleware, PublicMiddleware } from '../Middlewares';
import { Certification } from './certification.model';
import { UserRole } from '../../shared/types/user.types';

const certificationRouter = express.Router();

certificationRouter.get('/:certificationId', [
  PublicMiddleware,
  async function getCertification(req: Request, res: Response) {
    const { certificationId } = req.params;

    const certification = await Certification.findById(certificationId)
      .populate('user')
      .populate('lesson_exercises');

    if (certification === null) {
      new ServerError(404, `Nu există nici o certificare cu ID=${certificationId}`).send(res);
      return;
    }

    res.json(certification);
  }
])

export default certificationRouter;
