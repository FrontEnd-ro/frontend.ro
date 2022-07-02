import React, { useState } from 'react';
import Link from '~/components/generic/Link';
import { connect, ConnectedProps } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Header from '~/components/Header';
import Button from '~/components/Button';
import { RootState } from '~/redux/root.reducer';
import LandingSchmoes from './LandingSchmoes/LandingSchmoes';
import AsideMenu from '~/components/layout/AsideMenu/AsideMenu';

import styles from './LandingHero.module.scss';
import NavLinks from '~/components/NavLinks/NavLinks';

function LandingHero({ user }: ConnectedProps<typeof connector>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {user.info
        ? <Header withNavMenu />
        : (
          <Button
            variant="light"
            onClick={() => setIsMenuOpen(true)}
            className={`${styles['menu-btn']} d-flex align-items-center`}
          >
            <span>Menu</span>
            <FontAwesomeIcon icon={faBars} />
          </Button>
        )}
      <section className={`${styles['landing-hero']} d-flex justify-content-between`}>
        <AsideMenu hideScrollOnBody title="FrontEnd.ro" isOpen={isMenuOpen} close={() => setIsMenuOpen(false)}>
          <div className={styles['nav-wrapper']}>
            <NavLinks />
          </div>
        </AsideMenu>
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
            <Link variant="contained" color="black" href="/lectii" className={`${styles['action-button']} text-center`}>
              Lecții
            </Link>
            <Link variant="contained" color="black" href="/exercitii" className={`${styles['action-button']} text-center`}>
              Exerciții
            </Link>
            <Link variant="contained" color="white" href="/vreau-sa-ajut" className={`${styles['action-button']} text-center`}>
              Implică-te
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
