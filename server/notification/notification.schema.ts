import mongoose, { Types } from 'mongoose';
import { NotificationChannel, NotificationType, NotificationUrgency } from '../../shared/types/notification.types';

export interface NotificationI {
  // Optional because when we create notifications
  // we don't know what ID will MongoDB use
  _id?: string;

  // UUID of the user that receives this notification
  to: Types.ObjectId;

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
  from?: Types.ObjectId;

  // How do we reach the user? In app notifications? Email? Something else?
  channels?: NotificationChannel[];

  // Tags that uniquely identify a notification.
  // These can help us making sure we never send a notification
  // more than once.
  tags?: Map<string, string>
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


const NotificationSchema = new mongoose.Schema<NotificationI>({
  to: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: {
    type: String, enum: NotificationType, default: NotificationType.INFO, required: true,
  },
  title: { type: String, required: true, default: 'Notificare FrontEnd.ro' },
  short_message: { type: String, required: true },
  long_message: { type: String, required: true },
  timestamp: { type: Number, required: true },
  urgency: {
    type: String, enum: NotificationUrgency, default: NotificationUrgency.REGULAR, required: true,
  },
  read: { type: Boolean, default: false },
  // Optionals 👇
  href: { type: String, required: false },
  href_text: { type: String, required: false },
  from: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
  channels: { type: [String], enum: NotificationChannel, required: false },
  tags: { type: Map, of: String, required: false }
});


const NotificationModel = mongoose.model<NotificationI>('Notification', NotificationSchema);

const Notification: mongoose.Model<NotificationI, {}, {}> = mongoose.models.Notification || NotificationModel;

export {
  Notification,
  NotificationSchema,
}
