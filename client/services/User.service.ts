import { uuid } from '~/services/Utils';
import { Notification } from '../redux/user/types';
import HttpService from './Http.service';

const MOCK_NOTIFICATIONS: Notification[] = [
  {
    _id: uuid(),
    username: 'Diana123',
    name: 'Diana',
    avatar:
      'https://www.gravatar.com/avatar/9d4d790eb85e56d6524faed8a883d6cb?s=500&d=404',
    message: 'added a new exercise',
    timestamp: Date.now(),
    isUnread: true,
    url: '',
  },
  {
    _id: uuid(),
    username: 'AlexPava',
    name: 'Alex',
    avatar: 'https://joeschmoe.io/api/v1/josh',
    message: 'sent you a message',
    timestamp: Date.now(),
    isUnread: true,
    url: '',
  },
  {
    _id: uuid(),
    username: 'Andrei82',
    name: 'Andrei',
    avatar: 'https://joeschmoe.io/api/v1/jon',
    message: 'added a new exercise',
    timestamp: Date.now(),
    isUnread: true,
    url: '',
  },
  {
    _id: uuid(),
    username: 'AntoniaBebe',
    name: 'Antonia',
    avatar: 'https://joeschmoe.io/api/v1/jess',
    message: 'sent you a message',
    timestamp: Date.now(),
    isUnread: true,
    url: '',
  },
  {
    _id: uuid(),
    username: 'Raluca99',
    name: 'Raluca',
    avatar: 'https://joeschmoe.io/api/v1/jane',
    message: 'added a new topic',
    timestamp: Date.now(),
    isUnread: true,
    url: '',
  },
];

const LOAD_DURATION = 1000;

class UserService {
  static ping() {
    return HttpService.get(`${process.env.ENDPOINT}/auth/ping`).then((resp) => resp.json());
  }

  static subscribe({ name, email }) {
    return HttpService.post(`${process.env.ENDPOINT}/auth/subscribe`, {
      name,
      email,
    }).then((resp) => resp.json());
  }

  static login({
    emailOrUsername,
    password,
  }: {
    emailOrUsername: string;
    password: string;
  }) {
    return HttpService.post(`${process.env.ENDPOINT}/auth/login`, {
      emailOrUsername,
      password,
    }).then((resp) => resp.json());
  }

  static logout() {
    return HttpService.post(`${process.env.ENDPOINT}/auth/logout`);
  }

  static checkUsername(username: string) {
    return HttpService.get(
      `${process.env.ENDPOINT}/auth/check-username/${username}`,
    );
  }

  static register({
    email,
    username,
    password,
  }: {
    email: string;
    username: string;
    password: string;
  }) {
    return HttpService.post(`${process.env.ENDPOINT}/auth/register`, {
      email,
      username,
      password,
    }).then((resp) => resp.json());
  }

  static wait(mili) {
    return new Promise((resolve) => setTimeout(resolve, mili));
  }

  static async getNotifications(page = 0) {
    await UserService.wait(LOAD_DURATION);
    return MOCK_NOTIFICATIONS;
  }

  static async markAsRead(id) {
    await UserService.wait(LOAD_DURATION);
  }

  static async markAllAsRead() {
    await UserService.wait(LOAD_DURATION);
  }
}

export default UserService;
