import React, { PropsWithChildren, useState } from 'react';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { LessonMenu } from '~/components/lessons';
import { Chapters } from '~/components/TableOfContents';

import styles from './Lesson.module.scss';

export default function Lesson({ children, chapters } : PropsWithChildren<{
  chapters: Chapters[]
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.lesson}>
      <LessonMenu
        isOpen={isMenuOpen}
        close={() => setIsMenuOpen(false)}
        chapters={chapters}
      />
      <main>
        <Header onMenuClick={() => setIsMenuOpen(true)} />
        <article>
          {children}
        </article>
        <Footer />
      </main>
    </div>
  );
}
