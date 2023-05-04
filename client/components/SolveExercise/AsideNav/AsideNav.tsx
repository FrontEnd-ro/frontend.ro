import React from 'react';
import { useRouter } from 'next/router';
import ProgressLink from '~/components/ProgressLink';
import {
  API_SubmissionI,
  FeedbackType,
  SubmissionStatus,
  SubmissionVersionI,
} from '~/../shared/types/submission.types';
import Link from '~/components/generic/Link';
import ExerciseVersionHistory from '../../ExerciseVersionHistory';

import styles from './AsideNav.module.scss';

interface Props {
  submissions: Pick<API_SubmissionI, 'status' | 'exercise' | 'feedbacks'>[];
  versions: SubmissionVersionI[];
  currentExerciseId?: string;
  lessonHref?: string;
}

const AsideNav = ({
  currentExerciseId, submissions, versions, lessonHref,
}: Props) => {
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

          let htmlTitle;
          if (variant === 'error') {
            htmlTitle = 'Exercițiul are feedback de rezolvat';
          } else if (variant === 'waiting') {
            htmlTitle = 'În curs de verificare';
          } else if (submission.status === SubmissionStatus.DONE) {
            htmlTitle = 'Execițiu rezolvat cu succes';
          }

          return (
            <div key={submission.exercise._id}>
              <ProgressLink
                className="mb-8"
                variant={variant}
                htmlTitle={htmlTitle}
                title={`Exercițiu #${index + 1}`}
                href={`/rezolva/${submission.exercise._id}`}
                active={submission.exercise._id === currentExerciseId}
                completePercentage={submission.status === SubmissionStatus.DONE ? 100 : 0}
              />
            </div>
          );
        })}
      </nav>
      <div>
        {lessonHref !== undefined && (
          <Link prefetch={false} href={lessonHref} variant="duo-tone" color="white" className="d-block mt-4 mb-8">
            Înpoi la lecție
          </Link>
        )}
        <ExerciseVersionHistory hrefBuilder={versionHrefBuilder} versions={versions} />
      </div>
    </div>
  );
};

export default AsideNav;
