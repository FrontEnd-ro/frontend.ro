import Head from 'next/head';
import Footer from '~/components/Footer';
import {
  LandingHero,
  LandingHowItWorks,
  LandingSubscribe,
  LandingThanks,
} from '~/components/Landing';

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend.ro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <LandingHero />
        <LandingHowItWorks />
        <LandingThanks />
        <LandingSubscribe />
        <Footer />
      </>

    </>
  );
}
