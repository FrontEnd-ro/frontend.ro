import React from 'react';
import { Figure } from '~/shared-types';

import styles from './LessonFigure.module.scss';

export default function LessonFigure(
  {
    src, alt, demo, withBorder, isVideo,
  }:
  Figure & { withBorder?: boolean},
) {
  return (
    <figure className={`${styles.figure} ${withBorder && styles['figure--border']} d-flex flex-column justify-content-between text-center`}>
      <a href={demo || src} target="_blank" rel="noreferrer">
        {isVideo ? (
          <video muted autoPlay loop controls>
            <source src={src} type="video/mp4" />
          </video>
        ) : <img src={src} alt={alt} />}

      </a>
      <figcaption>
        {alt}
        {demo && (
        <>
          <br />
          <a href={demo} target="_blank" rel="noreferrer">Demo complet</a>
        </>
        )}
      </figcaption>
    </figure>
  );
}
