import { CombinedState, combineReducers } from 'redux';
import { UserState } from './user/types';
import { USER_LOGOUT } from './user/user.actions';
import {
  initialState as defaultSubmissionState,
  submissionReducer as submissions,
} from './exercise-submissions/exercise-submissions.reducer';
import { userReducer as user, defaultUserState } from './user/user.reducer';
import {
  initialState as defaultProgressState,
  progressReducer as progress,
  ProgressState,
} from './progress/progress.reducer';
import { applicationConfigReducer as applicationConfig } from './application-config.reducer';
import { SubmissionState } from './exercise-submissions/types';
import { ApplicationConfig } from '~/../shared/types/application-config.types';

const rootReducer = (
  state: CombinedState<{
    submissions: SubmissionState;
    user: UserState;
    applicationConfig: ApplicationConfig;
    progress: ProgressState;
  }>,
  action,
) => {
  if (action.type === USER_LOGOUT) {
    // Reset all reducers except the application config.
    state = {
      user: defaultUserState,
      submissions: defaultSubmissionState,
      progress: defaultProgressState,
      applicationConfig: state.applicationConfig,
    };
  }

  return appReducer(state, action);
};

const appReducer = combineReducers({
  submissions,
  user,
  applicationConfig,
  progress,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
