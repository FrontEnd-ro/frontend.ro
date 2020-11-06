import React, { PropsWithChildren, useState } from 'react';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { LessonMenu } from '~/components/lessons';
import { Chapters } from '~/components/TableOfContents';

import styles from './Lesson.module.scss';

export default function Lesson({ children, title, chapters } : PropsWithChildren<{
  title: string
  chapters: Chapters[]
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.lesson}>
      <LessonMenu
        isOpen={isMenuOpen}
        close={() => setIsMenuOpen(false)}
        title={title}
        chapters={chapters}
      />
      <main>
        <Header onMenuClick={() => setIsMenuOpen(true)} />
        <article>
          <h1>
            {title}
          </h1>
          {children}
        </article>
        <Footer />
      </main>
    </div>
  );
}
