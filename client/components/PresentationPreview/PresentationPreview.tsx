import React, { useEffect, useState } from 'react';
import PresentationService from '~/services/api/Presentation.service';
import styles from './PresentationPreview.module.scss';

export interface PresentationI {
  presentationId: string;
  title: string;
  thumb: string;
  description: string;
  created: number;
  views: number;
}

function PresentationPreview({ info }: { info: PresentationI }) {
  const presentationLink = `${process.env.CLOUDFRONT_PUBLIC}/slides/${info.presentationId}/index.html`;
  const [views, setViews] = useState(0);

  useEffect(() => {
    PresentationService
      .increaseViews(info.presentationId)
      .then((resp) => setViews(resp.views))
      .catch((err) => {
        console.error('[Lesson.tsx] got while trying to update view count', err);
      });
  }, []);

  return (
    <main className={styles['presentation-preview']}>
      <div className={styles['iframe-wrapper']}>
        <iframe title={info.title} src={presentationLink} />
        <nav>
          <a href="/slides"> ⬅ Galerie </a>
          <a
            target="_blank"
            href={presentationLink}
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
        {/* TODO: uncomment later when we have more views */}
        {/* {views && (
          <p className={styles.views}>
            {views}
            {' '}
            vizualizări
          </p>
        )} */}

      </section>
    </main>
  );
}

export default PresentationPreview;
