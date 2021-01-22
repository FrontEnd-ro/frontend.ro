import React, { PropsWithChildren, useState } from 'react';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  withSmoothScroll();
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
            <a href={`${GITHUB_URL}/tree/master/frontend-ssr/curriculum`} target="_blank" rel="noreferrer">
              Contribuie pe GitHub
            </a>
          </p>
        </div>
        {withExercises && <LessonExercises /> }
        <Footer />
      </main>
    </div>
  );
}
