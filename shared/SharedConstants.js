/** Constants shared between server & client */
const MAX_MEDIA_MB = 10;
const MAX_MEDIA_BYTES = MAX_MEDIA_MB * 1024 * 1024;

const USER_ROLE = {
  ADMIN: 'admin',
  TEACHER: 'teacher',
  STUDENT: 'student',
};

// Use NodeJS style exports because this file is consumed
// both from the server & client
module.exports = {
  MAX_MEDIA_MB,
  MAX_MEDIA_BYTES,
  USER_ROLE,
};
