import React from 'react';
import Diploma from '../Diploma/Diploma';
import Link from '~/components/generic/Link';
import ExercisePreview from '~/components/ExercisePreview';
import { WIPPopulatedCertificationI } from '~/../shared/types/certification.types';

import styles from './Certification.module.scss';
import List from '~/components/List';

const Certification = ({ certification }: { certification: WIPPopulatedCertificationI }) => {
  const nameOrUsername = certification.user.name ?? certification.user.username;

  return (
    <section className={styles.Certification}>
      <Diploma
        student={certification.user}
        tutorial={certification.tutorial}
        certification={{
          date: new Date(certification.timestamp),
          exerciseCount: certification.lesson_exercises.length,
          url: `/certificari/${certification._id}`,
          pdf: certification.pdf,
        }}
      />
      <p className="mt-8 mb-12 text-2xl font-light">
        <Link href={`/${certification.user.username}`}>
          {nameOrUsername}
        </Link>
        {' '}
        a rezolvat cu succes toate cele
        {' '}
        <span className="text-bold">
          {certification.lesson_exercises.length}
          {' '}
          exerciții
        </span>
        {' '}
        ale acestui modul. Fiecare exercițiu a fost
        trimis prin platforma
        {' '}
        <Link href="/">
          FrontEnd.ro
        </Link>
        {' '}
        și evaluat de echipa noastră.
      </p>
      <h2>
        Exerciții rezolvate corect de
        {' '}
        {nameOrUsername}
      </h2>
      <List className={styles['exercise-list']}>
        {certification.lesson_exercises.map((lessonExercise) => (
          <li key={lessonExercise._id}>
            <ExercisePreview
              exercise={lessonExercise}
              isPrivate={false}
              viewMode="STUDENT"
              feedbackCount={0}
              isApproved={false}
              readOnly={false}
              href={`/rezolva/${lessonExercise._id}`}
            />
          </li>
        ))}
      </List>
    </section>
  );
};

export default Certification;
