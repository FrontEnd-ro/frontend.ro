import { combineReducers } from 'redux';
import { submissionReducer } from './exercise-submissions/submissions.reducer';

const rootReducer = combineReducers({
  submissionReducer,
});

export default rootReducer;
