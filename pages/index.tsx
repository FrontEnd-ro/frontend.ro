import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '~/redux/root.reducer';
import SEOTags from '~/components/SEOTags';
import {
  LandingAdBanner,
  LandingHero,
  LandingHowItWorks,
  LandingStats,
  LandingSubscribe,
} from '~/components/Landing';
import Footer from '~/components/Footer';

function Home({ applicationConfig }: ConnectedProps<typeof connector>) {
  return (
    <>
      <SEOTags
        url="https://FrontEnd.ro"
        title="FrontEnd.ro - Învață de la comunitatea open-source"
        description="Vrei să înveți FrontEnd? Aici ai parte de tutoriale gratuite și o comunitate de developeri care te vor ajuta să devii mai bun."
      />
      <>
        {applicationConfig.banner && <LandingAdBanner banner={applicationConfig.banner} />}
        <LandingHero />
        <LandingHowItWorks />
        {/* <LandingThanks /> */}
        <LandingSubscribe />
        <LandingStats />
        <Footer />
      </>
    </>
  );
}

function mapStateToProps(state: RootState) {
  return {
    applicationConfig: state.applicationConfig,
  };
}

const connector = connect(mapStateToProps);

export default connector(Home);
