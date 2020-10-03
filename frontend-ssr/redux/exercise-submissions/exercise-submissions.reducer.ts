import { SubmissionState } from './types';
import { EXERCISE_SUBMISSIONS } from './exercise-submissions.actions';
import MOCK_SUBMISSIONS from '../../pages/api/exercise-submissions/mock';

const initialState: SubmissionState = {
  submissions: MOCK_SUBMISSIONS,
  search: '',
  page: 1,
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
        ...state,
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
        ...state,
        submissions: state.submissions.filter((submission) => !id.includes(submission.id)),
      };
    }
    case EXERCISE_SUBMISSIONS.UPDATE:
      return {
        ...state,
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
    case EXERCISE_SUBMISSIONS.LOAD: {
      const { newSubmissions } = action.payload;
      return {
        ...state,
        submissions: [...state.submissions, ...newSubmissions],
        page: state.page + 1,
      };
    }
    case EXERCISE_SUBMISSIONS.SEARCH: {
      const { query } = action.payload;
      const filteredSubmissions = state.submissions.filter((submission) => submission.username
        .toLowerCase().includes(query)
        || submission.chapter.toLowerCase().includes(query)
        || submission.type.toLowerCase().includes(query));

      if (query !== '') {
        return {
          ...state,
          submissions: filteredSubmissions,
          search: query,
          page: 1,
        };
      }
      return {
        ...state,
        submissions: MOCK_SUBMISSIONS,
        search: '',
        page: 1,
      };
    }
    default:
      return state;
  }
};
export default submissionReducer;
