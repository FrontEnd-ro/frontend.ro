import { API_UserI, UserRole } from '~/../shared/types/user.types';
import { API_NotificationI } from '~/../shared/types/notification.types';
import { ExerciseType } from '~/../shared/types/lesson-exercise.types';

export interface UserState {
  info: API_UserI;
  notifications: Notifications;
}

export interface Notifications {
  list: API_NotificationI[];
  unreadCount: number;
  page: number;
  end: boolean;
}

export interface LessonExercise {
  _id: string;
  body: string;
  example?: string;
  solution: string;
  lesson: string;
  type: ExerciseType;
  user: API_UserI;
}
