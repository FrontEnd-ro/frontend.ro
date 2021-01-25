import { combineReducers } from 'redux';
import { submissionReducer as submissions } from './exercise-submissions/exercise-submissions.reducer';
import { userReducer as user } from './user/user.reducer';

const rootReducer = combineReducers({
  submissions,
  user,
});

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
