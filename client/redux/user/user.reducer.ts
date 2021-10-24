import { ParsedNotificationI } from '~/../shared/types/notification.types';
import { UserState } from './types';
import { USER_INFO, USER_NOTIFICATIONS } from './user.actions';

export const defaultUserState = {
  info: undefined,
  notifications: {
    // Make sure we add then in descending order (by timestamp)
    list: undefined, unreadCount: 0, page: 0, end: false,
  },
};

const initialState: UserState = defaultUserState;

export const userReducer = (state = initialState, action: { type: string; payload: any; })
  : UserState => {
  switch (action.type) {
    case USER_INFO.LOAD: {
      return {
        ...state,
        info: action.payload,
      };
    }

    case USER_NOTIFICATIONS.ADD: {
      let {
        index,
        notifications,
      }: {
        index: number, notifications: ParsedNotificationI | ParsedNotificationI[]
      } = action.payload;

      if (!Array.isArray(notifications)) {
        notifications = [notifications];
      }

      const allNotifications = [
        ...state.notifications.list.slice(0, index),
        ...notifications,
        ...state.notifications.list.slice(index),
      ];

      return {
        ...state,
        notifications: {
          ...state.notifications,
          list: allNotifications,
          unreadCount: getUnreadCount(allNotifications),
        },
      };
    }

    case USER_NOTIFICATIONS.LOAD: {
      const { newNotifications } = action.payload;
      const allNotifications = state.notifications.list
        ? [...state.notifications.list, ...newNotifications]
        : newNotifications;

      return {
        ...state,
        notifications: {
          ...state.notifications,
          list: allNotifications,
          page: state.notifications.page + 1,
          end: newNotifications.length === 0,
          unreadCount: getUnreadCount(allNotifications),
        },
      };
    }

    case USER_NOTIFICATIONS.REPLACE: {
      const { notifications }: {notifications: ParsedNotificationI[]} = action.payload;

      return {
        ...state,
        notifications: {
          list: notifications.sort((a, b) => b.timestamp - a.timestamp),
          page: 1,
          // TODO: remove when changing to a page-based API
          end: true,
          unreadCount: getUnreadCount(notifications),
        },
      };
    }

    case USER_NOTIFICATIONS.MARK_AS_READ: {
      let { id } = action.payload;

      return {
        ...state,
        notifications: {
          ...state.notifications,
          list: [...state.notifications.list.map((n) => {
            if (n._id === id) {
              return {
                ...n,
                read: true,
              };
            }
            return n;
          })],
          unreadCount: state.notifications.unreadCount - 1,
        },
      };
    }
    case USER_NOTIFICATIONS.MARK_AS_UNREAD: {
      let { id } = action.payload;

      return {
        ...state,
        notifications: {
          ...state.notifications,
          list: [...state.notifications.list.map((n) => {
            if (n._id === id) {
              return {
                ...n,
                read: false,
              };
            }
            return n;
          })],
          unreadCount: state.notifications.unreadCount + 1,
        },
      };
    }
    case USER_NOTIFICATIONS.MARK_ALL_AS_READ: {
      return {
        ...state,
        notifications: {
          ...state.notifications,
          list: state.notifications.list.map((n) => ({ ...n, read: true })),
          unreadCount: 0,
        },
      };
    }
    default:
      return state;
  }
};
export default userReducer;

function getUnreadCount(notifications: ParsedNotificationI[]) {
  return notifications.reduce((acc, cur) => {
    if (!cur.read) {
      return acc + 1;
    }

    return acc;
  }, 0);
}
