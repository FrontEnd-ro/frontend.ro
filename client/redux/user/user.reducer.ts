import { UserState } from './types';
import { USER_INFO } from './user.actions';

export const defaultUserState: UserState = {
  info: null,
};

const initialState: UserState = defaultUserState;

export const userReducer = (state = initialState, action: { type: string; payload: any; })
  : UserState => {
  switch (action.type) {
    case USER_INFO.LOAD: {
      return {
        ...state,
        info: action.payload,
      };
    }
    default:
      return state;
  }
};
export default userReducer;
