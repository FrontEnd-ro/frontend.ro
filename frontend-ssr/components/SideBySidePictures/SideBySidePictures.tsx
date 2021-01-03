import React from 'react';
import { Figure } from '~/shared-types';
import { LessonFigure } from '../lessons';
import SideBySide from '../SideBySide/SideBySide';

interface Props {
  img1: Figure
  img2: Figure
}

export default function SideBySidePictures({ img1, img2 } : Props) {
  return (
    <SideBySide>
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
    </SideBySide>
  );
}
