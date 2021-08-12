import React from 'react';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import EventDetails from '~/components/event/EventDetails';
import {
  Pava2,
  CatalinPopusoi,
  GeorgeMarianMorosac,
  Diana,
} from '~/services/contributors';

import SEOTags from '~/components/SEOTags';
import { LessonTip } from '~/components/lessons';
import { SubscribeFormWithText } from '~/components/SubscribeForm';
import { EventDate } from '~/components/event/RegisterEventCard';
import List from '~/components/List';

function EventDetailsPage() {
  const title = 'Introducere practică în Git & GitHub pentru toți';
  const description = 'Hai să descoperim și să punem în practică cele mai importante concepte și comenzi din Git & GitHub.';
  const eventDates: EventDate[] = [{
    parts: [
      { timestamp: 1618038000000, label: '10 Aprilie, ora 10:00' },
      { timestamp: 1618729200000, label: '18 Aprilie, ora 10:00' },
    ],
  }];

  const isPastEvent = eventDates.every((eventDate) => eventDate.parts[0].timestamp < Date.now());
  return (
    <>
      <SEOTags
        title={`${title} | FrontEnd.ro`}
        shareImage={`${process.env.CLOUDFRONT_PUBLIC}/seo/git-incepatori-2.jpg`}
        description={description}
        url="https://FrontEnd.ro/evenimente/git-incepatori"
      />
      <Header withNavMenu />

      <EventDetails
        id="git-incepatori-2"
        duration="3h"
        location="Online via Zoom"
        contributors={[Pava2, CatalinPopusoi, GeorgeMarianMorosac, Diana]}
        title="Introducere practică în Git & GitHub pentru începători"
        cover={`${process.env.CLOUDFRONT_PUBLIC}/events/git__cover.svg`}
        eventDates={eventDates}
      >
        <p>
          Dacă nu ai lucrat deloc în Git sau ești încă la început,
          atunci hai să învățăm și să exersăm împreună
          conceptele de bază.
        </p>

        <LessonTip>
          Folosit de toți programatorii din lume
          (indiferent de limbajul pe care lucrează) -
          {' '}
          <a href="">Git</a>
          {' '}
          este un program ce ușurează colaborarea între developeri și
          face posibil proiecte la care să lucreze simultan
          zeci de mii de oameni.
        </LessonTip>
        <p>
          Aceasta nu este o prezentare ci un
          {' '}
          <strong>training practic</strong>
          , unde vom învăța despre:
        </p>
        <List as="ol" variant="checkmark">
          <li> De ce Git?</li>
          <li> Git clients (CLI și aplicații desktop)</li>
          <li> Ce e un "repo" și cum creem unul?</li>
          <li> Ce sunt branch-urile si de ce vrem să le folosim?</li>
          <li>
            <span> Git în contextul VSCode  </span>
            <List variant="bullets">
              <li> clone</li>
              <li> commit & push </li>
              <li> checkout & merge </li>
            </List>
          </li>
          <li>
            <span> Git CLI (command line interface) </span>
            <List variant="bullets">
              <li> clone</li>
              <li> status</li>
              <li> add </li>
              <li> commit</li>
              <li> log</li>
              <li> push</li>
            </List>
          </li>
          <li> Ce e un "pull-request" si cum creem unul? </li>
          <li> Rezolvarea conflictelor la merge </li>
        </List>

        <p>
          PS: Trainingul se desfășoară pe
          {' '}
          <strong>
            parcursul a 2 weekend-uri
          </strong>
          {' '}
          pentru a avea destul timp să punem în practică ce vom învăța.
          De asemenea, am limitat
          {' '}
          <strong>numărul de participanți la 12</strong>
          {' '}
          pentru că vrem să avem timp pentru fiecare
          dintre voi, deci înscrie-te "cât e cald"!
        </p>
        {isPastEvent && (
        <SubscribeFormWithText>
          <h2>
            Deocamdată nu avem alt training de Git programat
          </h2>
          <p className="text-xl">
            Însă ne dorim să mai organizăm. Deci, dacă vrei să fii primul care află
            despre ele, abonează-te aici 👉

          </p>
        </SubscribeFormWithText>
        )}
      </EventDetails>
      <Footer />
    </>
  );
}

export default EventDetailsPage;
