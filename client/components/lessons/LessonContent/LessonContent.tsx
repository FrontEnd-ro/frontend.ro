import React, { PropsWithChildren } from 'react';

import styles from './LessonContent.module.scss';

const LessonContent = ({ title, children }: PropsWithChildren<{title: string}>) => {
  return (
    <article className={styles.LessonContent}>
      <h1>
        {title}
      </h1>
      {children}
    </article>
  );
};

export default LessonContent;
