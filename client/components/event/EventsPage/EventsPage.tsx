import React from 'react';
import PageContainer from '~/components/PageContainer';
import RegisterEventCard from '../RegisterEventCard';
import EventsStats from './EventsStats/EventsStats';

import styles from './EventsPage.module.scss';
import { env } from '~/services/env';

export default function Event() {
  const description = 'Hai să descoperim și să punem în practică cele mai importante concepte și comenzi din Git, ce te vor ajuta să colaborezi mai bine în echipă.';

  return (
    <>
      <PageContainer className={styles['events-page']}>
        <h1>Evenimente</h1>
        <p className={styles.description}> Participă la evenimentele comunității FrontEnd.ro </p>
        <div className="dots" />
        <h2> Evenimente trecute</h2>
        <RegisterEventCard
          id="git-incepatori-2"
          title="Introducere practică în Git & GitHub pentru începători"
          description={description}
          url="/evenimente/git-incepatori"
          cover={`${env.CLOUDFRONT_PUBLIC}/events/git-2__cover.svg`}
          location="Online via Zoom"
          duration="3h"
          eventDates={[{
            parts: [
              { timestamp: 1618038000000, label: '10 Aprilie, ora 10:00' },
              { timestamp: 1618729200000, label: '18 Aprilie, ora 10:00' },
            ],
          }]}
        />
        <RegisterEventCard
          id="git-incepatori"
          title="Introducere practică în Git & GitHub pentru începători"
          description={description}
          url="/evenimente/git-incepatori"
          cover={`${env.CLOUDFRONT_PUBLIC}/events/git__cover.svg`}
          location="Online via Zoom"
          duration="2.5h"
          eventDates={[
            {
              parts: [
                { timestamp: 1615708800000, label: '14 Martie | 10:00' },
              ],
            },
          ]}
        />
      </PageContainer>
      <EventsStats />
    </>
  );
}
