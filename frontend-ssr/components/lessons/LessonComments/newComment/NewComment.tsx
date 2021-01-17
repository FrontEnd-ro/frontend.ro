import React from 'react';
import { Comment } from '~/redux/lesson-comments/types';
import { uuid } from '~/services/Utils';

import styles from './NewComment.module.scss';

interface Props {
  onComment: (_id, comment: Comment) => Promise<void>;
}

const NewComment = ({ onComment } : Props) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const newComment = {
      _id: uuid(),
      username: 'Raluca99',
      name: 'Raluca',
      avatar: 'https://joeschmoe.io/api/v1/jane',
      comment: e.target.comment.value,
      timestamp: Date.now(),
    };

    onComment(newComment._id, newComment);

    form.reset();
  };

  return (
    <div className={styles['new-comment']}>
      <form onSubmit={handleSubmit}>
        <div>
          <textarea
            name="comment"
            id="comment"
            placeholder="message"
          />
        </div>
        <button type="submit" className="btn btn--blue">Adauga un nou comentariu</button>
      </form>
    </div>
  );
};

export default NewComment;
