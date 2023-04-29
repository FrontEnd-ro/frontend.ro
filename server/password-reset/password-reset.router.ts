import UserModel from '../user/user.model';
import { ServerError } from '../utils/ServerError';
import express, { Request, Response } from 'express';
import PasswordResetModel from './password-reset.model';
import EmailService, { EMAIL_TEMPLATE } from '../Email.service';

const passwordResetRouter = express.Router();

passwordResetRouter.post('/', async function generateResetCode(
  req: Request<{}, {}, { email: string; }>,
  res: Response
) {
  const { email } = req.body;
  const SPAN = `generateResetCode(${email})`;

  if (!email) {
    new ServerError(400, 'password-reset.missing_email').send(res);
    return
  }

  try {
    const user = await UserModel.getUser({ email });
    if (!user) {
      new ServerError(404, 'generic.404', { email }).send(res);
      return
    }

    const resetCode = await PasswordResetModel.create(email);

    // Using "await" because sending the Reset Code via
    // email is critical for the user to continue the flow
    const emailResponse = await EmailService.sendTemplateWithAlias(email, EMAIL_TEMPLATE.PASSWORD_RESET, {
      "name": user.name,
      "resetCode": resetCode.code,
      "resetLink": "https://frontend.ro/auth?reset_password",
      "sender_name": "Păvă",
    });

    if (!emailResponse.success) {
      console.error(SPAN, emailResponse);
      new ServerError(500, 'generic.500').send(res);
      return;
    }

    res.status(200).send();
  } catch (err) {
    console.error(SPAN, err);
    new ServerError(500, 'generic.500').send(res);
  }
});

export default passwordResetRouter;
