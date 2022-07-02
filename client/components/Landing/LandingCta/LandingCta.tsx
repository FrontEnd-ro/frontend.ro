import React from 'react';
import Link from '~/components/generic/Link';
import styles from './LandingCta.module.scss';

export default function LandingCta() {
  return (
    <section className={`${styles['landing-cta']} text-center`}>
      <h2> Gata să trecem la treabă? </h2>
      <h3>
        Hai să
        <Link href="">
          învățăm
        </Link>
        sau să
        <Link href="">
          predăm
        </Link>
        împreună.
      </h3>
    </section>
  );
}
