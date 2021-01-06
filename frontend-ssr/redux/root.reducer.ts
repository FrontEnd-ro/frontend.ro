import { combineReducers } from 'redux';
import { submissionReducer as submissions } from './exercise-submissions/exercise-submissions.reducer';
import { userReducer as user } from './user/user.reducer';
import { commentReducer as comments } from './lesson-comments/lesson-comments.reducer';

const rootReducer = combineReducers({
  submissions,
  user,
  comments,
});

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
