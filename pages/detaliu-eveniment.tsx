import React from 'react';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import EventDetails from '~/components/event/EventDetails';
import {
  Pava,
  CatalinPopusoi,
  GeorgeMarianMorosac,
} from '~/services/contributors';

import SEOTags from '~/components/SEOTags';
import { withClientMonitoring } from '~/services/Hooks';

function EventDetailsPage() {
  withClientMonitoring();
  return (
    <>
      <SEOTags
        title="Evenimente | FrontEnd.ro"
        shareImage="https://frontend.ro/learn-seo-image.jpg"
        description="Participe la cele mai faine evenimente susținute de comunitatea Frontend.ro"
        url="https://FrontEnd.ro/detaliu-eveniment"
      />
      <Header />

      <main>
        <EventDetails
          title="Introducere practică în Git & GitHub pentru toți"
          description="
          În tutorialul pe care l-am creat cu mult drag pentru cei care vor să afle mai multe despre ce înseamnă să utilizezi Git și GitHub, vom discuta despre diferențele dintre cele două, dar și cum să le folosim.
          Foarte pe scurt: multă lume nu știe că git și GitHub nu sunt același lucru. Git este un instrument open-source, de control al versiunilor creat în 2005 de dezvoltatorii care lucrează la sistemul de operare Linux; GitHub este o companie fondată în 2008 care realizează instrumente care se integrează cu git. Nu avem nevoie de GitHub pentru a utiliza git, dar nu putem utiliza GitHub fără git.
          "
          url="Online via Zoom"
          cover="/images/lessons/git__cover.svg"
          agendaTitles={[{ nrCrt: '1', title: 'test' }]}
          contributors={[Pava, CatalinPopusoi, GeorgeMarianMorosac]}
          date="14 Martie 2020"
          optionsDateAndHour={[
            {
              value: '14 Martie 2020 / 14: 30',
              label: '14 Martie 2020 / 14: 30',
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}

export default EventDetailsPage;
