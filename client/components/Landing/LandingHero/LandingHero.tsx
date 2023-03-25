import ConfettiGenerator from 'confetti-js';
import React, { useEffect, useRef, useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from '~/components/Header';
import Button from '~/components/Button';
import Link from '~/components/generic/Link';
import NavLinks from '~/components/NavLinks/NavLinks';
import LandingSchmoes from './LandingSchmoes/LandingSchmoes';
import AsideMenu from '~/components/layout/AsideMenu/AsideMenu';

import styles from './LandingHero.module.scss';

interface Props {
  isLoggedIn: boolean;
  htmlTutorialState: 'not_started' | 'started' | 'completed';
}

function LandingHero({ isLoggedIn, htmlTutorialState }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const CONFIG: Record<'not_started' | 'started' | 'completed', { label: string; href: string }> = {
    not_started: {
      label: 'Începe Tutorialul de HTML',
      href: '/html',
    },
    started: {
      label: 'Continuă Tutorialul de HTML',
      href: '/html/tutorial',
    },
    completed: {
      label: 'Vezi certificarea HTML!',
      href: '/html/tutorial/certification',
    },
  };

  useEffect(() => {
    if (htmlTutorialState === 'completed') {
      const confetti = new ConfettiGenerator({
        target: canvasRef.current,
        width: 300,
        height: 70,
        clock: 15,
      });
      confetti.render();
    }
  }, []);

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
              prefetch={false}
              variant="contained"
              href={CONFIG[htmlTutorialState].href}
              className={`${styles['action-button']} d-inline-block mt-2 text-center relative`}
            >
              {CONFIG[htmlTutorialState].label}
              <canvas className="pin-full" ref={canvasRef} />
            </Link>
          </div>
        </div>
        <LandingSchmoes />
      </section>
    </>
  );
}

export default LandingHero;
