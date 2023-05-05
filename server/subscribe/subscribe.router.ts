import UserModel from '../user/user.model';
import { Subscriber } from './subscribe.schema';
import { ServerError } from '../utils/ServerError';
import express, { Request, Response } from 'express';
import EmailService, { EMAIL_TEMPLATE } from '../Email.service';

const subscriberRouter = express.Router();

subscriberRouter.post('/', async (
  req: Request<{}, {}, { name: string; email: string; }>,
  res: Response<{ name: string; email: string; }>
) => {
  const { name, email } = req.body;

  if (typeof name !== 'string' || typeof email !== 'string') {
    new ServerError(400, 'subscribe.bad_format').send(res);
    return;
  }

  if (name.trim() === '' || email.trim() === '') {
    new ServerError(400, 'subscribe.required_fields').send(res);
    return;
  }

  const alreadyRegistered = await UserModel.findUserBy({ email });
  if (alreadyRegistered) {
    new ServerError(400, 'subscribe.already_an_user').send(res);
    return;
  }

  const existingSubscriber = await Subscriber.findOne({ email });
  if (existingSubscriber !== null) {
    new ServerError(400, 'subscribe.already_subscribed').send(res);
    return;
  }

  
  await new Subscriber({ name, email }).save();

  // No "await" here since the email is not
  // critical for the continuation of the flow.
  EmailService.sendTemplateWithAlias(
    email,
    EMAIL_TEMPLATE.REGISTER,
    {
      name,
      sender_name: 'Păvă'
    }
  );

  res.json({
    name,
    email,
  });
})

export default subscriberRouter;


