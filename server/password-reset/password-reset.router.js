const express = require('express');
import EmailService, { EMAIL_TEMPLATE } from '../Email.service';
const { ServerError } = require('../ServerUtils');
const { default: UserModel } = require('../user/user.model');
const PasswordResetModel = require('./password-reset.model');

const passwordResetRouter = express.Router();

passwordResetRouter.post('/', async function generateResetCode(req, res) {
  const { email } = req.body;

  if (!email) {
    new ServerError(400, `Email-ul este obligatoriu pentru a genera un cod de resetare de parolă.`).send(res);
    return
  }

  try {
    const user = await UserModel.getUser({ email });
    if (!user) {
      new ServerError(404, `Nu există nici un utilizator cu email-ul: ${email}`).send(res);
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
      new ServerError(400, emailResponse.Message).send(res);
      return;
    }

    res.status(200).send();
  } catch (err) {
    console.error("[generateResetCode]", err);
    new ServerError(500, err.message || 'Oops! Se pare că nu am putut să generăm codul pentru schimbarea parolei. Încearcă din nou.').send(res);
  }
});

module.exports = passwordResetRouter;
