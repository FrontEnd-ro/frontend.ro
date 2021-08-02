/** Constants shared between server & client */
const MAX_MEDIA_MB = 10;
const MAX_MEDIA_BYTES = MAX_MEDIA_MB * 1024 * 1024;

enum UserRole {
  ADMIN= 'admin',
  TEACHER= 'teacher',
  STUDENT= 'student',
}

enum SubmissionStatus {
  IN_PROGRESS = 'in_progress',
  AWAITING_REVIEW= 'awaiting_review',
  DONE= 'done',
}

const LESSONS_WITH_EXERCISES = [
  'texte',
  'liste',
  'imagini',
  'linkuri-si-butoane',
];

// Use NodeJS style exports because this file is consumed
// both from the server & client

export {
  MAX_MEDIA_MB,
  MAX_MEDIA_BYTES,
  UserRole,
  SubmissionStatus,
  LESSONS_WITH_EXERCISES,
};
