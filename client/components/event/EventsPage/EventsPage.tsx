import React from 'react';
import PageContainer from '~/components/PageContainer';
import RegisterEventCard from '../RegisterEventCard';

import styles from './EventsPage.module.scss';

export default function Event() {
  const description = 'Hai să descoperim și să punem în practică cele mai importante concepte și comenzi din Git, ce te vor ajuta să colaborezi mai bine în echipă.';

  return (
    <PageContainer className={styles['events-page']}>
      <h1>Evenimente</h1>
      <p className={styles.description}> Participă la evenimentele comunității FrontEnd.ro </p>

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
  );
}
