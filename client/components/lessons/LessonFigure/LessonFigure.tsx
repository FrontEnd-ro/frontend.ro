import React from 'react';
import { Figure } from '~/services/Constants';

import styles from './LessonFigure.module.scss';

export default function LessonFigure(
  {
    src, alt, demo, withBorder, isVideo, width,
  }:
  Figure & { withBorder?: boolean},
) {
  return (
    <figure className={`${styles.figure} ${withBorder && styles['figure--border']} d-flex flex-column justify-content-between text-center`}>
      {isVideo ? (
        <div>
          <video muted autoPlay loop>
            <source src={src} type="video/mp4" />
          </video>
        </div>
      )
        : (
          <a href={demo || src} target="_blank" rel="noreferrer">
            <img src={src} alt={alt} width={width} />
          </a>
        )}
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
