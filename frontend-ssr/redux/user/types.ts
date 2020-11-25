export interface UserState {
  info: {
    name: 'string',
    username: 'string',
    email: 'string',
    avatar: 'string',
  }
  notifications: Notifications;
}

export interface Notifications {
  list: Notification[],
  unread: number,
  unreadCount: number,
  page: number,
  end: boolean,
}

export interface Notification {
  _id: string,
  username: string,
  name: string,
  avatar: string,
  message: string,
  timestamp: number,
  isUnread: boolean,
  url: string,
}
