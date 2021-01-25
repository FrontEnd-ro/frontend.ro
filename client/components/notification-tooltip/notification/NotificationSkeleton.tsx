import React from 'react';
import styles from './Notification.module.scss';

const NotificationSkeleton = () => (
  <li className={styles.skeleton}>
    <div className={`${styles.skeleton__image} d-block bg-grey overflow-hidden`} />
  </li>
);

export default NotificationSkeleton;
