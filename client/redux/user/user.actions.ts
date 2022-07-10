import { ParsedNotificationI } from '../../../shared/types/notification.types';

const LOAD_INFO = 'user/LOAD_INFO';
const STARTED_TUTORIAL = 'user/STARTED_TUTORIAL';

const ADD_NOTIFICATIONS = 'user/ADD_NOTIFICATIONS';
const LOAD_NOTIFICATIONS = 'user/LOAD_NOTIFICATIONS';
const REPLACE_NOTIFICATIONS = 'user/REPLACE_NOTIFICATIONS';

const MARK_AS_READ = 'user/MARK_NOTIFICATIONS_AS_READ';
const MARK_AS_UNREAD = 'user/MARK_NOTIFICATIONS_AS_UNREAD';
const MARK_ALL_AS_READ = 'user/MARK_ALL_NOTIFICATIONS_AS_READ';

export const USER_INFO = {
  LOAD: LOAD_INFO,
  STARTED_TUTORIAL,
};

export const USER_NOTIFICATIONS = {
  ADD: ADD_NOTIFICATIONS,
  LOAD: LOAD_NOTIFICATIONS,
  REPLACE: REPLACE_NOTIFICATIONS,
  MARK_AS_READ,
  MARK_AS_UNREAD,
  MARK_ALL_AS_READ,
};

export const USER_LOGOUT = 'user/LOGOUT';

/** User info */
export const loadInfo = (info: any) => ({
  type: LOAD_INFO,
  payload: info,
});

/** Notifications */
export const addNotification = (
  notification: ParsedNotificationI | ParsedNotificationI[], index = 0,
) => ({
  type: ADD_NOTIFICATIONS,
  payload: {
    notification,
    index,
  },
});

export const loadNotificationsSuccess = (newNotifications: ParsedNotificationI[]) => ({
  type: LOAD_NOTIFICATIONS,
  payload: {
    newNotifications,
  },
});

export const replaceNotificationsSuccess = (notifications: ParsedNotificationI[]) => ({
  type: REPLACE_NOTIFICATIONS,
  payload: {
    notifications,
  },
});

export const markNotificationAsRead = (id: string) => ({
  type: MARK_AS_READ,
  payload: {
    id,
  },
});

export const markNotificationAsUnread = (id: string) => ({
  type: MARK_AS_UNREAD,
  payload: {
    id,
  },
});

export const markAllAsRead = () => ({
  type: MARK_ALL_AS_READ,
  payload: null,
});

export const logoutUser = () => ({
  type: USER_LOGOUT,
  payload: null,
});

export const startedTutorial = (tutorialId: string) => ({
  type: STARTED_TUTORIAL,
  payload: {
    tutorialId,
  },
});
