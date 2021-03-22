import {
  faBook,
  faCalendarCheck,
  faUserAstronaut,
  faUserNinja,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import SEOTags from '~/components/SEOTags';
import {
  LandingHero,
  LandingHowItWorks,
  LandingSubscribe,
  LandingThanks,
} from '~/components/Landing';
import Footer from '~/components/Footer';
import PlatformStats from '~/components/PlatformStats';
import { withClientMonitoring } from '~/services/Hooks';

export default function Home() {
  withClientMonitoring();

  const stats = [
    { icon: faUserNinja, counter: 9, description: 'contribuitori cu inimă mare' },
    { icon: faGithub, counter: 5, description: 'repo-uri open-source' },
    { icon: faCalendarCheck, counter: 2, description: 'workshop-uri practice' },
    { icon: faUserAstronaut, counter: 11, description: 'participanți la evenimente' },
    { icon: faBook, counter: 5, description: 'lecții' },
  ];

  return (
    <>
      <SEOTags
        url="https://FrontEnd.ro"
        title="FrontEnd.ro - Învață de la comunitatea open-source"
        description="Vrei să înveți FrontEnd? Aici ai parte de tutoriale gratuite și o comunitate de developeri care te vor ajuta să devii mai bun."
      />
      <>
        <LandingHero />
        <LandingHowItWorks />
        <LandingThanks />
        <LandingSubscribe />
        <PlatformStats stats={stats} />
        <Footer />
      </>
    </>
  );
}
