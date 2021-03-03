import React from 'react';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import EventPage from '~/components/event/EventPage/EventPage';
import SEOTags from '~/components/SEOTags';
import { withClientMonitoring } from '~/services/Hooks';

function EventsPage() {
  withClientMonitoring();

  return (
    <>
      <SEOTags
        title="Evenimente | FrontEnd.ro"
        shareImage="https://frontend.ro/learn-seo-image.jpg"
        description="Participe la cele mai faine evenimente susținute de comunitatea Frontend.ro"
        url="https://FrontEnd.ro/evenimente"
      />
      <Header />
      <EventPage />
      <Footer />
    </>
  );
}

export default EventsPage;
