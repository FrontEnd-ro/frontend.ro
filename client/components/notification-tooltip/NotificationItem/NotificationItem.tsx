import React, { PropsWithChildren } from 'react';
import { noop } from '~/services/Utils';
import styles from './NotificationItem.module.scss';

type Props = {
  isRead: boolean;
  onClick?: () => void;
  theme?: 'default' | 'black';
}

const NotificationItem = ({
  isRead,
  children,
  theme = 'default',
  onClick = noop
}: PropsWithChildren<Props>) => (
  <li
    className={`
    ${styles.notification}
    ${styles[`theme-${theme}`]}
    ${!isRead ? styles['is--unread'] : ''} text-xs
  `}
    onClick={onClick}
  >
    {children}
  </li>
);

export default NotificationItem;
