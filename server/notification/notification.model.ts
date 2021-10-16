/**
 * Base module for processing different kind of notifications
 * > in-app, via email, etc
 * The functions here are going to be used by our business-logic
 * code to decide which/what kind of notification we want to show.
 */
import mongoose from 'mongoose';
import UserModel from '../user/user.model';
import EmailService from '../Email.service';
import { validateAgainstSchemaProps, validateObjectId } from '../ServerUtils';
import { Notification, NotificationSchema } from './notification.schema';
import { NotificationChannel, NotificationTemplateModel, NotificationI } from '../../shared/types/notification.types';

class NotificationModel {
  static getById(notificationId: string) {
    if (!mongoose.isValidObjectId(notificationId)) {
      return null;
    }

    return Notification.findById(notificationId);
  }

  static getAll(recipientId: string) {
    return Notification.find({ to: recipientId });
  }

  static markAsRead(notificationId: string) {
    return Notification.findOneAndUpdate(
      { _id: notificationId },
      { read: true },
      { new: true }
    );
  }

  static markAllAsRead(recipientId: string) {
    return Notification.updateMany(
      { to: recipientId },
      { read: true }
    );
  }

  static async persist(payload: NotificationI) {
    // Make sure the payload only has props defined on the Schema
    validateAgainstSchemaProps(payload, NotificationSchema);

    const user = await UserModel.findUserBy({ _id: payload.to });
    if (user === null) {
      throw new Error(`Utilizatorul cu id=${payload.to} nu există`);
    }

    const notification = new Notification(payload);
    await notification.save();
    return notification;
  }

  static async notify(payload: NotificationI, channels: NotificationChannel[]) {
    await NotificationModel.persist({
      ...payload,
      channels,
    });

    const user = await UserModel.findUserBy({ _id: payload.to });
    const responses = await Promise.all(channels.map(async (channel) => {
      switch (channel) {
        case NotificationChannel.EMAIL:
          const templateModel: NotificationTemplateModel = {
            name: user.name ?? user.username,
            subject: payload.short_message,
            body: payload.long_message,
            [payload.type]: true,
            cta_link: payload.href,
            cta_text: payload.href_text,
          }

          return EmailService.sendTemplateWithAlias(
            user.email,
            "notification",
            templateModel
          );
        default:
          return { success: true }
      }
    }));

    if (responses.every(r => r.success)) {
      return { success: true }
    }

    return {
      success: false,
      responses,
    }
  }
}

export default NotificationModel;
