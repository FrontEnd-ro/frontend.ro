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
import { getLessonById, GITHUB_URL } from '~/services/Constants';
import LessonExercises from './LessonExercises/LessonExercises';
import { Chapter } from '../TableOfContents';
import LessonService from '~/services/api/Lesson.service';

interface Props {
  id: string;
  title: string;
  chapters: { title: string; id: string; }[];
  withExercises?: boolean;
}

export default function Lesson({
  id,
  children,
  title,
  chapters,
  withExercises = true,
}: PropsWithChildren<Props>) {
  const articleWrapper = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lesson = getLessonById(id);

  withSmoothScroll(articleWrapper);

  const scrollTop = () => {
    articleWrapper.current.scrollTo(0, 0);
  };

  const parseChapters = (chapters: { title: string; id: string }[]) => {
    return chapters.map(parseOneChapter);

    function parseOneChapter(chapter: Chapter) {
      return {
        ...chapter,
        href: `#${chapter.id}`,
        subchapters: chapter.subchapters?.map(parseOneChapter),
      };
    }
  };

  const chaptersWithHref = parseChapters(chapters);

  useEffect(() => {
    LessonService
      .increaseViews(id)
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
        title={title}
        className={styles['lesson-menu']}
        chapters={chaptersWithHref}
      />
      <main>
        <Header href="/lectii" onMenuClick={() => setIsMenuOpen(true)} withNavMenu />
        <div ref={articleWrapper} className={styles['article-wrapper']}>
          <article>
            <h1>
              {title}
            </h1>
            {children}
          </article>
          <div className="my-5 text-right mr-2">
            <p>
              Ai vreo sugestie de îmbunătățire a acestei lecții?
              {' '}
              <a href={`${GITHUB_URL}/tree/master/client/curriculum`} target="_blank" rel="noreferrer">
                Contribuie pe GitHub
              </a>
            </p>
          </div>
          {withExercises && <LessonExercises lessonId={id} />}
          <Footer />
        </div>
      </main>
    </div>
  );
}
