import React, { useState, useEffect } from 'react';
import Link from '~/components/generic/Link';
import { ConnectedProps, connect } from 'react-redux';
import LessonExerciseService from '~/services/api/LessonExercise.service';
import { LessonExercise } from '~/redux/user/types';
import ExercisePreview from '~/components/ExercisePreview';
import { RootState } from '~/redux/root.reducer';
import { Submission } from '~/redux/exercise-submissions/types';
import { SubmissionStatus } from '~/../shared/types/submission.types';
import SubmissionService from '~/services/api/Submission.service';
import { SkeletonRect } from '~/components/SkeletonScreens';

import styles from './LessonExercises.module.scss';

interface Props {
  lessonId: string
  tutorialId?: string;
}

function LessonExercises({ user, lessonId, tutorialId }: Props & ConnectedProps<typeof connector>) {
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
      SubmissionService
        .getOwnSubmissions()
        .then((resp) => setSubmissions(resp))
        .catch((err) => console.error(err));
    } else {
      setSubmissions([]);
    }
  }, [lessonId, user.info?.username]);

  const mergedData: Submission[] = [];

  if (exercises) {
    exercises.forEach((ex) => {
      const matchedSubmission = submissions?.find((sub) => sub.exercise._id === ex._id);

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
      {isFetching && (
        <div className={styles['exercises-wrapper']}>
          {new Array(3).fill('').map((_, index) => (
            <SkeletonRect
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              height="350px"
              className={`${styles.SkeletonRect} rounded-md`}
            />
          ))}
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
              href={tutorialId === undefined
                ? `/rezolva/${sub.exercise._id}`
                // TODO: change to /html when finishing the integration
                : `/${tutorialId}/tutorial/${lessonId}/exercitii/${sub.exercise._id}`}
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
          <Link prefetch={false} className="text-bold" href="/exercitii">
            exerciții disponibile
          </Link>
          .
        </p>
      ))}
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
