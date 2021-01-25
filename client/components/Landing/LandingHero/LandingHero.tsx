import React from 'react';
import Link from 'next/link';
import LandingSchmoes from './LandingSchmoes/LandingSchmoes';

import styles from './LandingHero.module.scss';

export default function LandingHero() {
  return (
    <section className={`${styles['landing-hero']} d-flex justify-content-between`}>
      <div className={styles['call-to-action']}>
        <h1> FrontEnd.ro </h1>
        <h2>
          Învață FrontEnd de la zero,
          {' '}
          <span>
            cu ajutorul comunității open source.
          </span>
        </h2>
        <div>
          <Link href="/lectii">
            <a className={`${styles['action-button']} text-center btn btn--default`}>
              Vreau să învăț
            </a>
          </Link>
          <Link href="/exercitii-rezolvate">
            <a className={`${styles['action-button']} text-center btn btn--light`}>
              Vreau să predau
            </a>
          </Link>
        </div>
      </div>

      <LandingSchmoes />
    </section>
  );
}
