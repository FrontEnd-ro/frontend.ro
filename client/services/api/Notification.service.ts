import HttpService from './Http.service';
import { ParsedNotificationI } from '../../../shared/types/notification.types';

class NotificationService {
  static fetchAll(): Promise<ParsedNotificationI[]> {
    return HttpService
      .get(`${process.env.ENDPOINT}/notifications/`, undefined, true)
      .then((resp) => resp.json());
  }

  static markAsRead(notificationId: string): Promise<ParsedNotificationI> {
    return HttpService
      .post(`${process.env.ENDPOINT}/notifications/${notificationId}/read`)
      .then((resp) => resp.json());
  }

  static markAllAsRead(): Promise<Response> {
    return HttpService
      .post(`${process.env.ENDPOINT}/notifications/read`);
  }
}

export default NotificationService;
