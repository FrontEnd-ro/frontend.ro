import React from 'react';
import { GITHUB_URL } from '~/services/Constants';

import styles from './LandingThanks.module.scss';

export default function LandingThanks() {
  return (
    <div className={`${styles['landing-thanks']} text-white`}>
      <section>
        <h2 className="text-center"> Din comunitate, pentru comunitate</h2>
        <p>
          Acest proiect este o realitate datorită
          unor developeri cu inima mare ce-și donează timpul
          pentru construirea platformei, crearea lecțiilor și oferirea de feedback.
          Întreg codul este
          {' '}
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">open-source pe GitHub</a>
          {' '}
          iar lectiile sunt și vor râmâne 100% gratuite.
        </p>
        <br />
        <p>
          PS: dacă vrei sa contribui cu feedback, lecții sau funcționalități
          la platformă, dă-ne un semn și hai să construim împreună!
        </p>
      </section>
    </div>
  );
}
