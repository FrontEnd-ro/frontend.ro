import React, { PropsWithChildren, useEffect, useRef } from 'react';
import styles from './LessonCover.module.scss';

// TS missed `ResizeObserver` definitions: https://github.com/Microsoft/TypeScript/issues/28502
declare let ResizeObserver: any;

export default function LessonCover({ children } : PropsWithChildren<any>) {
  const coverRef = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(([entry]) => {
      if (entry.contentRect.width < 400) {
        coverRef.current.querySelector('svg').setAttribute('viewBox', '100 0 869.99994 520.13854');
      } else {
        coverRef.current.querySelector('svg').setAttribute('viewBox', '0 0 869.99994 520.13854');
      }
    });

    resizeObserver.observe(coverRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <figure ref={coverRef} className={styles['lesson-cover']}>
      <div>
        {children}
      </div>
    </figure>

  );
}
