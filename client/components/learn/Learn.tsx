import React from 'react';
import LessonPreview from './LessonPreview/LessonPreview';
import WriteLessonLink from './WriteLessonLink/WriteLessonLink';
import CoverIllustration from './CoverIllustration/CoverIllustration';
import { getLessons } from '~/curriculum/Curriculum';
import List from '../List';
import { useTranslation } from '~/services/typesafeNextTranslate';

import styles from './Learn.module.scss';

function Learn() {
  const { lang } = useTranslation('common');
  const localeLessons = getLessons(lang);
  const sections = [{
    title: 'Intro',
    cover: '/images/learn/researching.svg',
    lessons: localeLessons.filter((lesson) => lesson.type === 'intro'),
  }, {
    title: 'HTML',
    cover: '/images/learn/coding.svg',
    lessons: localeLessons.filter((lesson) => lesson.type === 'html'),
  }, {
    title: 'CSS',
    cover: '/images/learn/creativity.svg',
    lessons: localeLessons.filter((lesson) => lesson.type === 'css'),
  }, {
    title: 'JavaScript',
    cover: '/images/learn/pair-programming.svg',
    lessons: localeLessons.filter((lesson) => lesson.type === 'javascript'),
  }, {
    title: 'Extra',
    cover: '/images/learn/collecting.svg',
    lessons: localeLessons.filter((lesson) => lesson.type === 'extra'),
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
