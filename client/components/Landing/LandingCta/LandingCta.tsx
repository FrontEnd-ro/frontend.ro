import React from 'react';
import Link from 'next/link';
import styles from './LandingCta.module.scss';

export default function LandingCta() {
  return (
    <section className={`${styles['landing-cta']} text-center`}>
      <h2> Gata să trecem la treabă? </h2>
      <h3>
        Hai să
        <Link href="">
          <a>
            învățăm
          </a>
        </Link>
        sau să
        <Link href="">
          <a>
            predăm
          </a>
        </Link>
        împreună.
      </h3>
    </section>
  );
}
