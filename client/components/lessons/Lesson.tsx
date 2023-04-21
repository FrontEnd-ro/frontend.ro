import React, {
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from 'react';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { LessonMenu, LessonResources } from '~/components/lessons';

import styles from './Lesson.module.scss';
import { MDXService } from '~/services/MDXService';
import { withSmoothScroll } from '~/services/Hooks';
import { GITHUB_URL } from '~/services/Constants';
import LessonExercises from './LessonExercises/LessonExercises';
import { Chapter, parseChapters } from '../TableOfContents';
import LessonService from '~/services/api/Lesson.service';
import LessonContent from './LessonContent/LessonContent';
import LessonHeading from './LessonHeading/LessonHeading';
import { getLessonById, LessonDescription } from '~/services/DataModel';
import LessonNavigation from './LessonNavigation/LessonNavigation';

export default function Lesson({
  lessonInfo,
  children,
  mdxContent = '',
}: PropsWithChildren<{ lessonInfo: LessonDescription; mdxContent?: string; }>) {
  const articleWrapper = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lesson = getLessonById(lessonInfo.id);

  withSmoothScroll(articleWrapper);

  const scrollTop = () => {
    articleWrapper.current.scrollTo(0, 0);
  };

  const { Content, CONFIG } = MDXService.getComponent(mdxContent);
  const chaptersWithHref: Chapter[] = lessonInfo.withExercises
    ? [
      ...parseChapters(CONFIG.chapters ?? []),
      { title: 'Exerciții', id: 'exercitii', href: '#exercitii' },
    ]
    : parseChapters(CONFIG.chapters ?? []);

  useEffect(() => {
    LessonService
      .increaseViews(lessonInfo.id)
      .catch((err) => {
        console.error('[Lesson.tsx] got while trying to update view count', err);
      });
  }, []);

  return (
    <div className={styles.lesson}>
      <LessonMenu
        url={lesson.url}
        isOpen={isMenuOpen}
        close={() => setIsMenuOpen(false)}
        onScrollTop={scrollTop}
        title={lessonInfo.title}
        className={styles['lesson-menu']}
        chapters={chaptersWithHref}
      />
      <main>
        <Header href="/lectii" onMenuClick={() => setIsMenuOpen(true)} withNavMenu />
        <div ref={articleWrapper} className={styles['article-wrapper']}>
          <LessonContent title={lessonInfo.title} contributors={lessonInfo.contributors ?? []} mdxContent={mdxContent}>
            <Content />
            {children}
            {lessonInfo.resources !== undefined && (
              <LessonResources className="my-5" links={lessonInfo.resources} />
            )}
          </LessonContent>
          <div className="my-5 text-right mr-2">
            <p>
              Ai vreo sugestie de îmbunătățire a acestei lecții?
              {' '}
              <a href={`${GITHUB_URL}/tree/master/client/curriculum`} target="_blank" rel="noreferrer">
                Contribuie pe GitHub
              </a>
            </p>
          </div>
          {lessonInfo.withExercises === true && (
            <div className={styles.exercises}>
              <LessonHeading as="h3" id="exercitii">
                Exerciții
              </LessonHeading>
              <LessonExercises lessonId={lessonInfo.id} />
            </div>
          )}
          <LessonNavigation className="mt-16" lessonId={lessonInfo.id} />
        </div>
      </main>
    </div>
  );
}
