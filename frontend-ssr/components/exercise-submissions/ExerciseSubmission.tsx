import React from 'react';
import { Submission, SubmissionType } from '../../redux/exercise-submissions/types';
import { timeAgo } from '../../services/Utils';

import styles from './ExerciseSubmission.module.scss';

interface Props {
    submission: Submission,
}
function ExSubmission({ submission } : Props) {
  return (
    <div
      key={submission.id}
      className={`${styles.card} rounded-md capitalize`}
    >
      <div className={`${styles['card-top']} d-flex align-items-center justify-content-between`}>
        <div className={`${styles['card-info']} d-flex align-items-center justify-content-between text-bold`}>
          <a
            className={`${styles['card-link']}`}
            href="#"
          >
            <img
              width="50"
              height="50"
              alt={`${submission.username} avatar`}
              src={submission.avatarSrc}
            />
            <span>
              {submission.username}
            </span>
          </a>
          <span className={`${styles['card-el']} ${styles['card-chapter']} text-bold text-white rounded-md bg-grey uppercase text-center text-xs`}>
            {submission.chapter}
          </span>
        </div>
        {
        submission.type === 'assigned'
          ? (
            <span
              className={`${styles['card-el']} ${styles['card-status-assigned']} text-bold rounded-md bg-grey text-center normal-case text-xs`}
            >
              {SubmissionType.ASSIGNED}
            </span>
          )
          : (
            <select
              name="submissionType"
              id="submissionType"
              className={`${styles['card-el']} ${styles['card-status-pending']} text-bold rounded-md bg-grey text-center text-xs`}
            >
              <option value="pending">{SubmissionType.PENDING}</option>
              <option value="assignTo">assign-to-you</option>
            </select>
          )
        }

      </div>
      <time className="text-xs">{timeAgo(new Date(submission.time))}</time>
    </div>
  );
}

export default ExSubmission;
