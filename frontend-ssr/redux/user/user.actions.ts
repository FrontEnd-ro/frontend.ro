import { Notification } from './types';

const ADD = 'user/ADD';
const LOAD = 'user/LOAD';
const MARK_AS_READ = 'user/MARK_AS_READ';
const MARK_AS_UNREAD = 'user/MARK_AS_UNREAD';
const MARK_ALL_AS_READ = 'user/MARK_ALL_AS_READ';

export const USER_NOTIFICATIONS = {
  ADD,
  LOAD,
  MARK_AS_READ,
  MARK_AS_UNREAD,
  MARK_ALL_AS_READ,
};

export const addNotification = (notification: Notification | Notification[], index = 0) => ({
  type: ADD,
  payload: {
    notification,
    index,
  },
});

export const loadNotificationsSuccess = (newNotifications: Notification[]) => ({
  type: LOAD,
  payload: {
    newNotifications,
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
