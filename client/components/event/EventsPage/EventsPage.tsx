import React from 'react';
import {
  faCalendarCheck,
  faCheck,
  faHourglassHalf,
  faUserAstronaut,
  faUserNinja,
} from '@fortawesome/free-solid-svg-icons';
import { faSlideshare } from '@fortawesome/free-brands-svg-icons';
import PlatformStats from '~/components/PlatformStats';
import PageContainer from '~/components/PageContainer';
import { SubscribeFormWithText } from '~/components/SubscribeForm';
import RegisterEventCard from '../RegisterEventCard';

import styles from './EventsPage.module.scss';

export default function Event() {
  const description = 'Hai să descoperim și să punem în practică cele mai importante concepte și comenzi din Git, ce te vor ajuta să colaborezi mai bine în echipă.';
  const stats = [
    { icon: faCalendarCheck, counter: 2, description: 'workshop-uri practice' },
    { icon: faUserAstronaut, counter: 11, description: 'frontend-eri curioși' },
    { icon: faUserNinja, counter: 4, description: 'traineri pasionați' },
    { icon: faHourglassHalf, counter: 7, description: 'ore de training' },
    { icon: faSlideshare, counter: 38, description: 'slide-uri' },
    { icon: faCheck, counter: 33, description: 'challenge-uri practice' },
  ];
  return (
    <>
      <PageContainer className={styles['events-page']}>
        <h1>Evenimente</h1>
        <p className={styles.description}> Participă la evenimentele comunității FrontEnd.ro </p>
        <SubscribeFormWithText>
          <h2>
            Deocamdată nu avem traininguri programate
          </h2>
          <p className="text-xl">
            Însă cu siguranță vom mai organiza în viitor, deci dacă vrei să fii primul care află
            despre ele abonează-te aici 👉
          </p>
        </SubscribeFormWithText>
        <div className="dots" />
        <h2> Evenimente trecute</h2>
        <RegisterEventCard
          id="git-incepatori"
          title="Introducere practică în Git & GitHub pentru începători"
          description={description}
          url="/evenimente/git-incepatori"
          cover={`${process.env.CLOUDFRONT_PUBLIC}/events/git__cover.svg`}
          location="Online via Zoom"
          duration="2.5h"
          eventDates={[
            { timestamp: 1615708800000, label: '14 Martie | 10:00' },
          ]}
        />
      </PageContainer>
      <PlatformStats stats={stats} />
    </>
  );
}
