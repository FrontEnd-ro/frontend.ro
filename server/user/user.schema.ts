const mongoose = require('mongoose');
const { UserRole } = require('../../shared/types/user.types');

const UsersSchema = new mongoose.Schema({
  avatar: { type: String, required: true },
  name: { type: String, required: false, default: '' },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  description: { type: String, required: false, default: '' },
  password: { type: String, required: true },
  github_access_token: { type: String },
  lastLogin: { type: Date, default: Date.now() },
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

export { UsersSchema };
