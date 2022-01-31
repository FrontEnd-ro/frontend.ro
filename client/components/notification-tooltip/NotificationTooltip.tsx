import { connect, ConnectedProps } from 'react-redux';
import React, { useEffect, useRef, useState } from 'react';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import List from '../List';
import Button from '~/components/Button';
import Notification from './notification/Notification';

import {
  markNotificationAsRead,
  markNotificationAsUnread,
  markAllAsRead as markAllAsReadAction,
  replaceNotificationsSuccess,
} from '../../redux/user/user.actions';
import { RootState } from '~/redux/root.reducer';
import { useOutsideClick } from '~/services/Hooks';
import SkeletonNotificationList from './skeleton-list/SkeletonList';
import NotificationService from '~/services/api/Notification.service';
import SweetAlertService from '~/services/sweet-alert/SweetAlert.service';

import styles from './NotificationTooltip.module.scss';

type Props = {
  className?: string
  tooltipClassName?: string;
} & ConnectedProps<typeof connector>;

const NotificationsTooltip = ({
  className, tooltipClassName, user, dispatch,
}: Props) => {
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const hiddenRef = useRef<HTMLDivElement>(null);
  const componentRef = useRef<HTMLDivElement>(null);
  const notifications = user.notifications.list || [];

  const toggle = () => setIsOpen(!isOpen);

  const loadNextPage = async () => {
    setLoading(true);

    try {
      const newNotifications = await NotificationService.fetchAll();
      dispatch(replaceNotificationsSuccess(newNotifications));
    } catch (err) {
      setError(true);
      console.error('NotificationsTooltip.loadNextPage', err);
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (id) => {
    const { notifications } = user;

    if (notifications.list.find((n) => n._id === id).read === false) {
      try {
        dispatch(markNotificationAsRead(id));
        await NotificationService.markAsRead(id);
      } catch (err) {
        dispatch(markNotificationAsUnread(id));
      }
    }
  };

  const markAllAsRead = async () => {
    try {
      dispatch(markAllAsReadAction());
      await NotificationService.markAllAsRead();
    } catch (err) {
      SweetAlertService.toast({ type: 'error', text: err });
    }
  };

  useEffect(() => {
    if (isOpen && !user.notifications.list) {
      loadNextPage();
    }
  }, [isOpen]);

  useOutsideClick(componentRef, () => setIsOpen(false));

  /** For the moment disable pagination */
  // const observer = useRef<IntersectionObserver>(null);
  // const initIntersectionObserver = () => {
  //   const options = {
  //     threshold: 0.3,
  //   };
  //   observer.current = new IntersectionObserver(loadMore, options);
  //   observer.current.observe(hiddenRef.current);
  // };

  // const loadMore = (entries) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       loadNextPage();
  //     }
  //   });
  // };
  // useEffect(() => {
  //   if (user.notifications.end && observer.current) {
  //     observer.current.disconnect();
  //   }
  // }, [user.notifications.end]);

  // useEffect(() => {
  //   if (isOpen && !user.notifications.end) {
  //     initIntersectionObserver();
  //     return () => observer.current.disconnect();
  //   }

  //   return noop;
  // }, [isOpen, user.notifications.end]);

  return (
    <div ref={componentRef} className={`${className ?? ''} relative`}>
      <Button
        onClick={toggle}
        variant="transparent"
        className={`${styles.icon} relative`}
      >
        <FontAwesomeIcon style={{ minWidth: '20px' }} width="20px" icon={loading ? faSpinner : faBell} />
        {user.notifications.unreadCount > 0 && (
          <span className={`${styles['unread-badge']} text-white text-center text-xs`}>
            {user.notifications.unreadCount}
          </span>
        )}
      </Button>
      {isOpen && (
        <div className={`${styles.tooltip} ${tooltipClassName ?? ''} bg-white`}>
          {notifications.length > 0 && (
            <div className="text-right p-3 text-xs text-blue">
              <Button
                variant="transparent"
                onClick={markAllAsRead}
              >
                Marchează notificările drept citite
              </Button>
            </div>
          )}
          {notifications.length > 0 && (
            <List>
              {notifications.map((notificationProps) => (
                <Notification
                  key={notificationProps._id}
                  notification={notificationProps}
                  onMarkAsRead={() => markAsRead(notificationProps._id)}
                />
              ))}
            </List>
          )}
          {loading && (<SkeletonNotificationList />)}
          {notifications.length === 0 && !loading && (
            <p className="font-light text-center"> Deocamdată nu ai notificări... </p>
          )}
          {error && (
            <div className="font-light text-center">
              <p className="mb-4">
                Nu am putut încărca notificările...😔
              </p>
              <p>
                Încearcă să refresh-uiești pagina
              </p>
            </div>
          )}
          <div className="invisible" ref={hiddenRef} />
        </div>
      )}
    </div>
  );
};

function mapStateToProps(state: RootState) {
  return {
    user: state.user,
  };
}

const connector = connect(mapStateToProps);

export default connector(NotificationsTooltip);
