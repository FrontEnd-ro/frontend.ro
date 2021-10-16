import mongoose from 'mongoose';
import { NotificationChannel, NotificationI, NotificationType, NotificationUrgency } from '../../shared/types/notification.types';

const NotificationSchema = new mongoose.Schema<NotificationI>({
  to: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: {
    type: String, enum: NotificationType, default: NotificationType.INFO, required: true,
  },
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
});


const NotificationModel = mongoose.model<NotificationI>('Notification', NotificationSchema);

const Notification: mongoose.Model<NotificationI, {}, {}> = mongoose.models.Notification || NotificationModel;

export {
  Notification,
  NotificationSchema,
}
