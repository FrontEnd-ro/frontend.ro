import {
  STORE_USER_DETAILS,
  UPDATE_FIELD,
  DUPLICATED_KEY_ERROR,
  REQUEST_IN_PROGRESS,
} from '../actions/username';

const initialState = {
  requestInProgress: false,
  usernameAlreadyInUse: false,
  emailAreadyInUse: false,
  userDetails: {
    username: '',
    email: '',
    name: '',
    avatar: '',
  },
  userProgress: {},
};

export default (state = initialState, action) => {
  const actions = {
    [REQUEST_IN_PROGRESS]: () => ({
      ...state,
      requestInProgress: !state.requestInProgress,
    }),
    [STORE_USER_DETAILS]: () => ({
      ...state,
      userDetails: action.userDetails,
    }),
    [UPDATE_FIELD]: () => ({
      ...state,
      usernameAlreadyInUse: false,
      emailAreadyInUse: false,
      userDetails: {
        ...state.userDetails,
        [action.field]: action.value,
      },
    }),
    [DUPLICATED_KEY_ERROR]: () => ({
      ...state,
      usernameAlreadyInUse: action.key === 'username',
      emailAreadyInUse: action.key === 'email',
    }),
    DEFAULT: () => state,
  };

  return actions[action.type] ? actions[action.type]() : actions.DEFAULT();
};
