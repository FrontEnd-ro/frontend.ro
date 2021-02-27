import React, { PropsWithChildren, useRef, useState } from 'react';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { LessonMenu } from '~/components/lessons';
import { Chapter } from '~/components/TableOfContents';

import styles from './Lesson.module.scss';
import { withClientMonitoring, withSmoothScroll } from '~/services/Hooks';
import { GITHUB_URL } from '~/services/Constants';
import LessonHeading from './LessonHeading/LessonHeading';
import LessonExercises from './LessonExercises/LessonExercises';

interface Props {
  title: string;
  chapters: Chapter[];
  withExercises?: boolean;
}

export default function Lesson({
  children,
  title,
  chapters,
  withExercises = true,
} : PropsWithChildren<Props>) {
  const articleWrapper = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  withSmoothScroll(articleWrapper);
  withClientMonitoring();

  return (
    <div className={styles.lesson}>
      <LessonMenu
        isOpen={isMenuOpen}
        close={() => setIsMenuOpen(false)}
        title={title}
        chapters={chapters}
      />
      <main>
        <Header href="/lectii" onMenuClick={() => setIsMenuOpen(true)} />
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
          {withExercises && <LessonExercises /> }
          <Footer />
        </div>
      </main>
    </div>
  );
}
