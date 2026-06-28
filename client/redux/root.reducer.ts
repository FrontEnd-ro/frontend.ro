import { CombinedState, combineReducers } from 'redux';
import { UserState } from './user/types';
import { USER_LOGOUT } from './user/user.actions';
import { userReducer as user, defaultUserState } from './user/user.reducer';
import { applicationConfigReducer as applicationConfig } from './application-config.reducer';
import { ApplicationConfig } from '~/../shared/types/application-config.types';

const rootReducer = (
  state: CombinedState<{
    user: UserState;
    applicationConfig: ApplicationConfig;
  }>,
  action,
) => {
  if (action.type === USER_LOGOUT) {
    // Reset all reducers except the application config.
    state = {
      user: defaultUserState,
      applicationConfig: state.applicationConfig,
    };
  }

  return appReducer(state, action);
};

const appReducer = combineReducers({
  user,
  applicationConfig,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
