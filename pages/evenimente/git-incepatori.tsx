import React from 'react';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import EventDetails from '~/components/event/EventDetails';
import {
  Pava2,
  CatalinPopusoi,
  GeorgeMarianMorosac,
} from '~/services/contributors';

import SEOTags from '~/components/SEOTags';
import { LessonTip } from '~/components/lessons';
import { SubscribeFormWithText } from '~/components/SubscribeForm';

function EventDetailsPage() {
  const title = 'Introducere practică în Git & GitHub pentru toți';
  const description = 'Hai să descoperim și să punem în practică cele mai importante concepte și comenzi din Git & GitHub.';

  return (
    <>
      <SEOTags
        title={`${title} | FrontEnd.ro`}
        shareImage={`${process.env.CLOUDFRONT_PUBLIC}/seo/intro-to-git-training.jpg`}
        description={description}
        url="https://FrontEnd.ro/evenimente/git-incepatori"
      />
      <Header withNavMenu />

      <EventDetails
        id="git-incepatori"
        duration="2.5h"
        location="Online via Zoom"
        contributors={[Pava2, CatalinPopusoi, GeorgeMarianMorosac]}
        title="Introducere practică în Git & GitHub pentru începători"
        cover={`${process.env.CLOUDFRONT_PUBLIC}/events/git__cover.svg`}
        eventDates={[{ timestamp: 1615708800000, label: '14 Martie | 10:00' }]}
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
        <ol className="with--checkmark">
          <li> De ce Git?</li>
          <li> Git clients (CLI și aplicații desktop)</li>
          <li> Ce e un "repo" și cum creem unul?</li>
          <li> Ce sunt branch-urile si de ce vrem să le folosim?</li>
          <li>
            <span> Comenzile de bază </span>
            <ul className="with--bullets">
              <li> clone</li>
              <li> status</li>
              <li> add </li>
              <li> commit</li>
              <li> log</li>
              <li> push</li>
            </ul>
          </li>
          <li> Ce e un "pull-request" si cum creem unul? </li>
          <li> Rezolvarea conflictelor la merge </li>
        </ol>

        <p className="my-5">
          Am limitat
          {' '}
          <strong>numărul de participanți la 12</strong>
          {' '}
          pentru că vrem să avem timp pentru fiecare
          dintre voi.
          Din motive similare am ales și o
          {' '}
          <strong>
            zi de Weekend pentru
            desfășurare
          </strong>
          {' '}
          - ca să fim cu toții fresh și gata de treabă! 💪
        </p>
        <SubscribeFormWithText>
          <h2>
            Deocamdată nu avem alt training de Git programat
          </h2>
          <p className="text-xl">
            Însă ne dorim să mai organizăm. Deci, dacă vrei să fii primul care află
            despre ele, abonează-te aici 👉

          </p>
        </SubscribeFormWithText>
      </EventDetails>
      <Footer />
    </>
  );
}

export default EventDetailsPage;
