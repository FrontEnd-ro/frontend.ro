import React from 'react';
import Link from 'next/link';

import { timeAgo } from '../../../services/Utils';
import styles from './Notification.module.scss';

interface Props {
  avatar: string;
  username: string;
  name: string;
  message: string;
  timestamp: number;
  url: string;
}

const Notification = ({
  url,
  avatar,
  username,
  name,
  message,
  timestamp,
}: Props) => (
  <Link href={url}>
    <a className="d-flex no-underline">
      <img
        width="32"
        height="32"
        src={avatar}
        alt={`${username} avatar`}
      />
      <div className={styles.body}>
        <p className={styles.message}>
          <span className={styles.user}>{name || username}</span>
          {message}
        </p>
        <time className="text-silver">{timeAgo(new Date(timestamp))}</time>
      </div>
    </a>
  </Link>
);

export default Notification;
