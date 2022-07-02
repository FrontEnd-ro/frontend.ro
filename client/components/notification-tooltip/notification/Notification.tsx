import React from 'react';
import { format } from 'date-fns';
import Link from '~/components/generic/Link';
import { timeAgo } from '../../../services/Utils';
import { ParsedNotificationI } from '~/../shared/types/notification.types';

import styles from './Notification.module.scss';

interface Props {
  notification: ParsedNotificationI,
  onMarkAsRead: (_id: string) => void
  theme?: 'default' | 'black';
}

const Notification = ({
  notification,
  onMarkAsRead,
  theme = 'default',
}: Props) => (
  <li
    className={`
      ${styles.notification}
      ${styles[`theme-${theme}`]}
      ${!notification.read ? styles['is--unread'] : ''} text-xs
    `}
    onClick={() => onMarkAsRead(notification._id)}
  >
    <Link className="d-flex no-underline" href={notification.href ?? '#'}>
      <img
        width="32"
        height="32"
        alt={notification.from ? `${notification.from.username} avatar` : 'FrontEnd.ro'}
        src={notification.from ? notification.from.avatar : `${process.env.CLOUDFRONT_PUBLIC}/public/logo-square--S.jpg`}
      />
      <div className="body">
        <p className="m-0">
          {notification.from !== undefined && (
            <span className={styles.user}>
              {notification.from?.name ?? notification.from?.username ?? ''}
            </span>
          )}
          {notification.short_message}
        </p>
        <time
          className="text-silver"
          dateTime={format(notification.timestamp, 'yyyy-MM-dd')}
        >
          {timeAgo(new Date(notification.timestamp))}
        </time>
      </div>
    </Link>
  </li>
);

export default Notification;
