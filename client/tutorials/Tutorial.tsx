import { useEffect, useState } from 'react';
import { withSmoothScroll } from '~/services/Hooks';
import { getLessonById } from '~/services/DataModel';
import PageContainer from '~/components/PageContainer';
import { Chapter, parseChapters } from '~/components/TableOfContents';
import TutorialService from '~/services/api/Tutorial.service';
import TutorialChapterLink from '~/components/TutorialChapterLink';
import { TutorialProgressI } from '~/../shared/types/tutorial.types';
import LessonContent from '~/components/lessons/LessonContent/LessonContent';
import LessonExercises from '~/components/lessons/LessonExercises/LessonExercises';
import PageWithAsideMenu from '~/components/layout/PageWithAsideMenu/PageWithAsideMenu';

import styles from './Tutorial.module.scss';

interface Props {
  tutorialId: string;
  lessonId: string;
  lessonContent: JSX.Element;
}

const Tutorial = ({ tutorialId, lessonId, lessonContent }: Props) => {
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
          <nav className={styles['chapter-nav']}>
            {tutorialProgress.lessons.map((lesson) => {
              const lessonInfo = getLessonById(lesson.lessonId);
              const chaptersWithHref: Chapter[] = lessonInfo.withExercises
                ? [
                  ...parseChapters(lessonInfo.chapters ?? []),
                  { title: 'Exerciții', id: 'exercitii', href: '#exercitii' },
                ]
                : parseChapters(lessonInfo.chapters ?? []);

              return (
                <TutorialChapterLink
                  className="mb-4"
                  key={lesson.lessonId}
                  // FIXME: temp path until we move this to
                  // a first-class page.
                  href={`/${tutorialId}/tutorial/${lesson.lessonId}`}
                  showChapters={lesson.lessonId === lessonId}
                  title={lessonInfo.title}
                  chapters={chaptersWithHref}
                  // We'll render Lessons and Exercises separately
                  completePercentage={0}
                  active={lesson.lessonId === lessonId}
                />
              );
            })}
          </nav>
        ),
    }}
    >
      <PageContainer>
        <LessonContent
          title={lessonInfo.title}
          contributors={lessonInfo.contributors ?? []}
        >
          {lessonContent}
        </LessonContent>
        <LessonExercises lessonId={lessonId} />
      </PageContainer>
    </PageWithAsideMenu>
  );
};

export default Tutorial;
