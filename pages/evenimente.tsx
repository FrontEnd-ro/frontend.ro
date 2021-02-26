import React from 'react';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import EventPage from '~/components/event/EventPage';
import SEOTags from '~/components/SEOTags';
import { withClientMonitoring } from '~/services/Hooks';
import { formatDate } from '~/services/Utils';

function EventsPage() {
  withClientMonitoring();
  let dateToFormat = formatDate(new Date('Sun Mar 14 2021'));
  return (
    <>
      <SEOTags
        title="Evenimente | FrontEnd.ro"
        shareImage="https://frontend.ro/learn-seo-image.jpg"
        description="Participe la cele mai faine evenimente susținute de comunitatea Frontend.ro"
        url="https://FrontEnd.ro/evenimente"
      />
      <Header />
      <EventPage
        title="Introducere practică în Git & GitHub pentru toți"
        cover="../images/learn/pair-programming.svg"
        description="Înscrie-te și anunță-i și pe colegi! Acest curs include si un proiect interactiv unde puteți colabora."
        url="Online via Zoom"
        date={dateToFormat}
        optionsDateAndHour={[
          { value: `${dateToFormat} / 14:30`, label: `${dateToFormat} / 14:30` },
          // { value: `${dateToFormat} / 16:00`, label: `${dateToFormat} / 16:00` },
          // { value: `${dateToFormat} / 18:00`, label: `${dateToFormat} / 18:00` },
        ]}
      />
      <Footer />
    </>
  );
}

export default EventsPage;
