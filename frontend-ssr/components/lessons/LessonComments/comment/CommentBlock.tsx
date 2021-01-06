import React from 'react';
import Link from 'next/link';
import { timeAgo } from '~/services/Utils';

import styles from './CommentBlock.module.scss';

interface Props {
  avatar: string;
  username: string;
  comment: string;
  timestamp: number;
}

const CommentBlock = ({
  avatar,
  username,
  comment,
  timestamp,
}: Props) => (
  <li className={styles.comment}>
    <div className="d-flex">
      <Link href="#">
        <a href="#" className="d-flex no-underline">
          <img
            width="42"
            height="42"
            src={avatar}
            alt={`${username} avatar`}
          />
          <span className={styles.user}>{username}</span>
        </a>
      </Link>
    </div>
    <div className="body">
      <div className="m-0">
        <p>{comment}</p>
      </div>
      <time className="text-silver">{timeAgo(new Date(timestamp))}</time>
    </div>
  </li>
);

export default CommentBlock;
