import React from 'react';
import styles from './ExerciseSubmission.module.scss';

export default function SubmissionSkeleton() {
  return (
    <div className={`${styles.card} ${styles.skeleton} text-white rounded-md bg-grey`}>
      <div className={`${styles['card-top']} d-flex align-items-center justify-content-between`}>
        <div className={`${styles['card-info']} d-flex align-items-center justify-content-between`}>
          <div
            className={`${styles['card-link']} d-flex align-items-center justify-content-between`}
          >
            <div className="bg-white" />
            <span className="bg-white rounded-md" />
          </div>
          <span className={`${styles['card-el']} ${styles['card-chapter']} rounded-md bg-white text-xs`} />
        </div>
        <span className={`${styles['card-el']} ${styles['card-status-assigned']} rounded-md bg-white text-xs`} />
      </div>
      <time className="rounded-md bg-white text-xs" />
    </div>
  );
}
