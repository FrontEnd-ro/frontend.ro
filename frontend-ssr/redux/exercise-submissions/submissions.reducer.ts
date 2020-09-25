import { SubmissionState } from './types';

const initialState: SubmissionState = {
  submissions: [],
};
export const submissionReducer = (
  state = initialState,
  action: { type: string; payload: any; id: string},
): SubmissionState => {
  switch (action.type) {
    case 'GET_SUBMISSIONS':
      return {
        ...state.submissions,
        submissions: action.payload,
      };
    case 'ADD_SUBMISSION':
      return {
        submissions: [...state.submissions, action.payload],
      };
    case 'REMOVE_SUBMISSION':
      return {
        submissions: state.submissions.filter((submission) => submission.id !== action.payload),
      };
    case 'EDIT_SUBMISSION':
      return {
        submissions: state.submissions.map((submission) => ((submission.id === action.payload)
          ? { ...submission, editing: !submission.editing }
          : submission)),
      };
    case 'UPDATE_SUBMISSION':
      return {
        submissions: state.submissions.map((submission) => {
          if (submission.id === action.id) {
            return {
              ...submission,
              username: action.payload.newUsername,
              avatarSrc: action.payload.newavatarSrc,
              chapter: action.payload.newChapter,
              type: action.payload.newType,
              editing: !submission.editing,
            };
          } return submission;
        }),
      };
    default:
      return state;
  }
};
export default submissionReducer;
