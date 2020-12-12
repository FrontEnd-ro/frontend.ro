import React from 'react';
import styles from './LandingHero.module.scss';
import LandingSchmoes from './LandingSchmoes/LandingSchmoes';

export default function LandingHero() {
  return (
    <section className={styles['landing-hero']}>
      <div className="call-to-action">
        <h1> FrontEnd.ro </h1>
        <h2>
          Învață FrontEnd de la zero,
          {' '}
          <span>
            cu ajutorul comunității open source.
          </span>
        </h2>
        <div className="a-wrapper">
          <a href="#" className="btn btn--default">Vreau să învăț</a>
          <a href="#" className="btn btn--light">Vreau să predau</a>
        </div>
      </div>

      <LandingSchmoes />
    </section>
  );
}
