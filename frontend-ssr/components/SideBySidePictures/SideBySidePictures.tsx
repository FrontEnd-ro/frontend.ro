import React from 'react';
import styles from './SideBySidePictures.module.scss';

interface Props {
  img1: {
    src: string;
    alt: string;
  }

  img2: {
    src: string;
    alt: string;
  }
}

export default function SideBySidePictures({ img1, img2 } : Props) {
  return (
    <div className={`${styles['side-by-side-pictures']} d-flex justify-content-between`}>
      <figure>
        <a href={img1.src} target="_blank" rel="noreferrer">
          <img src={img1.src} alt={img1.alt} />
        </a>
        <figcaption className="text-center">
          {img1.alt}
        </figcaption>
      </figure>
      <figure>
        <a href={img2.src} target="_blank" rel="noreferrer">
          <img src={img2.src} alt={img2.alt} />
        </a>
        <figcaption className="text-center">
          {img2.alt}
        </figcaption>
      </figure>
    </div>
  );
}
