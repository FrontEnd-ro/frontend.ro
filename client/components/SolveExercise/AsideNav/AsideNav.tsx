import React from 'react';
import { useRouter } from 'next/router';
import { LessonExercise } from '~/redux/user/types';
import TableOfContents from '~/components/TableOfContents';
import ExerciseVersionHistory from '../../ExerciseVersionHistory';
import { SubmissionVersionI } from '~/../shared/types/submission.types';

import styles from './AsideNav.module.scss';

interface Props {
  lessonExercises: LessonExercise[];
  versions: SubmissionVersionI[];
}

const AsideNav = ({ lessonExercises, versions }: Props) => {
  const router = useRouter();
  const versionHrefBuilder = (v: SubmissionVersionI) => ({
    query: {
      ...router.query,
      version: v._id,
    },
  });

  return (
    <div className="d-flex flex-column justify-content-between flex-1">
      <TableOfContents
        className={styles.TableOfContents}
        chapters={lessonExercises.map((lessonEx, index) => ({
          id: lessonEx._id,
          title: `Exercițiu #${index + 1}`,
          href: `/rezolva/${lessonEx._id}`,
        }))}
      />
      <ExerciseVersionHistory hrefBuilder={versionHrefBuilder} versions={versions} />
    </div>
  );
};

export default AsideNav;
