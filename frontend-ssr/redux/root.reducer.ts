import { combineReducers } from 'redux';
import { submissionReducer as submissions } from './exercise-submissions/exercise-submissions.reducer';

const rootReducer = combineReducers({
  submissions,
});

export default rootReducer;
