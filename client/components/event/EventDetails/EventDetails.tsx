import React from 'react';

import { EventDescription } from '~/services/Constants';
import { formatDate } from '~/services/Utils';
import TemplateRegisterEvent from '../TemplateRegisterEvent';

import styles from './EventDetails.module.scss';

export default function EventDetails({
  title,
  cover,
  description,
  agendaTitles,
  contributors,
}: EventDescription) {
  let dateToFormat = formatDate(new Date('Sun Mar 14 2021'));
  return (
    <section className={styles['wrapper-event-details']}>
      <h1>
        {title}
      </h1>
      <div className="d-flex justify-content-between align-items-center">
        <p className={`${styles.description} my-5`}>{description}</p>
        <div
          className={`${styles.cover}`}
          style={{
            backgroundImage: `url(${cover})`,
          }}
        />
      </div>

      <div className={styles.agenda}>
        <h2>Agenda</h2>
        <ul>
          {agendaTitles.map((agenda) => (
            <li key={agenda.nrCrt} className="d-flex">
              <span className={styles['nr-crt']}>{`#${agenda.nrCrt}`}</span>
              <p>{agenda.title}</p>
              {' '}
            </li>
          ))}
        </ul>
      </div>
      <TemplateRegisterEvent
        title="Introducere practică în Git & GitHub pentru toți"
        cover="../images/lessons/git__cover.svg"
        description="Înscrie-te și anunță-i și pe colegi! Acest curs include si un proiect interactiv unde puteți colabora."
        url="Online via Zoom"
        date={dateToFormat}
        optionsDateAndHour={[
          { value: `${dateToFormat} / 14:30`, label: `${dateToFormat} / 14:30` },
        ]}
      />
      <ul className={`${styles['lesson-contributors']} d-flex justify-content-between text-center my-5`}>
        {contributors.map((contributor) => (
          <li
            key={contributor.url}
          >
            <a href={contributor.url}>
              <img width="150" alt={`${contributor.name} avatar`} src={contributor.avatar} />
              <p>
                {contributor.name}
              </p>
              <p>{contributor.bio}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
