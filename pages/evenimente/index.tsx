import React from 'react';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import EventsPage from '~/components/event/EventsPage';
import SEOTags from '~/components/SEOTags';
import { env } from '~/services/env';

function Events() {
  return (
    <>
      <SEOTags
        title="Evenimente | FrontEnd.ro"
        shareImage={`${env.CLOUDFRONT_PUBLIC}/seo/events-page.jpg`}
        description="Participă la evenimetele comunității FrontEnd.ro"
        url="https://FrontEnd.ro/evenimente"
      />
      <Header withNavMenu />
      <EventsPage />
      <Footer />
    </>
  );
}

export default Events;
