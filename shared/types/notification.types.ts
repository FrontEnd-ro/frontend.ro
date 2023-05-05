import { API_UserI } from './user.types';

/** *************************** Notifications */
export enum NotificationType {
  SUCCESS = 'success',
  INFO = 'info',
  DANGER = 'danger',
}

export enum NotificationUrgency {
  URGENT = 'urgent',
  REGULAR = 'regular'
}

// Maybe we'll add SMS or other forms in the future
export enum NotificationChannel {
  IN_APP = 'in-app',
  EMAIL = 'email',
}

export type API_NotificationI = {
  _id?: string;
  to: API_UserI;
  type: NotificationType;
  title: string;
  short_message: string;
  long_message: string;
  timestamp: number;
  urgency: NotificationUrgency;
  read?: boolean;
  href?: string;
  href_text?: string;
  from?: API_UserI;
  channels?: NotificationChannel[];
  tags?: Map<string, string>
}
