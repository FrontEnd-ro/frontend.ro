import React, { PropsWithChildren, useEffect, useRef } from 'react';
import { useResizeObserver } from '~/services/Hooks';
import styles from './LessonCover.module.scss';

export default function LessonCover(
  {
    resizeOffset,
    children,
  }: PropsWithChildren<{ resizeOffset?: number }>,
) {
  const coverRef = useRef(null);

  const onResize = (rect: DOMRectReadOnly) => {
    const viewBox = coverRef.current.querySelector('svg').getAttribute('viewBox').split(' ');

    if (rect.width < 400) {
      coverRef.current.querySelector('svg').setAttribute('viewBox', [resizeOffset, viewBox.slice(1)].join(' '));
    } else {
      coverRef.current.querySelector('svg').setAttribute('viewBox', [0, viewBox.slice(1)].join(' '));
    }
  };

  useResizeObserver(coverRef.current, onResize);

  return (
    <figure ref={coverRef} className={styles['lesson-cover']}>
      <div>
        {children}
      </div>
    </figure>

  );
}
