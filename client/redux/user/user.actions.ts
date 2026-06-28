const LOAD_INFO = 'user/LOAD_INFO';

export const USER_INFO = {
  LOAD: LOAD_INFO,
};

export const USER_LOGOUT = 'user/LOGOUT';

/** User info */
export const loadInfo = (info: any) => ({
  type: LOAD_INFO,
  payload: info,
});

export const logoutUser = () => ({
  type: USER_LOGOUT,
  payload: null,
});
