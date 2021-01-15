import React, { PropsWithChildren, useState } from 'react';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { LessonMenu } from '~/components/lessons';
import { Chapters } from '~/components/TableOfContents';

import styles from './Lesson.module.scss';
import { withClientMonitoring } from '~/services/Hooks';
import { GITHUB_URL } from '~/services/Constants';
import LessonHeading from './LessonHeading/LessonHeading';

interface Props {
  title: string;
  chapters: Chapters[];
  withExercises?: boolean;
}

export default function Lesson({
  children,
  title,
  chapters,
  withExercises = true,
} : PropsWithChildren<Props>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <Header href="/learn" onMenuClick={() => setIsMenuOpen(true)} />
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
        {withExercises && (
        <section className={styles.exercises}>
          <LessonHeading as="h3" id="exercises">
            Exerciții
          </LessonHeading>
          <p className="text-bold text-center"> În curând!</p>
          <br />
        </section>
        )}
        <Footer />
      </main>
    </div>
  );
}
