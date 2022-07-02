import React from 'react';
import Link from '~/components/generic/Link';

import styles from './ExercisePreview.module.scss';

function ExercisePreviewSkeleton() {
  return (
    <div className={`${styles['exercise-preview']} ${styles['is--skeleton']}`}>
      <header />
      <div className={styles.body}>
        <div />
        <div />
        <div />
        <br />
        <div />
        <div />
      </div>
      <footer className="text-right">
        <Link href="#" variant="contained">
          {' '}
        </Link>
      </footer>
    </div>
  );
}

export default ExercisePreviewSkeleton;