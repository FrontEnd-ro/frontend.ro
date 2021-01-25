import React from 'react';
import { Figure } from '~/services/Constants';
import { LessonFigure } from '../lessons';
import styles from './SideBySidePictures.module.scss';

interface Props {
  img1: Figure
  img2: Figure
  direction?: 'row' | 'column'
}

export default function SideBySidePictures({ img1, img2, direction } : Props) {
  return (
    <div className={`${styles['side-by-side']} ${direction === 'column' && styles['side-by-side--column']} d-flex justify-content-between my-5`}>
      <LessonFigure {...img1} />
      <LessonFigure {...img2} />
      {/* <figure className="d-flex flex-column justify-content-between">
        <a href={img1.demo || img1.src} target="_blank" rel="noreferrer">
          <img src={img1.src} alt={img1.alt} />
        </a>
        <figcaption className="text-center">
          {img1.alt}
          {img1.demo && (
            <>
              <br />
              <a href={img1.demo} target="_blank" rel="noreferrer">Demo complet</a>
            </>
          )}
        </figcaption>
      </figure>
      <figure className="d-flex flex-column justify-content-between">
        <a href={img2.demo || img2.src} target="_blank" rel="noreferrer">
          <img src={img2.src} alt={img2.alt} />
        </a>
        <figcaption className="text-center">
          {img2.alt}
          {img2.demo && (
            <>
              <br />
              <a href={img2.demo} target="_blank" rel="noreferrer">Demo complet</a>
            </>

          )}

        </figcaption>
      </figure> */}
    </div>
  );
}
