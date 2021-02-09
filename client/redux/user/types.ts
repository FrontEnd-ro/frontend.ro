import { ChapterType } from '../exercise-submissions/types';

export interface UserState {
  info: {
    name: string;
    username: string;
    email: string;
    avatar: string;
    description?: string;
  };
  notifications: Notifications;
}

export interface Notifications {
  list: Notification[];
  unread: number;
  unreadCount: number;
  page: number;
  end: boolean;
}

export interface Notification {
  _id: string;
  username: string;
  name: string;
  avatar: string;
  message: string;
  timestamp: number;
  isUnread: boolean;
  url: string;
}

export interface Exercise {
  _id: string;
  body: string;
  example?: string;
  private: boolean;
  solution: string;
  suggestion?: string;
  tags: string[];
  type: ChapterType;
  user: UserState['info'];
}
