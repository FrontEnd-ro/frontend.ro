import React, { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from '~/components/Header';
import Button from '~/components/Button';
import Link from '~/components/generic/Link';
import NavLinks from '~/components/NavLinks/NavLinks';
import { HTML_TUTORIAL_ID } from '~/services/Constants';
import LandingSchmoes from './LandingSchmoes/LandingSchmoes';
import AsideMenu from '~/components/layout/AsideMenu/AsideMenu';

import styles from './LandingHero.module.scss';

interface Props {
  isLoggedIn: boolean;

  // Tutorials started by the user
  tutorials: string[];
}

function LandingHero({ isLoggedIn, tutorials }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const didStartHTMLTutorial = tutorials.includes(HTML_TUTORIAL_ID);

  return (
    <>
      {isLoggedIn
        ? <Header className={styles.Header} withNavMenu />
        : (
          <Button
            variant="light"
            onClick={() => setIsMenuOpen(true)}
            className={`${styles['menu-btn']} d-flex align-items-center absolute d-flex`}
          >
            <span>Menu</span>
            <FontAwesomeIcon icon={faBars} />
          </Button>
        )}
      <section className={`${styles.LandingHero} ${isLoggedIn ? styles.isLoggedIn : ''} d-flex justify-content-between`}>
        <AsideMenu hideScrollOnBody title="FrontEnd.ro" isOpen={isMenuOpen} close={() => setIsMenuOpen(false)}>
          <div className={`${styles['nav-wrapper']} absolute`}>
            <NavLinks />
          </div>
        </AsideMenu>
        <div className={styles['call-to-action']}>
          <h1 className="m-0 d-inline-block"> FrontEnd.ro </h1>
          <p className={styles.description}>
            Învață FrontEnd de la zero,
            {' '}
            <span className="d-block">
              cu ajutorul comunității open source.
            </span>
          </p>
          <div>
            <Link
              color="black"
              variant="contained"
              href={didStartHTMLTutorial ? '/html/tutorial' : '/html'}
              className={`${styles['action-button']} d-inline-block mt-2 text-center`}
            >
              {didStartHTMLTutorial ? 'Continuă Tutorialul de HTML' : 'Începe Tutorialul de HTML'}
            </Link>
          </div>
        </div>
        <LandingSchmoes />
      </section>
    </>
  );
}

export default LandingHero;
