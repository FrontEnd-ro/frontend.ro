import React from 'react';
import Link from '~/components/generic/Link';
import { Submission, SubmissionType } from '../../../redux/exercise-submissions/types';
import { timeAgo } from '../../../services/Utils';
import { SubmissionStatus } from '~/../shared/types/submission.types';

import styles from './ExerciseSubmission.module.scss';

interface Props {
    submission: Submission,
}
function ExSubmission({ submission } : Props) {
  // This refers to the main link that navigates
  // us to the actual submission
  const mainLinkConfig = computeMainLinkConfig();
  function computeMainLinkConfig(): { label: string; color: 'black' | 'red' | 'green' } {
    switch (submission.status) {
      case SubmissionStatus.IN_PROGRESS:
        return {
          label: 'Vezi progresul',
          color: 'black',
        };
      case SubmissionStatus.AWAITING_REVIEW:
        return {
          label: 'Oferă feedback',
          color: 'red',
        };
      case SubmissionStatus.DONE:
        return {
          label: 'Vezi rezolvarea',
          color: 'green',
        };
      default:
        console.error(`[ExSubmission] Unrecognized submission status. Got: ${submission.status}`);

        // Since this is an Admin only panel so far,
        // let's default to an empty text so that it's obvious
        // something went wrong and we can identify/fix it.
        return {
          label: '',
          color: 'black',
        };
    }
  }

  return (
    <div
      className={`${styles.card} rounded-md capitalize`}
    >
      <div className={`${styles['card-top']} d-flex align-items-center justify-content-between`}>
        <div className={`${styles['card-info']} d-flex align-items-center justify-content-between text-bold`}>
          <Link prefetch={false} href={`/${submission.user.username}`} className={`${styles['card-link']}`}>
            <img
              width="50"
              height="50"
              alt={`${submission.user.username} avatar`}
              src={submission.user.avatar}
            />
            <span>
              {submission.user.username}
            </span>
          </Link>
          <span className={`${styles['card-el']} ${styles['card-chapter']} text-bold text-white rounded-md bg-grey uppercase text-center text-xs`}>
            {submission.exercise.type}
          </span>
        </div>
        <Link
          prefetch={false}
          variant="contained"
          color={mainLinkConfig.color}
          href={`/feedback/${submission.user.username}/${submission.exercise._id}`}
        >
          {mainLinkConfig.label}
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
