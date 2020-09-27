export const STORE_USER_DETAILS = 'STORE_USER_DETAILS';
export const storeUserDetails = (userDetails) => ({
  type: STORE_USER_DETAILS,
  userDetails,
});

export const UPDATE_FIELD = 'UPDATE_FIELD';
export const updateField = (value, field) => ({
  type: UPDATE_FIELD,
  value,
  field,
});

export const DUPLICATED_KEY_ERROR = 'DUPLICATED_KEY_ERROR';
export const duplicatedKeyError = (key) => ({
  type: DUPLICATED_KEY_ERROR,
  key,
});

export const REQUEST_IN_PROGRESS = 'REQUEST_IN_PROGRESS';
export const reqInProgress = () => ({
  type: REQUEST_IN_PROGRESS,
});
