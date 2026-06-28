import React, { useState } from 'react';
import styles from './PresentationPreview.module.scss';
import { PresentationI } from '~/../shared/types/presentation.types';
import { env } from '~/services/env';

function PresentationPreview({ info }: { info: PresentationI }) {
  const presentationLink = `${env.CLOUDFRONT_PUBLIC}/slides/${info.presentationId}/index.html`;
  const [views, setViews] = useState(0);

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
