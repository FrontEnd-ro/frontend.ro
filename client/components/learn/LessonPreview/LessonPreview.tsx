import React from 'react';
import Link from '~/components/generic/Link';
import { LessonContributors } from '~/components/lessons';
import { LessonConfig } from '~/curriculum/Curriculum';

import styles from './LessonPreview.module.scss';

function LessonPreview({
  title,
  written,
  url,
  cover,
  description,
  contributors,
}: LessonConfig) {
  return (
    <Link
      href={url}
      prefetch={false}
      className={`
        ${styles['lesson-preview']} 
        ${written ? styles.written : ''} 
        text-silver no-underline d-inline-block relative`}
    >
      <div
        className={`${styles.cover} text-black d-flex align-items-center justify-content-center`}
        style={{
          backgroundImage: `url(${cover})`,
          marginTop: written ? '0.25em' : 0,
        }}
      >
        {!written && (
        <p className="m-0 text-center">
          {contributors
            ? (
              <span>
                <strong>{contributors[0].name}</strong>
                {' '}
                lucrează la acestă lecție. Va fi disponibilă în curând.
              </span>
            )
            : 'În curând'}
        </p>
        )}
      </div>
      <div className={`${styles.container} ${contributors ? styles['with--contributors'] : ''}`}>
        <h3>
          {title}
        </h3>
        <p>
          {description}
        </p>
        {contributors && <LessonContributors variant="no-link" contributors={contributors} />}
      </div>

    </Link>
  );
}

export default LessonPreview;
