import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Footer from '~/components/Footer';
import SEOTags from '~/components/SEOTags';
import { RootState } from '~/redux/root.reducer';
import LandingHero from './LandingHero/LandingHero';
import { TidbitI } from '~/../shared/types/tidbit.types';
import LandingAdCard from './LandingAdCard/LandingAdCard';
import { useTranslation } from '~/services/typesafeNextTranslate';
import LandingResources from './LandingResources/LandingResources';
import LandingSubscribe from './LandingSubscribe/LandingSubscribe';
import LandingHTML from '~/components/Landing/LandingHtml/LandingHtml';
import LandingTidbits from '~/components/Landing/LandingTidbits/LandingTidbits';
import LandingChristmasAdvent from './LandingChristmasAdvent/LandingChristmasAdvent';

import styles from './Landing.module.scss';

function LandingPage({
  tidbits,
  isLoggedIn,
  applicationConfig,
  htmlTutorialState,
}: ConnectedProps<typeof connector> & {
  tidbits: TidbitI[],
  htmlTutorialState: 'not_started' | 'started' | 'completed';
}) {
  const { t } = useTranslation('common');

  return (
    <>
      <SEOTags
        // TODO: this should come via a config (like app_config) and not the i18n
        url="https://FrontEnd.ro"
        title={t('Landing.title')}
        description={t('Landing.description')}
      />
      {/*
        We're putting the styles here instead of Landing.module.scss
        because we don't want to create another wrapper for this page.
      */}
      <style>
        {`
        h1 {
          font-size: calc(2em + 2vw);
        }
        
        h2 {
          font-size: calc(1.5em + 1vw);
        }
      `}
      </style>
      <>
        {applicationConfig?.ad?.active === true && <LandingAdCard ad={applicationConfig.ad} />}
        <LandingHero
          isLoggedIn={isLoggedIn}
          htmlTutorialState={htmlTutorialState}
        />
        <LandingHTML className={styles.LandingHTML} />
        <LandingChristmasAdvent className={styles.LandingChristmasAdvent} />
        <LandingTidbits tidbits={tidbits} />
        <LandingResources className={styles.LandingResources} />
        <LandingSubscribe className={styles.LandingSubscribe} />
        <Footer />
      </>
    </>
  );
}

function mapStateToProps(state: RootState) {
  return {
    isLoggedIn: !!state.user.info,
    applicationConfig: state.applicationConfig,
  };
}

const connector = connect(mapStateToProps);

export default connector(LandingPage);
