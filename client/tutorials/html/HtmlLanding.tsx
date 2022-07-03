import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer';
import { connect, ConnectedProps } from 'react-redux';
import List from '../../components/List';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Login from '~/components/login/Login';
import { RootState } from '~/redux/root.reducer';
import { withSmoothScroll } from '~/services/Hooks';
import ChipCarousel from '../../components/ChipCarousel/ChipCarousel';
import HtmlCssJs from './components/HtmlCssJS/HtmlCssJs';
import HtmlHowItWorks from './components/HtmlHowItWorks/HtmlHowItWorks';
import HtmlFakeDiploma from './components/HtmlFakeDiploma/HtmlFakeDiploma';

import styles from './HtmlLanding.module.scss';

const HtmlLanding = ({ isLoggedIn }: ConnectedProps<typeof connector>) => {
  const router = useRouter();
  const [showHtmlCssJs, setShowHtmlCssJs] = useState(false);
  const chipRows = [
    ['<html>', '<div>', '<form>', '<head>', '<span>', '<article>', '<video>', '<button>', '<title>', '<main>', '<label>', '<summary>'],
    ['<aside>', '<pre>', '<code>', '<em>', '<br>', '<body>', '<header>', '<section>', '<p>', '<nav>', '<tbody>', '<progress>', '<h1>'],
    ['<blockquote>', '<ol>', '<footer>', '<audio>', '<img>', '<picture>', '<h2>', '<canvas>', '<figure>', '<hr>', '<ul>', '<select>'],
    ['<a>', '<time>', '<h3>', '<track>', '<iframe>', '<svg>', '<script>', '<link>', '<table>', '<input>', '<textarea>', '<details>'],
  ];

  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  const startTutorial = () => {
    // Temporary redirect to the lessons page,
    // until we finish implementing the HTML Tutorial page.
    router.push('/lectii');
  };

  const navigateToFirstSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#what-is-html').scrollIntoView();
  };

  const navigateToLogin = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#auth').scrollIntoView();
  };

  useEffect(() => {
    if (inView) {
      setShowHtmlCssJs(true);
    }
  }, [inView]);

  withSmoothScroll();

  return (
    <>
      <Header theme="black" withNavMenu />
      <main data-certification-page className={styles.HtmlLanding}>
        <div className={`${styles.hero} d-flex align-items-center justify-content-center bg-black text-white`}>
          <h1 className="text-center mb-0"> Învață HTML de la zero </h1>
          <p>
            printr-un curs online, focusat pe
            {' '}
            <span className={styles['text-chip']}>
              practică și feedback
            </span>
            {' '}
            de la developeri cu experiență
          </p>
          <div className={`${styles['hero-controls']} d-flex align-items-center justify-content-between`}>
            <a onClick={navigateToFirstSection} href="#what-is-html" className="btn btn--light no-underline">
              Află mai multe
            </a>

            {isLoggedIn ? (
              <Button variant="blue" onClick={startTutorial}>
                Începe acum
              </Button>
            ) : (
              <a onClick={navigateToLogin} href="#auth" className="btn btn--blue no-underline">
                Începe acum
              </a>
            )}
          </div>
          {/* <div className={styles['hero-video']} /> */}
        </div>

        <div id="what-is-html">
          <div className={styles.section}>
            <h2 className={styles['section-heading']}>
              Ce este HTML-ul?
            </h2>

            <p className={styles['section-text']}>
              Este punctul de start în călătoria fiecărui
              {' '}
              <a href="/intro/ce-este-frontend-ul">FrontEnd developer</a>
              .
            </p>
            <p className={styles['section-text']}>
              Alături de
              {' '}
              <span className="text-bold"> CSS </span>
              {' '}
              și
              {' '}
              <span className="text-bold"> JavaScript </span>
              {' '}
              este unul din cele 3 limbaje pe care
              trebuie să le înveți pentru a construi site-uri și aplicații web.
            </p>
          </div>
          <div ref={ref} />
          <div className={styles['HtmlCssJs-wrapper']}>
            {showHtmlCssJs && <HtmlCssJs />}
          </div>
        </div>

        <div>
          <section className={styles.section}>
            <h2 className={styles['section-heading']}>
              Ce vei învăța?
            </h2>
            <p className={styles['section-text']}>
              Cursul acesta e destinat persoanelor cu zero (sau foarte puțină)
              experiență în FrontEnd, deci vom începe de la lucrurile de bază
              și apoi continua cu multă practică.
            </p>
            <List className={`${styles['learn-list']} ${styles['section-text']}`} variant="checkmark">
              <li className="mt-8">
                Ce e FrontEnd development-ul?
              </li>
              <li className="mt-4">
                Care e rolul HTML-ului în cadrul ramurii de FrontEnd?
              </li>
              <li className="mt-4">
                Cum să folosești
                {' '}
                <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
                  VSCode
                </a>
                {' '}
                ca și editor de cod
              </li>
              <li className="mt-4">
                Care sunt și cum să folosești cele mai importante elemente HTML
              </li>
              <li className="mt-4">
                Bune practici în zona de scriere a codului, accesibilitate și perfomanță
              </li>
            </List>

          </section>
          <ChipCarousel className="my-10" rows={chipRows} />
        </div>

        <div>
          <div className={styles.section}>
            <h2 className={styles['section-heading']}>
              Cum funcționează cursul?
            </h2>
          </div>
          <HtmlHowItWorks className={styles.HtmlHowItWorks} />
        </div>

        <div>
          <div className={styles.section}>
            <h2 className={styles['section-heading']}>
              Iar la final primești o certificare!
            </h2>
            <p className={styles['section-text']}>
              În programare nu contează prea mult diplomele în sine, ci ce știi să faci.
              De aceea, folosește această certificare ca o dovadă că ai reușit să scrii cod
              real, gata de producție, validat de developeri cu experiență!
            </p>
          </div>
          <div className={styles.section}>
            <HtmlFakeDiploma />
          </div>
        </div>

        <div id="auth">
          <div className={styles.section}>
            <h2 className={styles['section-heading']}>
              Gata să începem?
            </h2>
            {isLoggedIn && (
              <p className={styles['section-text']}>
                Ești deja autentificat, deci apasă pe butonul de mai jos și hai să trecem la treabă!
              </p>
            )}
          </div>
          {isLoggedIn ? (
            <div className="text-center text-2xl">
              <Button onClick={startTutorial} variant="blue">
                Începe acum
              </Button>
            </div>
          ) : (
            <div className={styles['login-wrapper']}>
              <Login
                mode="register"
                className={styles.login}
                onSuccess={startTutorial}
              />
            </div>
          )}
        </div>
      </main>
    </>
  );
};

function mapStateToProps(state: RootState) {
  return {
    isLoggedIn: !!state.user.info,
  };
}

const connector = connect(mapStateToProps);

export default connector(HtmlLanding);
