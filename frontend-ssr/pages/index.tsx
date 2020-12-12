import Head from 'next/head';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import LandingHero from '~/components/Landing';

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend.ro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        {/* <Header /> */}
        <LandingHero />
        <Footer />
      </>

    </>
  );
}
