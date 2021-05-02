import React from 'react';
import styles from './SlidesPreview.module.scss';

export interface SlideI {
  id: string;
  title: string;
  thumb: string;
  description: string;
  created: number;
}

function SlidesPreview({ info }: { info: SlideI }) {
  const slidesLink = `${process.env.CLOUDFRONT_PUBLIC}/slides/${info.id}/index.html`;

  return (
    <main className={styles['slides-preview']}>
      <div className={styles['iframe-wrapper']}>
        <iframe title={info.title} src={slidesLink} />
        <nav>
          <a href="/slides"> ⬅ Galerie </a>
          <a
            target="_blank"
            href={slidesLink}
            rel="noreferrer"
          >
            Full screen ↗
          </a>

        </nav>
      </div>
      <section className={styles.about}>
        <h1>{info.title}</h1>
        <p>{info.description}</p>

        <time dateTime={new Date(info.created).toISOString()} className={styles.created}>
          {new Date(info.created).toLocaleDateString('ro-RO', {
            year: 'numeric', month: 'long', day: 'numeric',
          })}
        </time>
      </section>
    </main>
  );
}

export default SlidesPreview;
