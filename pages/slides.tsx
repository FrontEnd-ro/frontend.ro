import React from 'react';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import SEOTags from '~/components/SEOTags';
import SlidesPage from '~/components/SlidesPage';

function Events() {
  return (
    <>
      <SEOTags
        title="Slide-uri | FrontEnd.ro"
        shareImage={`${process.env.CLOUDFRONT_PUBLIC}/seo/events-page.jpg`}
        description="Slide-urile folosite la evenimentele comunității FrontEnd.ro"
        url="https://FrontEnd.ro/slides"
      />
      <Header />
      <SlidesPage />
      <Footer />
    </>
  );
}

export default Events;
