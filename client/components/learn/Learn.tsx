import React from 'react';
import LessonPreview from './LessonPreview/LessonPreview';
import WriteLessonLink from './WriteLessonLink/WriteLessonLink';
import CoverIllustration from './CoverIllustration/CoverIllustration';
import { LESSONS } from '~/curriculum/Curriculum';
import List from '../List';

import styles from './Learn.module.scss';

function Learn() {
  const sections = [{
    title: 'Intro',
    cover: '/images/learn/researching.svg',
    lessons: LESSONS.filter((lesson) => lesson.type === 'intro'),
  }, {
    title: 'HTML',
    cover: '/images/learn/coding.svg',
    lessons: LESSONS.filter((lesson) => lesson.type === 'html'),
  }, {
    title: 'CSS',
    cover: '/images/learn/creativity.svg',
    lessons: LESSONS.filter((lesson) => lesson.type === 'css'),
  }, {
    title: 'JavaScript',
    cover: '/images/learn/pair-programming.svg',
    lessons: LESSONS.filter((lesson) => lesson.type === 'javascript'),
  }, {
    title: 'Extra',
    cover: '/images/learn/collecting.svg',
    lessons: LESSONS.filter((lesson) => lesson.type === 'extra'),
  }];

  return (
    <main className={styles.learn}>
      <h1> Învață FrontEnd </h1>

      {sections.map(({ title, cover, lessons }, index) => (
        <section key={title} className="relative">
          <h2>
            <span>{title}</span>
          </h2>
          <List as="ol" className="d-flex">
            {lessons.map((lesson) => (
              <li key={lesson.title}>
                <LessonPreview {...lesson} />
              </li>
            ))}
            <li>
              <WriteLessonLink />
            </li>
          </List>
          <CoverIllustration src={cover} position={index % 2 === 0 ? 'left' : 'right'} />
        </section>
      ))}
    </main>
  );
}

export default Learn;
