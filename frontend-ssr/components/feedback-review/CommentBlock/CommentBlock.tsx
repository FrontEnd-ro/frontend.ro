import React from 'react';
import Link from 'next/link';
import { faThumbsUp, faThumbsDown, faComments } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './CommentBlock.module.scss';
import { Comment } from '../entities';

export default function CommentBlock(props: Comment) {
  const { user, comment } = props;
  return (
    <div className={styles.comment}>
      <header>
        <h4>
          <Link href="/bob" prefetch={false}>
            <a className="hover:underline">
              <strong>{user}</strong>
            </a>
          </Link>
          <span> a lasat urmatorul comentariu</span>
        </h4>
        <button type="button" className="btn--transparent">
          <FontAwesomeIcon icon={faThumbsUp} />
        </button>
        <button type="button" className="btn--transparent">
          <FontAwesomeIcon icon={faThumbsDown} />
        </button>
        <button type="button" className="btn--transparent">
          <FontAwesomeIcon icon={faComments} />
        </button>
      </header>
      <p>
        {comment}
      </p>
    </div>
  );
}
