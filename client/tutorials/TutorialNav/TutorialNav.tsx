import noop from 'lodash/noop';
import ConfettiGenerator from 'confetti-js';
import React, { useEffect, useRef } from 'react';
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
      <CertificationLink tutorialId={tutorialId} tutorialProgress={tutorialProgress} />
    </nav>
  );
};

const CertificationLink = ({
  tutorialId,
  tutorialProgress,
}: { tutorialId: string; tutorialProgress: TutorialProgressI }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDone = tutorialProgress.certification !== null;

  useEffect(() => {
    if (!isDone) {
      return noop;
    }

    const confetti = new ConfettiGenerator({
      target: canvasRef.current,
      width: 300,
      height: 70,
      clock: 15,
    });
    confetti.render();

    return () => confetti.clear();
  }, [isDone]);

  return (
    <div className={`${styles.CertificationLink} relative`}>
      <ProgressLink
        className={`
          mb-8
          ${styles.ProgressLink}
          ${tutorialProgress.certification === null ? styles['ProgressLink--locked'] : ''}
        `}
        title="Certificare"
        completePercentage={isDone ? 100 : 0}
        // FIXME: temp path until we move this to a first-class page.
        href={`/${tutorialId}/tutorial/certification`}
      />
      <canvas className="pin-full" ref={canvasRef} />
    </div>
  );
};

export default TutorialNav;
