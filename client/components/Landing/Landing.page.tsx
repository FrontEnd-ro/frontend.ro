import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Footer from '~/components/Footer';
import SEOTags from '~/components/SEOTags';
import { RootState } from '~/redux/root.reducer';
import LandingHero from './LandingHero/LandingHero';
import { TidbitI } from '~/../shared/types/tidbit.types';
import LandingAdCard from './LandingAdCard/LandingAdCard';
import LandingResources from './LandingResources/LandingResources';
import LandingSubscribe from './LandingSubscribe/LandingSubscribe';
import { TutorialProgressI } from '~/../shared/types/tutorial.types';
import LandingHTML from '~/components/Landing/LandingHtml/LandingHtml';
import LandingTidbits from '~/components/Landing/LandingTidbits/LandingTidbits';

import styles from './Landing.module.scss';

function LandingPage({
  tidbits,
  tutorials,
  isLoggedIn,
  applicationConfig,
  htmlTutorialProgress,
}: ConnectedProps<typeof connector> & {
  tidbits: TidbitI[],
  htmlTutorialProgress: TutorialProgressI | null,
}) {
  return (
    <>
      <SEOTags
        url="https://FrontEnd.ro"
        title="FrontEnd.ro - Învață de la comunitatea open-source"
        description="Vrei să înveți FrontEnd? Aici ai parte de tutoriale gratuite și o comunitate de developeri care te vor ajuta să devii mai bun."
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
        {applicationConfig.ad && <LandingAdCard ad={applicationConfig.ad} />}
        <LandingHero
          tutorials={tutorials}
          isLoggedIn={isLoggedIn}
          htmlTutorialProgress={htmlTutorialProgress}
        />
        <LandingHTML className={styles.LandingHTML} />
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
    tutorials: state?.user?.info?.tutorials ?? [],
  };
}

const connector = connect(mapStateToProps);

export default connector(LandingPage);
