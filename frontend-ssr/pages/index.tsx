import Head from 'next/head';
import Footer from '~/components/Footer';
import {
  LandingHero,
  LandingHowItWorks,
  LandingSubscribe,
  LandingThanks,
} from '~/components/Landing';
import SEOTags from '~/components/SEOTags';

export default function Home() {
  return (
    <>
      <Head>
        <SEOTags
          url="https://FrontEnd.ro"
          title="FrontEnd.ro - Învață de la comunitatea open-source"
          description="Vrei să înveți FrontEnd? Aici ai parte de tutoriale gratuite și o comunitate de developeri care te vor ajuta să devii mai bun."
        />
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
