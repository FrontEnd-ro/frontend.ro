import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '~/redux/root.reducer';
import SEOTags from '~/components/SEOTags';
import {
  LandingAdCard,
  LandingHero,
  LandingHowItWorks,
  LandingStats,
  LandingSubscribe,
} from '~/components/Landing';
import Footer from '~/components/Footer';
import { TidbitI } from '../shared/types/tidbit.types';
import LandingTidbits from '~/components/Landing/LandingTidbits/LandingTidbits';

function Home({
  tidbits,
  applicationConfig,
}: ConnectedProps<typeof connector> & {tidbits: TidbitI[]}) {
  return (
    <>
      <SEOTags
        url="https://FrontEnd.ro"
        title="FrontEnd.ro - Învață de la comunitatea open-source"
        description="Vrei să înveți FrontEnd? Aici ai parte de tutoriale gratuite și o comunitate de developeri care te vor ajuta să devii mai bun."
      />
      <>
        {applicationConfig.ad && <LandingAdCard ad={applicationConfig.ad} />}
        <LandingHero />
        <LandingHowItWorks />
        {/* <LandingThanks /> */}
        <LandingTidbits tidbits={tidbits} />
        <LandingSubscribe />
        {/* <LandingStats /> */}
        <Footer />
      </>
    </>
  );
}

// We don't want this to be a `getStaticProps` because we don't
// trigger a rebuild when this DB collection changes.
export async function getServerSideProps() {
  const { default: fetch } = await import('node-fetch');

  const resp = await fetch(`${process.env.ENDPOINT}/tidbits`);
  const tidbits = await resp.json();

  return {
    props: {
      tidbits,
    },
  };
}

function mapStateToProps(state: RootState) {
  return {
    applicationConfig: state.applicationConfig,
  };
}

const connector = connect(mapStateToProps);

export default connector(Home);
