import { SubmissionState } from './types';
import { EXERCISE_SUBMISSIONS } from './exercise-submissions.actions';

const initialState: SubmissionState = {
  submissions: [],
};
export const submissionReducer = (state = initialState, action: { type: string; payload: any;})
: SubmissionState => {
  switch (action.type) {
    case EXERCISE_SUBMISSIONS.ADD: {
      let { index, submission } = action.payload;
      if (!Array.isArray(submission)) {
        submission = [submission];
      }
      return {
        submissions: [...state.submissions.slice(0, index),
          ...submission,
          ...state.submissions.slice(index)],
      };
    }
    case EXERCISE_SUBMISSIONS.REMOVE: {
      let { id } = action.payload;
      if (!Array.isArray(id)) {
        id = [id];
      }
      return {
        submissions: state.submissions.filter((submission) => !id.includes(submission.id)),
      };
    }
    case EXERCISE_SUBMISSIONS.UPDATE:
      return {
        submissions: state.submissions.map((submission) => {
          const { id, newSubmission } = action.payload;
          if (submission.id === id) {
            return {
              ...submission,
              ...newSubmission,
            };
          }
          return submission;
        }),
      };
    default:
      return state;
  }
};
export default submissionReducer;
