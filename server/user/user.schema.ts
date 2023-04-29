import mongoose from 'mongoose';
import { UserI, UserRole } from "../../shared/types/user.types";

const UsersSchema = new mongoose.Schema<UserI>({
  avatar: { type: String, required: true },
  name: { type: String, required: false, default: '' },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  description: { type: String, required: false, default: '' },
  password: { type: String, required: true },
  github_access_token: { type: String },
  lastLogin: { type: Date, default: new Date() },
  role: {
    type: String,
    enum: [
      UserRole.ADMIN,
      UserRole.TEACHER,
      UserRole.STUDENT,
    ],
    default: UserRole.STUDENT,
  },

  // Not using ObjectID, because we don't really need to
  // populate this server side. We just want a list of IDs,
  // which we'll use to fetch tutorial data on the client.
  tutorials: [{ type: String }],
});

const User : mongoose.Model<UserI> = mongoose.models.User || mongoose.model('User', UsersSchema);

export { User, UsersSchema };
