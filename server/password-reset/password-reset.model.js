const mongoose = require('mongoose');
const { default: appConfig } = require('../config');

const PasswordResetSchema = new mongoose.Schema({
  expiration: { type: Date, required: true },
  email: { type: String, required: true },
  code: { type: String, required: true }
});

const PasswordReset = mongoose.models.PasswordReset || mongoose.model('PasswordReset', PasswordResetSchema);

class PasswordResetModel {
  static async validate(email, code) {
    const resetCode = await PasswordReset.findOne({
      email,
      code
    });

    if (!resetCode || new Date(resetCode.expiration).getTime() < Date.now()) {
      return false;
    }

    return true;
  }

  static create(email) {
    const MINUTE_IN_MILLISECONDS = 1000 * 60;

    const code = generateCode(
      appConfig.PASS_RESET_CODE.length,
      appConfig.PASS_RESET_CODE.offset
    );

    const expiration = new Date(
      Date.now() + appConfig.PASS_RESET_CODE.expiration * MINUTE_IN_MILLISECONDS
    );

    const resetCode = new PasswordReset({
      expiration,
      email,
      code,
    });

    return new Promise((resolve, reject) => {
      resetCode.save((err) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(resetCode);
      });
    });
  }
}

function generateCode(length = 4, offset = 1234) {
  let code = '';

  for (let i = 0; i < length; i++) {
    code += Math.round((Math.random() * 10 + offset)) % 10
  }

  return code;
}

module.exports = PasswordResetModel;
