import React from 'react';
import { getLessonById } from '~/services/DataModel';
import ProgressLink from '~/components/ProgressLink';
import { TutorialProgressI } from '~/../shared/types/tutorial.types';

import styles from './TutorialNav.module.scss';

interface TutorialNavProps {
  tutorialId: string;
  tutorialProgress: TutorialProgressI;
}
const TutorialNav = ({
  tutorialId,
  tutorialProgress,
}: TutorialNavProps) => {
  const lessonInfos = tutorialProgress.lessons
    .map((lesson) => getLessonById(lesson.lessonId));

  return (
    <nav className={styles['chapter-nav']}>
      {tutorialProgress.lessons.map((lesson, index) => {
        let completePercentage = 0;
        if (lesson.progress.total > 0) {
          completePercentage = (lesson.progress.done / lesson.progress.total) * 100;
        }

        return (
          <div key={lesson.lessonId}>
            <ProgressLink
              className={`
                mb-8
                ${styles.ProgressLink}
                ${lesson.locked ? styles['ProgressLink--locked'] : ''}
              `}
              title={lessonInfos[index].title}
              completePercentage={completePercentage}
              // FIXME: temp path until we move this to a first-class page.
              href={`/${tutorialId}/tutorial/${lesson.lessonId}`}
            />
          </div>
        );
      })}
    </nav>
  );
};

export default TutorialNav;
