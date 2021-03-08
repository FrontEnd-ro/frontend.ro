import React, { PropsWithChildren } from 'react';

import PageContainer from '~/components/PageContainer';
import { Contributor } from '~/services/contributors';
import RegisterEventCard, { EventDate } from '../RegisterEventCard';

import styles from './EventDetails.module.scss';

interface Props {
  id: string;
  title: string;
  cover: string;
  duration: string;
  location: string;
  eventDates: EventDate[];
  contributors: Contributor[];
}

export default function EventDetails({
  id,
  title,
  cover,
  children,
  location,
  duration,
  eventDates,
  contributors,
}: PropsWithChildren<Props>) {
  return (
    <PageContainer>

      <section className={styles['wrapper-event-details']}>
        <h1>
          {title}
        </h1>
        <img src={cover} alt={`${title}`} className="relative" />
        {children}
        <RegisterEventCard
          id={id}
          className="my-5"
          location={location}
          duration={duration}
          eventDates={eventDates}
        />
        <h2 className="text-center"> Cine sunt trainerii? </h2>
        <ul className={`${styles['lesson-contributors']} relative d-flex justify-content-between text-center my-5`}>
          {contributors.map((contributor) => (
            <li key={contributor.url}>
              <a target="_blank" rel="noreferrer" href={contributor.url} className="no-underline">
                <img width="150" alt={`${contributor.name} avatar`} src={contributor.avatar} />
                <div>
                  <strong className="d-block">
                    {contributor.name}
                  </strong>
                  <p className="m-0">{contributor.shortBio}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </PageContainer>
  );
}
