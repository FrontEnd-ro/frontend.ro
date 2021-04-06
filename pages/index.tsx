import SEOTags from '~/components/SEOTags';
import {
  LandingAdBanner,
  LandingHero,
  LandingHowItWorks,
  LandingStats,
  LandingSubscribe,
} from '~/components/Landing';
import Footer from '~/components/Footer';
import { withClientMonitoring } from '~/services/Hooks';

export default function Home() {
  withClientMonitoring();

  return (
    <>
      <SEOTags
        url="https://FrontEnd.ro"
        title="FrontEnd.ro - Învață de la comunitatea open-source"
        description="Vrei să înveți FrontEnd? Aici ai parte de tutoriale gratuite și o comunitate de developeri care te vor ajuta să devii mai bun."
      />
      <>
        <LandingAdBanner adId="ad/git-incepatori-2" />
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
