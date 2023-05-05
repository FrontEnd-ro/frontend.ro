import HttpService from './Http.service';
import { API_NotificationI } from '../../../shared/types/notification.types';

class NotificationService {
  static fetchAll(): Promise<API_NotificationI[]> {
    return HttpService
      .get(`${process.env.ENDPOINT}/notifications/`, undefined, true)
      .then((resp) => resp.json());
  }

  static markAsRead(notificationId: string): Promise<API_NotificationI> {
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
