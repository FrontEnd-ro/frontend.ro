import { Submission } from './types';

const ADD = 'exercise-submissions/ADD';
const REMOVE = 'exercise-submissions/REMOVE';
const UPDATE = 'exercise-submissions/UPDATE';

export const EXERCISE_SUBMISSIONS = {
  ADD,
  REMOVE,
  UPDATE,
};

export const addSubmission = (submission: Submission | Submission[], index = 0) => ({
  type: ADD,
  payload: {
    submission,
    index,
  },
});
export const removeSubmission = (id: string | string[]) => ({
  type: REMOVE,
  payload: {
    id,
  },
});
export const updateSubmission = (id: string, newSubmission: Submission) => ({
  type: UPDATE,
  payload: {
    id,
    newSubmission,
  },
});
