import React from 'react';
import SubscribeForm from '~/components/SubscribeForm';
import LessonHeading from '../LessonHeading/LessonHeading';

import styles from './LessonExercises.module.scss';

function LessonExercises() {
  return (
    <div className={styles.exercises}>
      <section>
        <LessonHeading as="h3" id="exercitii">
          Exerciții
        </LessonHeading>
        <p>
          Aprope am terminat de implementat partea de feedback iar
          {' '}
          <strong> în curând vom adăuga exerciții</strong>
          {' '}
          la toate lecțiile scrise.
        </p>
        <p>
          Dacă vrei să te anunțăm când suntem gata cu ele,
          lasă-ți email-ul mai jos și-ți dăm noi un semn:
        </p>
        <div className="text-center">
          <SubscribeForm />
        </div>
      </section>
    </div>
  );
}

export default LessonExercises;
