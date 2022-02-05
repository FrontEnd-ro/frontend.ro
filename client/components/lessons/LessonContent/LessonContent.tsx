import React, { PropsWithChildren } from 'react';
import { Contributor } from '~/services/contributors';
import { LessonContributors } from '..';

import styles from './LessonContent.module.scss';

interface Props {
  title: string;
  contributors: Contributor[];
}

const LessonContent = ({ title, contributors, children }: PropsWithChildren<Props>) => {
  return (
    <article className={styles.LessonContent}>
      <h1>
        {title}
      </h1>
      {contributors.length > 0 && (
        <LessonContributors className="absolute" contributors={contributors} />
      )}
      {children}
    </article>
  );
};

export default LessonContent;
