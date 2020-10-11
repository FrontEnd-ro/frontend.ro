import React, { PropsWithChildren, useState } from 'react';
import LessonMenu from './lesson-menu/LessonMenu';
import { Chapters } from '../tableOfContents/TableOfContents';
import Header from '~/components/header/Header.component';
import Footer from '~/components/footer/Footer.component';

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
