/* eslint-disable camelcase */
import { PopulatedDoc } from 'mongoose';
import { UserI } from './user.types';

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

export interface NotificationI {
  // Optional because when we create notifications
  // we don't know what ID will MongoDB use
  _id?: string;

  // UUID of the user that receives this notification
  to: PopulatedDoc<UserI>;

  type: NotificationType;

  // For the moment, only used as "subject" for
  // Email Notifications. Another usecase would be as
  // title for modal notificatons (if we implement them).
  // NOTE: this value is also important in grouping
  // conversations into the same Email Thread inside GMail.
  title: string;

  // For the moment the UI will only show the
  // "short_message" property. However, we need these
  // to correctly map on Email Notifications where "short_message"
  // maps to the headline, and "long_message" as the actual message.
  short_message: string;
  long_message: string;

  // Nanos
  timestamp: number;

  // Based on this we can decide for example where to
  // show an "in-app" notification. Maybe the regular
  // ones are showed in the dropdown, while the urgent ones
  // get a modal/popup.
  urgency: NotificationUrgency;

  // Did the recipient read the notification
  read?: boolean;

  // In case the notification requires an action
  // or is related to something else on the platform,
  // have a `href` that leads there when clicking it.
  href?: string;
  // On top of the above HREF, let's also have
  // a text (call to action). This maps to the
  // button on the email temaplte
  href_text?: string;

  // The UUID of a user or undefined if it's an
  // automatically generated one (by the app).
  from?: PopulatedDoc<UserI>;

  // How do we reach the user? In app notifications? Email? Something else?
  channels?: NotificationChannel[];
}

// On the FrontEnd side we parse the above notification
// and insert aditinal info about the sender.
export type ParsedNotificationI = Omit<NotificationI, 'to' | 'from'> & {
  from?: {
    username: string;
    name?: string;
    avatar: string;
  }
}

type NotificationTemplateModelBase = {
  name: string;
  subject: string;
  headline: string;
  body: string;
  date?: string;
} & { [key in NotificationType]?: boolean };

type NotificationTemplateModelWithCTA = NotificationTemplateModelBase & {
  cta_text: string;
  cta_link: string;
}

export type NotificationTemplateModel =
  NotificationTemplateModelBase | NotificationTemplateModelWithCTA;
