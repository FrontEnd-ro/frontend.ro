import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import {
  loadNotificationsSuccess,
  markNotificationAsRead,
  markNotificationAsUnread,
  markAllAsRead,
} from '../../redux/user/user.actions';
import UserService from '../../services/User.service';

import Scroll from '../Scroll';
import NotificationSkeleton from './notification/NotificationSkeleton';
import { RootState } from '~/redux/root.reducer';
import SweetAlertService from '~/services/sweet-alert/SweetAlert.service';
import Notification from './notification/Notification';

import styles from './notification/Notification.module.scss';

interface State {
  loading: boolean;
  isOpen: boolean;
}

const PRELOAD_DISTANCE = 50;

class NotificationsTooltip extends React.Component<
  ConnectedProps<typeof connector>,
  State
> {
  toggleRef: React.RefObject<HTMLDivElement>;

  hiddenRef: React.RefObject<HTMLDivElement>;

  scrollRef: React.RefObject<Scroll>;

  private observer: IntersectionObserver;

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      /** at this point isOpen is true so we can see the notifications when we enter the page */
      isOpen: true,
    };

    this.toggleRef = React.createRef();
    this.hiddenRef = React.createRef();
    this.scrollRef = React.createRef();
  }

  componentDidMount() {
    const { user } = this.props;
    const { notifications } = user;

    if (!notifications.end) {
      this.initIntersectionObserver();
    }
  }

  componentDidUpdate(prevProps) {
    const { user } = this.props;

    if (prevProps.user.notifications.end !== user.notifications.end && user.notifications.end) {
      this.observer.disconnect();
    }

    if (prevProps.user.notifications.end !== user.notifications.end && !user.notifications.end) {
      this.initIntersectionObserver();
    }
  }

  componentWillUnmount() {
    const { user } = this.props;
    const { notifications } = user;

    if (!notifications.end) {
      this.observer.disconnect();
    }
  }

  initIntersectionObserver = () => {
    const options = {
      threshold: 0.3,
    };
    this.observer = new IntersectionObserver(this.loadMore, options);
    this.observer.observe(this.hiddenRef.current);
  };

  loadMore = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.loadNextPage();
      }
    });
  };

  loadNextPage = async () => {
    const { user, dispatch } = this.props;
    const { notifications } = user;
    this.setState({ loading: true });

    try {
      const newNotifications = await UserService.getNotifications(notifications.page);
      dispatch(loadNotificationsSuccess(newNotifications));
      // this.scrollRef.current.refresh();
    } catch (err) {
      SweetAlertService.toast({ type: 'error', text: err });
    } finally {
      this.setState({ loading: false });
    }
  };

  markAsRead = async (id) => {
    const { user } = this.props;
    const { notifications } = user;
    const { dispatch } = this.props;

    if (notifications.list.find((n) => n._id === id).isUnread) {
      try {
        await UserService.markAsRead(id);
        dispatch(markNotificationAsRead(id));
      } catch (err) {
        dispatch(markNotificationAsUnread(id));
      }
    }
  };

  markAllAsRead = async () => {
    const { dispatch } = this.props;
    try {
      await UserService.markAllAsRead();
      dispatch(markAllAsRead());
    } catch (err) {
      SweetAlertService.toast({ type: 'error', text: err });
    }
  };

  render() {
    const { user } = this.props;
    const { loading, isOpen } = this.state;

    const notifications = user.notifications.list || [];

    return (
      <div
        /** the initial code was { display: !notifications.length ? 'none' : 'initial' }
       but I kept it this way for now just to see the wrapper */
        style={{ display: !notifications.length ? '' : 'initial' }}
        className={`${styles['header-tooltip']} ${styles['notifications-tooltip']}`}
      >
        <div className={styles.icon} ref={this.toggleRef}>
          <i className={`${loading ? 'icon-spinner' : 'icon-bell'}`} />
          {user.notifications.unreadCount > 0 && (
            <span className={`${styles.badge} text-white text-center text-xs`}>
              {user.notifications.unreadCount}
            </span>
          )}
        </div>
        {isOpen && (
          <Scroll
            hasInfiniteScroll={!user.notifications.end}
            onEndReach={this.loadNextPage}
            preloadDistance={PRELOAD_DISTANCE}
            ref={this.scrollRef}
          >
            <ul className={styles.notifications}>
              <li>
                <button
                  type="button"
                  id={styles.markAllAsReadBtn}
                  className="outline-none d-inline-block border-none"
                  onClick={this.markAllAsRead}
                >
                  Mark all as read
                </button>
              </li>
              {notifications.map((notificationProps) => (
                <li
                  key={notificationProps._id}
                  className={notificationProps.isUnread ? `${styles['is--unread']} text-xs` : 'text-xs'}
                  onClick={() => this.markAsRead(notificationProps._id)}
                  role="presentation"
                >
                  <Notification {...notificationProps} />
                </li>
              ))}
              {loading && (
                <>
                  <NotificationSkeleton />
                  <NotificationSkeleton />
                  <NotificationSkeleton />
                  <NotificationSkeleton />
                  <NotificationSkeleton />
                </>
              )}
            </ul>
            <div className="invisible" ref={this.hiddenRef} />
          </Scroll>
        )}
      </div>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    user: state.user,
  };
}

const connector = connect(mapStateToProps);

export default connector(NotificationsTooltip);
