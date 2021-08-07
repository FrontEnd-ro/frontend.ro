import React from 'react';
import Link from 'next/link';
import { Submission, SubmissionType } from '../../../redux/exercise-submissions/types';
import { timeAgo } from '../../../services/Utils';
import { SUBMISSION_STATUS } from '~/../shared/SharedConstants';

import styles from './ExerciseSubmission.module.scss';

interface Props {
    submission: Submission,
}
function ExSubmission({ submission } : Props) {
  // This refers to the main link that navigates
  // us to the actual submission
  const mainLinkConfig = computeMainLinkConfig();
  function computeMainLinkConfig() {
    switch (submission.status) {
      case SUBMISSION_STATUS.IN_PROGRESS:
        return {
          label: 'Vezi progresul',
          className: 'btn--default',
        };
      case SUBMISSION_STATUS.AWAITING_REVIEW:
        return {
          label: 'Oferă feedback',
          className: 'btn--danger',
        };
      case SUBMISSION_STATUS.DONE:
        return {
          label: 'Vezi rezolvarea',
          className: 'btn--success',
        };
      default:
        console.error(`[ExSubmission] Unrecognized submission status. Got: ${submission.status}`);

        // Since this is an Admin only panel so far,
        // let's default to an empty text so that it's obvious
        // something went wrong and we can identify/fix it.
        return {
          label: '',
          className: 'btn--default',
        };
    }
  }

  return (
    <div
      className={`${styles.card} rounded-md capitalize`}
    >
      <div className={`${styles['card-top']} d-flex align-items-center justify-content-between`}>
        <div className={`${styles['card-info']} d-flex align-items-center justify-content-between text-bold`}>
          <Link href={`/${submission.user.username}`}>
            <a
              className={`${styles['card-link']}`}
            >
              <img
                width="50"
                height="50"
                alt={`${submission.user.username} avatar`}
                src={submission.user.avatar}
              />
              <span>
                {submission.user.username}
              </span>
            </a>
          </Link>
          <span className={`${styles['card-el']} ${styles['card-chapter']} text-bold text-white rounded-md bg-grey uppercase text-center text-xs`}>
            {submission.exercise.type}
          </span>
        </div>
        <Link href={`/feedback/${submission.user.username}/${submission.exercise._id}`}>
          <a className={`btn ${mainLinkConfig.className}`}>
            {mainLinkConfig.label}
          </a>
        </Link>
        {/* {
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
        } */}

      </div>
      <time className="d-block text-xs">{timeAgo(new Date(submission.updatedAt))}</time>
    </div>
  );
}

export default ExSubmission;
