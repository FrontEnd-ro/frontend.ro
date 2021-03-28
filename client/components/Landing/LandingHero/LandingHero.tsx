import React from 'react';
import Link from 'next/link';
import { connect, ConnectedProps } from 'react-redux';
import Header from '~/components/Header';
import { RootState } from '~/redux/root.reducer';
import LandingSchmoes from './LandingSchmoes/LandingSchmoes';

import styles from './LandingHero.module.scss';

function LandingHero({ user }: ConnectedProps<typeof connector>) {
  return (
    <>
      {user.info && <Header />}
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
                Lecții
              </a>
            </Link>
            <Link href="/exercitii">
              <a className={`${styles['action-button']} text-center btn btn--default`}>
                Exerciții
              </a>
            </Link>
            <Link href="/vreau-sa-ajut">
              <a className={`${styles['action-button']} text-center btn btn--light`}>
                Implică-te
              </a>
            </Link>
          </div>
        </div>

        <LandingSchmoes />
      </section>
    </>
  );
}

function mapStateToProps(state: RootState) {
  return {
    user: state.user,
  };
}

const connector = connect(mapStateToProps);

export default connector(LandingHero);
