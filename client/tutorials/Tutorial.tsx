import React, { PropsWithChildren, useEffect, useState } from 'react';
import { withSmoothScroll } from '~/services/Hooks';
import { getLessonById } from '~/services/DataModel';
import PageContainer from '~/components/PageContainer';
import { parseChapters } from '~/components/TableOfContents';
import TutorialService from '~/services/api/Tutorial.service';
import TutorialChapterLink from '~/components/TutorialChapterLink';
import { TutorialProgressI } from '~/../shared/types/tutorial.types';
import PageWithAsideMenu from '~/components/layout/PageWithAsideMenu/PageWithAsideMenu';

import styles from './Tutorial.module.scss';

interface Props {
  tutorialId: string;
  lessonId: string;
  // We have different sub-pages for the
  // lesson and the exercises.
  isExercisesPage?: boolean;
}

const Tutorial = ({
  tutorialId, lessonId, children, isExercisesPage = false,
}: PropsWithChildren<Props>) => {
  const [tutorialProgress, setTutorialProgress] = useState<TutorialProgressI>(undefined);
  const lessonInfo = getLessonById(lessonId);

  withSmoothScroll();

  useEffect(() => {
    TutorialService
      .getProgress(tutorialId)
      .then((progress) => {
        setTutorialProgress(progress);
        console.log(progress);
      });
  }, [tutorialId]);

  return (
    <PageWithAsideMenu menu={{
      // FIXME: should come from server
      title: `Modulul de ${tutorialId.toUpperCase()}`,
      Component: tutorialProgress === undefined
        ? null
        : (
          <TutorialNav
            lessonId={lessonId}
            tutorialId={tutorialId}
            isExercisesPage={isExercisesPage}
            tutorialProgress={tutorialProgress}
          />
        ),
    }}
    >
      <PageContainer>
        {children}
      </PageContainer>
    </PageWithAsideMenu>
  );
};

interface TutorialNavProps {
  lessonId: string;
  tutorialId: string;
  isExercisesPage: boolean;
  tutorialProgress: TutorialProgressI;
}
const TutorialNav = ({
  lessonId, tutorialId, isExercisesPage, tutorialProgress,
}: TutorialNavProps) => {
  const lessonInfos = tutorialProgress.lessons
    .map((lesson) => getLessonById(lesson.lessonId));
  const lessonChapters = tutorialProgress.lessons
    .map((_, index) => parseChapters(lessonInfos[index].chapters ?? []));

  return (
    <nav className={styles['chapter-nav']}>
      {tutorialProgress.lessons.map((lesson, index) => {
        let completePercentage = 0;
        if (lesson.progress.total > 0) {
          completePercentage = (lesson.progress.done / lesson.progress.total) * 100;
        }

        const isLessonRouteActive = lesson.lessonId === lessonId && !isExercisesPage;
        const isExercisesRouteActive = lesson.lessonId === lessonId && isExercisesPage;

        return (
          <div
            key={lesson.lessonId}
            // We have a specific way we render lesson + exercises pairs,
            // that's why we give this wrapper the 'chapter-link-pair' className.
            className={lessonInfos[index].withExercises ? styles['chapter-link-pair'] : ''}
          >
            <TutorialChapterLink
              className={`
                ${styles.TutorialChapterLink}
                ${lesson.locked ? styles['TutorialChapterLink--locked'] : ''}
                ${isLessonRouteActive ? styles['TutorialChapterLink--active'] : ''}
                ${lessonInfos[index].withExercises ? '' : 'mb-12'}
              `}
              // FIXME: temp path until we move this to
              // a first-class page.
              href={`/${tutorialId}/tutorial/${lesson.lessonId}`}
              showChapters={isLessonRouteActive}
              title={lessonInfos[index].title}
              chapters={lessonChapters[index]}
              // We'll render Lessons and Exercises separately
              completePercentage={0}
              active={isLessonRouteActive}
            />
            {lessonInfos[index].withExercises && (
              <TutorialChapterLink
                className={`
                ${styles.TutorialChapterLink}
                ${lesson.locked ? styles['TutorialChapterLink--locked'] : ''}
                ${isExercisesRouteActive ? styles['TutorialChapterLink--active'] : ''}
                mb-12
              `}
                // FIXME: temp path until we move this to
                // a first-class page.
                href={`/${tutorialId}/tutorial/exercitii/${lesson.lessonId}`}
                title={`Exerciții ${lessonInfos[index].title}`}
                completePercentage={completePercentage}
                showProgress={!lesson.locked}
                active={isExercisesRouteActive}
                ribbonPosition="bottom-right"
              />
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Tutorial;
