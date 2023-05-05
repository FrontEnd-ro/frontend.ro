import { API_UserI } from '~/../shared/types/user.types';
import { API_NotificationI } from '~/../shared/types/notification.types';

export interface UserState {
  info: API_UserI;
  notifications: Notifications;
}

export interface Notifications {
  list: API_NotificationI[];
  unreadCount: number;
  page: number;
  end: boolean;
}
