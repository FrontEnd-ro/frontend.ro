import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { PropsWithChildren } from 'react';
import { getAdjacentLessons } from '~/services/DataModel';
import styles from './LessonNavigation.module.scss';

export default function LessonNavigation(
  { lessonId, className }: PropsWithChildren<{ lessonId: string, className?: string }>,
) {
  const adjacentLessons = getAdjacentLessons(lessonId);

  if (adjacentLessons.length === 0) return null;

  const [previousLesson, nextLesson] = adjacentLessons;

  return (
    <nav className={`${className} ${styles.lessonNavigation} d-flex flex-column`}>
      {previousLesson && (
        <a href={previousLesson.url} className="flex-1 no-underline">
          <article>
            <div className="inline-flex align-items-center">
              <FontAwesomeIcon icon={faChevronLeft} height="14" />
              <span className="ml-1">Lecția precedentă</span>
            </div>
            <h2>{previousLesson.title}</h2>
            <p>{previousLesson.description}</p>
          </article>
        </a>
      )}
      {nextLesson && (
        <a href={nextLesson.url} className="flex-1 no-underline">
          <article>
            <div className="inline-flex align-items-center">
              <span className="mr-1">Lecția următoare</span>
              <FontAwesomeIcon icon={faChevronRight} height="14" />
            </div>
            <h2>{nextLesson.title}</h2>
            <p>{nextLesson.description}</p>
          </article>
        </a>
      )}
    </nav>
  );
}
