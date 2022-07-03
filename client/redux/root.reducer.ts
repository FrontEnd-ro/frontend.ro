import { combineReducers } from 'redux';
import { submissionReducer as submissions } from './exercise-submissions/exercise-submissions.reducer';
import { USER_LOGOUT } from './user/user.actions';
import { userReducer as user } from './user/user.reducer';
import { progressReducer as progress } from './progress/progress.reducer';
import { applicationConfigReducer as applicationConfig } from './application-config.reducer';

const rootReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    state = undefined;
  }

  return appReducer(state, action);
};

const appReducer = combineReducers({
  submissions,
  user,
  applicationConfig,
  progress,
});

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
