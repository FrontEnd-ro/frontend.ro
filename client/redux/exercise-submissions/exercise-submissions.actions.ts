import { Submission } from './types';

const ADD = 'exercise-submissions/ADD';
const REMOVE = 'exercise-submissions/REMOVE';
const UPDATE = 'exercise-submissions/UPDATE';
const LOAD = 'exercise-submissions/LOAD';
const SEARCH = 'exercise-submissions/SEARCH';

export const EXERCISE_SUBMISSIONS = {
  ADD,
  REMOVE,
  UPDATE,
  LOAD,
  SEARCH,
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

export const loadSubmissions = (newSubmissions: Submission[]) => ({
  type: LOAD,
  payload: {
    newSubmissions,
  },
});

export const searchSubmissions = (query: string, newSubmissions: Submission[]) => ({
  type: SEARCH,
  payload: {
    query,
    newSubmissions,
  },
});
