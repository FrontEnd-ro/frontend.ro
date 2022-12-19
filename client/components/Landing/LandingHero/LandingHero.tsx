import ConfettiGenerator from 'confetti-js';
import React, { useEffect, useRef, useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Snowflakes from 'magic-snowflakes';
import Header from '~/components/Header';
import Button from '~/components/Button';
import Link from '~/components/generic/Link';
import NavLinks from '~/components/NavLinks/NavLinks';
import { HTML_TUTORIAL_ID } from '~/services/Constants';
import LandingSchmoes from './LandingSchmoes/LandingSchmoes';
import AsideMenu from '~/components/layout/AsideMenu/AsideMenu';
import { TutorialProgressI } from '~/../shared/types/tutorial.types';

import styles from './LandingHero.module.scss';

interface Props {
  isLoggedIn: boolean;

  // Tutorials started by the user
  tutorials: string[];

  // Progress of the HTML tutorial,
  // if the user started it.
  htmlTutorialProgress: TutorialProgressI | null;
}

enum TutorialState {
  NOT_STARTED = 0,
  IN_PROGRESS = 1,
  FINISHED = 2,
}

function LandingHero({ isLoggedIn, tutorials, htmlTutorialProgress }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  let tutorialState = TutorialState.NOT_STARTED;
  if (htmlTutorialProgress !== null && !!htmlTutorialProgress?.certification) {
    tutorialState = TutorialState.FINISHED;
  } else if (tutorials.includes(HTML_TUTORIAL_ID)) {
    tutorialState = TutorialState.IN_PROGRESS;
  }

  const CONFIG: Record<TutorialState, { label: string; href: string }> = {
    [TutorialState.NOT_STARTED]: {
      label: 'Începe Tutorialul de HTML',
      href: '/html',
    },
    [TutorialState.IN_PROGRESS]: {
      label: 'Continuă Tutorialul de HTML',
      href: '/html/tutorial',
    },
    [TutorialState.FINISHED]: {
      label: 'Vezi certificarea HTML!',
      href: '/html/tutorial/certification',
    },
  };

  useEffect(() => {
    if (tutorialState === TutorialState.FINISHED) {
      const confetti = new ConfettiGenerator({
        target: canvasRef.current,
        width: 300,
        height: 70,
        clock: 15,
      });
      confetti.render();
    }
  }, []);

  useEffect(() => {
    let snowflakes: Snowflakes;

    import('magic-snowflakes')
      .then((module) => {
        const Snowflakes = module.default;
        snowflakes = new Snowflakes({
          container: heroRef.current ?? document.body,
          speed: 2,
        });
      })
      .catch((err) => {
        console.error('Failed to load "magic-snowflakes" library.', err);
      });

    return () => {
      snowflakes?.destroy();
    };
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
      <section ref={heroRef} className={`${styles.LandingHero} ${isLoggedIn ? styles.isLoggedIn : ''} d-flex justify-content-between`}>
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
              href={CONFIG[tutorialState].href}
              className={`${styles['action-button']} d-inline-block mt-2 text-center relative`}
            >
              {CONFIG[tutorialState].label}
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
