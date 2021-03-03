import React from 'react';

import TemplateRegisterEvent from '../TemplateRegisterEvent';
import { formatDate } from '~/services/Utils';

import styles from './EventPage.module.scss';

export default function Event() {
  let dateToFormat = formatDate(new Date('Sun Mar 14 2021'));
  return (
    <main className={styles.event}>
      <h1>Evenimente</h1>
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
    </main>
  );
}
