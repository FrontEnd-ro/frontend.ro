const GET_SUBMISSIONS = 'GET_SUBMISSIONS';
const ADD_SUBMISSION = 'ADD_SUBMISSION';
const REMOVE_SUBMISSION = 'REMOVE_SUBMISSION';
const EDIT_SUBMISSION = 'EDIT_SUBMISSION';
const UPDATE_SUBMISSION = 'UPDATE_SUBMISSION';

export const getSubmissions = (submission) => ({
  type: GET_SUBMISSIONS,
  payload: submission,
});
export const addSubmission = (newSubmission) => ({
  type: ADD_SUBMISSION,
  payload: newSubmission,
});
export const removeSubmission = (id) => ({
  type: REMOVE_SUBMISSION,
  payload: id,
});
export const editSubmission = (id) => ({
  type: EDIT_SUBMISSION,
  payload: id,
});
export const updateSubmissions = (newSubmission, id) => ({
  type: UPDATE_SUBMISSION,
  payload: newSubmission,
  id,
});
