import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import LessonHeading from '../LessonHeading/LessonHeading';
import LessonExerciseService from '~/services/LessonExercise.service';
import { LessonExercise } from '~/redux/user/types';

import styles from './LessonExercises.module.scss';
import Spinner from '~/components/Spinner';
import ExercisePreview from '~/components/ExercisePreview';
import SubmissionService from '~/services/Submission.service';

function LessonExercises({ lessonId }: { lessonId: string }) {
  const [exercises, setExercises] = useState<LessonExercise[]>(undefined);

  useEffect(() => {
    LessonExerciseService
      .getAllExercisesForLessons(lessonId)
      .then((exercises) => setExercises(exercises))
      .catch((err) => {
        console.error('[LessonExercises.useEffect]', err);
        setExercises([]);
      });
  }, []);

  if (!Array.isArray(exercises)) {
    return (
      <div id="exercitii" className={styles.exercises}>
        <Spinner showText />
      </div>
    );
  }

  return (
    <div className={`${styles.exercises} ${exercises.length === 0 ? styles['exercises--empty'] : ''}`}>
      <section>
        <LessonHeading as="h3" id="exercitii">
          Exerciții
        </LessonHeading>

        {exercises.length > 0 ? (
          <div className={styles['exercises-wrapper']}>
            {exercises.map((ex) => (
              <ExercisePreview
                key={ex._id}
                exercise={ex}
                isPrivate={false}
                feedbackCount={ex.feedbackCount}
                isApproved={ex.isApproved}
                viewMode="STUDENT"
                readOnly={false}
                href={`/rezolva/${ex._id}`}
              />
            ))}
          </div>
        ) : (
          <p className="mb-0">
            <strong> În curând vom adăuga exerciții </strong>
            {' '}
            la această lecție.
            Până atunci poți să rezolvi celelalte
            {' '}
            <Link href="/exercitii">
              <a className="text-bold">
                exerciții disponibile
              </a>
            </Link>
            .
          </p>
        )}
      </section>
    </div>
  );
}

export default LessonExercises;
