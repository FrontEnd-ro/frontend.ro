import Link from 'next/link';
import React from 'react';
import { LessonContributors } from '~/components/lessons';
import { LessonDescription } from '~/services/Constants';

import styles from './LessonPreview.module.scss';

function LessonPreview({
  title,
  written,
  url,
  cover,
  description,
  contributors,
}: LessonDescription) {
  return (
    <Link href={url}>
      <a className={`${styles['lesson-preview']} ${written ? styles.written : ''} text-silver no-underline d-inline-block relative`}>
        <div
          className={`${styles.cover} text-black d-flex align-items-center justify-content-center`}
          style={{
            backgroundImage: `url(${cover})`,
            marginTop: written ? '0.25em' : 0,
          }}
        >
          {!written && <p className="m-0 text-center">În curând</p>}
        </div>
        <div className={styles.container}>
          <h3>
            {title}
          </h3>
          <p>
            {description}
          </p>
          {contributors && <LessonContributors variant="no-link" contributors={contributors} />}
        </div>
      </a>

    </Link>
  );
}

export default LessonPreview;
