import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import List from '../../components/List';
import Header from '../../components/Header';
import Link from '~/components/generic/Link';
import { RootState } from '~/redux/root.reducer';
import { useCurrentUrl, withSmoothScroll } from '~/services/Hooks';
import ChipCarousel from '../../components/ChipCarousel/ChipCarousel';
import HtmlCssJs from './components/HtmlCssJS/HtmlCssJs';
import { HTML_TUTORIAL_ID } from '~/services/Constants';
import OptionsDrawer from '~/components/OptionsDrawer/OptionsDrawer';
import HtmlHowItWorks from './components/HtmlHowItWorks/HtmlHowItWorks';
import HtmlFakeDiploma from './components/HtmlFakeDiploma/HtmlFakeDiploma';
import {
  CopyLinkButton, FacebookButton, LinkedInButton, WhatsAppButton,
} from '~/components/SocialMediaButtons';
import { Trans, useTranslation } from '~/services/typesafeNextTranslate';

import styles from './HtmlLanding.module.scss';

const HtmlLanding = ({ tutorials }: ConnectedProps<typeof connector>) => {
  const { t } = useTranslation('common');
  const urlToShare = useCurrentUrl();
  const tutorialUrl = `/${HTML_TUTORIAL_ID}/tutorial`;
  const didStartTutorial = tutorials.includes(HTML_TUTORIAL_ID);
  const chipRows = [
    ['<html>', '<div>', '<form>', '<head>', '<span>', '<article>', '<video>', '<button>', '<title>', '<main>', '<label>', '<summary>'],
    ['<aside>', '<pre>', '<code>', '<em>', '<br>', '<body>', '<header>', '<section>', '<p>', '<nav>', '<tbody>', '<progress>', '<h1>'],
    ['<blockquote>', '<ol>', '<footer>', '<audio>', '<img>', '<picture>', '<h2>', '<canvas>', '<figure>', '<hr>', '<ul>', '<select>'],
    ['<a>', '<time>', '<h3>', '<track>', '<iframe>', '<svg>', '<script>', '<link>', '<table>', '<input>', '<textarea>', '<details>'],
  ];

  const navigateToFirstSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#what-is-html').scrollIntoView();
  };

  withSmoothScroll();

  return (
    <>
      <Header theme="dark" withNavMenu />
      <main data-certification-page className={styles.HtmlLanding}>
        <div className={`${styles.hero} d-flex align-items-center justify-content-center bg-black text-white`}>
          <h1 className="text-center mb-0"> {t('HtmlLanding.Learn HTML from scratch')} </h1>
          <p>
            <Trans i18nKey='common:HtmlLanding.description' components={[
              <span key='0' className={styles['text-chip']} />,
            ]} />
          </p>
          <div className={`${styles['hero-controls']} d-flex align-items-center justify-content-between`}>
            {didStartTutorial ? (
              <>
                <OptionsDrawer className="mr-4" trigger={{ text: 'Share', icon: faShare }} variant="light">
                  <OptionsDrawer.Element className="bg-black">
                    <CopyLinkButton text={urlToShare} />
                  </OptionsDrawer.Element>
                  <OptionsDrawer.Element className="bg-black">
                    <FacebookButton url={urlToShare} />
                  </OptionsDrawer.Element>
                  <OptionsDrawer.Element className="bg-black">
                    <LinkedInButton url={urlToShare} />
                  </OptionsDrawer.Element>
                  <OptionsDrawer.Element className="bg-black">
                    <WhatsAppButton url={urlToShare} />
                  </OptionsDrawer.Element>
                </OptionsDrawer>
                <Link prefetch={false} href={tutorialUrl} color="blue" variant="contained">
                  {t('Continue the tutorial')}
                </Link>
              </>
            ) : (
              <>
                <Link prefetch={false} onClick={navigateToFirstSection} href="#what-is-html" variant="contained" color="white">
                  {t('Find out more')}
                </Link>
                <Link prefetch={false} href={tutorialUrl} color="blue" variant="contained">
                  {t('Start now')}
                </Link>
              </>
            )}
          </div>
          {/* <div className={styles['hero-video']} /> */}
        </div>

        <div id="what-is-html">
          <div className={styles.section}>
            <h2 className={styles['section-heading']}>
              {t('HtmlLanding.What is HTML?')}
            </h2>

            <p className={styles['section-text']}>
              <Trans i18nKey='common:HtmlLanding.htmlDescription' components={[
                <a key='0' href="/intro/ce-este-frontend-ul" />
              ]} />
            </p>
            <p className={styles['section-text']}>
              <Trans i18nKey='common:HtmlLanding.frontendLanguages' components={[
                <span key='0' className="text-bold" />,
                <span key='1' className="text-bold" />
              ]} />
            </p>
          </div>
          <div className={styles['HtmlCssJs-wrapper']}>
            <HtmlCssJs />
          </div>
        </div>

        <div>
          <section className={styles.section}>
            <h2 className={styles['section-heading']}>
              {t('HtmlLanding.What will you learn?')}
            </h2>
            <p className={styles['section-text']}>
              {t('HtmlLanding.whatWillYouLearnDescription')}
            </p>
            <List className={`${styles['learn-list']} ${styles['section-text']}`} variant="checkmark">
              <li className="mt-8">
                {t('HtmlLanding.whatYouWillLearn.1')}
              </li>
              <li className="mt-4">
                {t('HtmlLanding.whatYouWillLearn.2')}
              </li>
              <li className="mt-4">
                <Trans i18nKey='common:HtmlLanding.whatYouWillLearn.3' components={[
                  <a key='0' href="https://code.visualstudio.com/" target="_blank" rel="noreferrer" />
                ]} />
              </li>
              <li className="mt-4">
                {t('HtmlLanding.whatYouWillLearn.4')}
              </li>
              <li className="mt-4">
                {t('HtmlLanding.whatYouWillLearn.5')}
              </li>
            </List>

          </section>
          <ChipCarousel className="my-16" rows={chipRows} />
        </div>

        <div>
          <div className={styles.section}>
            <h2 className={styles['section-heading']}>
              {t('HtmlLanding.How does the course work?')}
            </h2>
          </div>
          <HtmlHowItWorks className={styles.HtmlHowItWorks} />
        </div>

        <div>
          <div className={styles.section}>
            <h2 className={styles['section-heading']}>
            {t('HtmlLanding.certification.title')}
            </h2>
            <p className={styles['section-text']}>
              {t('HtmlLanding.certification.description')}
            </p>
          </div>
          <div className={styles.section}>
            <HtmlFakeDiploma />
          </div>
        </div>

        <div>
          <div className={styles.section}>
            <h2 className={styles['section-heading']}>
              {t('HtmlLanding.Ready to begin?')}
            </h2>
          </div>
          <div className="text-center text-2xl">
            {didStartTutorial ? (
              <Link prefetch={false} href={tutorialUrl} color="blue" variant="contained">
                {t('Continue the tutorial')}
              </Link>
            ) : (
              <Link prefetch={false} color="blue" variant="contained" href={tutorialUrl}>
                {t('Start the tutorial')}
              </Link>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

function mapStateToProps(state: RootState) {
  return {
    tutorials: state.user?.info?.tutorials ?? [],
  };
}

const connector = connect(mapStateToProps);

export default connector(HtmlLanding);
