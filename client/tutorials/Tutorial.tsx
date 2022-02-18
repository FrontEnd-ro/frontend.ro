import React, { useEffect, useState } from 'react';
import { withSmoothScroll } from '~/services/Hooks';
import { getLessonById } from '~/services/DataModel';
import PageContainer from '~/components/PageContainer';
import { parseChapters } from '~/components/TableOfContents';
import TutorialService from '~/services/api/Tutorial.service';
import TutorialChapterLink from '~/components/TutorialChapterLink';
import { TutorialProgressI } from '~/../shared/types/tutorial.types';
import LessonContent from '~/components/lessons/LessonContent/LessonContent';
import PageWithAsideMenu from '~/components/layout/PageWithAsideMenu/PageWithAsideMenu';

import styles from './Tutorial.module.scss';

interface Props {
  tutorialId: string;
  lessonId: string;
  lessonContent: JSX.Element;
  // We have different sub-pages for the
  // lesson and the exercises.
  isExercisesPage?: boolean;
}

const Tutorial = ({
  tutorialId, lessonId, lessonContent, isExercisesPage = false,
}: Props) => {
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
        <LessonContent
          title={!isExercisesPage ? lessonInfo.title : `Exerciții ${lessonInfo.title}`}
          contributors={!isExercisesPage ? lessonInfo.contributors ?? [] : []}
        >
          {lessonContent}
        </LessonContent>
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

        return (
          <React.Fragment key={lesson.lessonId}>
            <TutorialChapterLink
              className="mb-4"
              // FIXME: temp path until we move this to
              // a first-class page.
              href={`/${tutorialId}/tutorial/${lesson.lessonId}`}
              showChapters={lesson.lessonId === lessonId && !isExercisesPage}
              title={lessonInfos[index].title}
              chapters={lessonChapters[index]}
              // We'll render Lessons and Exercises separately
              completePercentage={0}
              active={lesson.lessonId === lessonId && !isExercisesPage}
            />
            {lessonInfos[index].withExercises && (
              <TutorialChapterLink
                className="mb-4"
                // FIXME: temp path until we move this to
                // a first-class page.
                href={`/${tutorialId}/tutorial/exercitii/${lesson.lessonId}`}
                showChapters={false}
                title={`Exerciții ${lessonInfos[index].title}`}
                chapters={[]}
                completePercentage={completePercentage}
                active={lesson.lessonId === lessonId && isExercisesPage}
              />
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Tutorial;
