import ConfettiGenerator from 'confetti-js';
import React, { useEffect, useRef, useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation, Trans } from '~/services/typesafeNextTranslate';

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

  const { t } = useTranslation('common');

  const CONFIG: Record<'not_started' | 'started' | 'completed', { label: string; href: string }> = {
    not_started: {
      label: t('LandingHero.Start the HTML Tutorial'),
      href: '/html',
    },
    started: {
      label: t('LandingHero.Continue the HTML Tutorial'),
      href: '/html/tutorial',
    },
    completed: {
      label: t('LandingHero.See the HTML certification!'),
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
            <span>{t('Menu')}</span>
            <FontAwesomeIcon icon={faBars} />
          </Button>
        )}
      <section className={`${styles.LandingHero} ${isLoggedIn ? styles.isLoggedIn : ''} d-flex justify-content-between`}>
        <AsideMenu hideScrollOnBody title={t('FrontEndro')} isOpen={isMenuOpen} close={() => setIsMenuOpen(false)}>
          <div className={`${styles['nav-wrapper']} absolute`}>
            <NavLinks />
          </div>
        </AsideMenu>
        <div className={styles['call-to-action']}>
          <h1 className="m-0 d-inline-block"> {t('FrontEndro')} </h1>
          <p className={styles.description}>
            <Trans i18nKey='common:LandingHero.description' components={[
              <span key='0' className="d-block" />
            ]}/>
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
