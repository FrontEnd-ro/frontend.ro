import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ConnectedProps, connect } from 'react-redux';
import LessonHeading from '../LessonHeading/LessonHeading';
import LessonExerciseService from '~/services/LessonExercise.service';
import { LessonExercise } from '~/redux/user/types';
import Spinner from '~/components/Spinner';
import ExercisePreview from '~/components/ExercisePreview';
import { RootState } from '~/redux/root.reducer';
import { Submission } from '~/redux/exercise-submissions/types';
import { SubmissionStatus } from '~/../shared/types/submission.types';
import ExerciseService from '~/services/Exercise.service';

import styles from './LessonExercises.module.scss';

interface Props {
  lessonId: string
}

function LessonExercises({ user, lessonId }: Props & ConnectedProps<typeof connector>) {
  const isLoggedIn = !!user.info;

  const [submissions, setSubmissions] = useState<Submission[]>(undefined);
  const [exercises, setExercises] = useState<LessonExercise[]>(undefined);
  const isFetching = !Array.isArray(exercises) || !Array.isArray(submissions);

  useEffect(() => {
    LessonExerciseService
      .getAllExercisesForLessons(lessonId)
      .then((exercises) => setExercises(exercises))
      .catch((err) => {
        console.error('[LessonExercises.useEffect]', err);
        setExercises([]);
      });

    if (isLoggedIn) {
      ExerciseService
        .getSolvedExercises()
        .then((resp) => setSubmissions(resp))
        .catch((err) => console.error(err));
    } else {
      setSubmissions([]);
    }
  }, []);

  const mergedData: Submission[] = [];

  if (exercises) {
    exercises.forEach((ex) => {
      const matchedSubmission = submissions.find((sub) => sub.exercise._id === ex._id);

      if (matchedSubmission) {
        mergedData.push(matchedSubmission);
      } else {
        mergedData.push({
          code: '',
          _id: ex._id,
          exercise: ex,
          feedbacks: [],
          status: null,
          user: user.info,
          submittedAt: null,
          updatedAt: null,
        });
      }
    });
  }

  return (
    <div className={`
      ${styles.exercises}
      ${isFetching ? styles['exercises--fetching'] : ''}
      ${exercises?.length === 0 ? styles['exercises--empty'] : ''}
    `}
    >
      <section>
        <LessonHeading as="h3" id="exercitii">
          Exerciții
        </LessonHeading>

        {isFetching && (
          <div className={styles['spinner-wrapper']}>
            <Spinner showText={false} />
          </div>
        )}

        {!isFetching && (exercises.length > 0 ? (
          <div className={styles['exercises-wrapper']}>
            {mergedData.map((sub) => (
              <ExercisePreview
                key={sub.exercise._id}
                exercise={sub.exercise}
                isPrivate={false}
                feedbackCount={sub.feedbacks.filter((f) => f.type === 'improvement').length}
                isApproved={sub.status === SubmissionStatus.DONE}
                viewMode="STUDENT"
                readOnly={[
                  SubmissionStatus.AWAITING_REVIEW,
                  SubmissionStatus.DONE,
                ].includes(sub.status)}
                href={`/rezolva/${sub.exercise._id}`}
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
        ))}
      </section>
    </div>
  );
}

function mapStateToProps(state: RootState) {
  return {
    user: state.user,
  };
}

const connector = connect(mapStateToProps);

export default connector(LessonExercises);
