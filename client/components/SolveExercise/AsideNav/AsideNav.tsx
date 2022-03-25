import React from 'react';
import { useRouter } from 'next/router';
import ProgressLink from '~/components/ProgressLink';
import {
  FeedbackType,
  SubmissionStatus,
  SubmissionVersionI,
  WIPSanitiedSubmission,
} from '~/../shared/types/submission.types';
import ExerciseVersionHistory from '../../ExerciseVersionHistory';

import styles from './AsideNav.module.scss';

interface Props {
  submissions: Pick<WIPSanitiedSubmission, 'status' | 'exercise' | 'feedbacks'>[];
  versions: SubmissionVersionI[];
  currentExerciseId?: string;
}

const AsideNav = ({ currentExerciseId, submissions, versions }: Props) => {
  const router = useRouter();
  const versionHrefBuilder = (v: SubmissionVersionI) => ({
    query: {
      ...router.query,
      version: v._id,
    },
  });

  return (
    <div className="d-flex flex-column justify-content-between flex-1">
      <nav className={styles['chapter-nav']}>
        {submissions.map((submission, index) => {
          let variant: 'default' | 'waiting' | 'error' = 'default';
          if (submission.status === SubmissionStatus.AWAITING_REVIEW) {
            variant = 'waiting';
          } else if (
            submission.status === SubmissionStatus.IN_PROGRESS && submission.feedbacks
              .filter((f) => f.type === FeedbackType.IMPROVEMENT).length > 0
          ) {
            variant = 'error';
          }

          return (
            <div key={submission.exercise._id}>
              <ProgressLink
                className="mb-8"
                variant={variant}
                title={`Exercițiu #${index + 1}`}
                href={`/rezolva/${submission.exercise._id}`}
                active={submission.exercise._id === currentExerciseId}
                completePercentage={submission.status === SubmissionStatus.DONE ? 100 : 0}
              />
            </div>
          );
        })}
      </nav>
      <ExerciseVersionHistory hrefBuilder={versionHrefBuilder} versions={versions} />
    </div>
  );
};

export default AsideNav;
