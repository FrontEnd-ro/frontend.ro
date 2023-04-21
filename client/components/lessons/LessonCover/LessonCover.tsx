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
    const svg: SVGElement | null = coverRef.current.querySelector('svg');
    if (svg === null) {
      return;
    }

    const viewBox = svg.getAttribute('viewBox').split(' ');

    if (rect.width < 400) {
      svg.setAttribute('viewBox', [resizeOffset, viewBox.slice(1)].join(' '));
    } else {
      svg.setAttribute('viewBox', [0, viewBox.slice(1)].join(' '));
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
