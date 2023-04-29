import mongoose from "mongoose";

export interface PasswordResetI {
  expiration: Date,
  email: string,
  code: string
}

const PasswordResetSchema = new mongoose.Schema<PasswordResetI>({
  expiration: { type: Date, required: true },
  email: { type: String, required: true },
  code: { type: String, required: true }
});

const PasswordReset: mongoose.Model<PasswordResetI> = mongoose.models.PasswordReset
  || mongoose.model('PasswordReset', PasswordResetSchema);

export { PasswordReset };
