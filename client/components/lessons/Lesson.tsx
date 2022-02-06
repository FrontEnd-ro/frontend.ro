import React, {
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from 'react';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { LessonMenu } from '~/components/lessons';

import styles from './Lesson.module.scss';
import { withSmoothScroll } from '~/services/Hooks';
import { getLessonById, GITHUB_URL, LessonDescription } from '~/services/Constants';
import LessonExercises from './LessonExercises/LessonExercises';
import { Chapter } from '../TableOfContents';
import LessonService from '~/services/api/Lesson.service';
import LessonContent from './LessonContent/LessonContent';

export default function Lesson({
  lessonInfo,
  children,
}: PropsWithChildren<{ lessonInfo: LessonDescription }>) {
  const articleWrapper = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lesson = getLessonById(lessonInfo.id);

  withSmoothScroll(articleWrapper);

  const scrollTop = () => {
    articleWrapper.current.scrollTo(0, 0);
  };

  const parseChapters = (chapters: { title: string; id: string }[], withExercises: boolean) => {
    const result = chapters.map(parseOneChapter);

    if (withExercises) {
      return [
        ...result,
        { title: 'Exerciții', id: 'exercitii', href: '#exercitii' },
      ];
    }

    return result;

    function parseOneChapter(chapter: Chapter) {
      return {
        ...chapter,
        href: `#${chapter.id}`,
        subchapters: chapter.subchapters?.map(parseOneChapter),
      };
    }
  };

  const chaptersWithHref = parseChapters(lessonInfo.chapters ?? [], lessonInfo.withExercises);

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
          <LessonContent title={lessonInfo.title} contributors={lessonInfo.contributors ?? []}>
            {children}
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
          {lessonInfo.withExercises === true && <LessonExercises lessonId={lessonInfo.id} />}
          <Footer />
        </div>
      </main>
    </div>
  );
}
