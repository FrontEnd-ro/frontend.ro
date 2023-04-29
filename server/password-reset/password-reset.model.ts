import mongoose from 'mongoose';
import appConfig from '../config/config';
import { PasswordReset, PasswordResetI } from './password-reset.schema';

class PasswordResetModel {
  static async validate(email: string, code: string): Promise<boolean> {
    const resetCode = await PasswordReset.findOne({
      email,
      code
    });

    if (!resetCode || new Date(resetCode.expiration).getTime() < Date.now()) {
      return false;
    }

    return true;
  }

  static create(email: string): Promise<mongoose.Document<any, any, PasswordResetI> & PasswordResetI> {
    const MINUTE_IN_MILLISECONDS = 1000 * 60;

    const code = generateCode(
      appConfig.PASS_RESET_CODE.length,
      appConfig.PASS_RESET_CODE.offset
    );

    const expiration = new Date(
      Date.now() + appConfig.PASS_RESET_CODE.expiration * MINUTE_IN_MILLISECONDS
    );

    const passwordReset = new PasswordReset({
      expiration,
      email,
      code,
    });

    return new Promise((resolve, reject) => {
      passwordReset.save((err) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(passwordReset);
      });
    });
  }
}

function generateCode(length = 4, offset = 1234): string {
  let code = '';

  for (let i = 0; i < length; i++) {
    code += Math.round((Math.random() * 10 + offset)) % 10
  }

  return code;
}

export default PasswordResetModel;
