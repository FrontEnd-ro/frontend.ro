/** Constants shared between server & client */
const MAX_MEDIA_MB = 10;
const MAX_MEDIA_BYTES = MAX_MEDIA_MB * 1024 * 1024;

const LESSONS_WITH_EXERCISES = [
  'texte',
  'liste',
  'imagini',
  'linkuri-si-butoane',
];

// This file defines a list of possible reasons, when a certain API might fail.
// We're sending these reasons to the client, which interprets them and can then
// inform the user of the proper action to take.
// VERY IMPORTANT: never change the number of an existing reason to preserve backwards
// compatibility. Only add new numbers here, similar to how protobuf works.
const APIErrorReasons = {
  EXERCISE_SUBMISSION_WITHOUT_TUTORIAL_START: 0,
};

// Use NodeJS style exports because this file is consumed
// both from the server & client
module.exports = {
  MAX_MEDIA_MB,
  MAX_MEDIA_BYTES,
  LESSONS_WITH_EXERCISES,
  APIErrorReasons,
};
