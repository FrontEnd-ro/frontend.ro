import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Link from 'next/link';
import { Submission } from '~/redux/exercise-submissions/types';
import { Exercise } from '~/redux/user/types';
import { LESSONS } from '~/services/Constants';
import ExerciseService from '~/services/Exercise.service';
import LessonExerciseService from '~/services/LessonExercise.service';
import ExercisePreview from '../ExercisePreview';
import PageContainer from '../PageContainer';
import Spinner from '../Spinner';
import { SubmissionStatus } from '~/../shared/types/submission.types';
import { RootState } from '~/redux/root.reducer';

import styles from './ExercisesPage.module.scss';

function ExercisesPage({ user }: ConnectedProps<typeof connector>) {
  const [submissions, setSubmissions] = useState<Submission[]>(undefined);
  const [lessonExercises, setLessonExercises] = useState<Exercise[]>(undefined);

  const isLoggedIn = !!user.info;

  useEffect(() => {
    LessonExerciseService
      .getAllLessonExercises()
      .then((exercises) => setLessonExercises(exercises))
      .catch((err) => console.error(err));

    if (isLoggedIn) {
      ExerciseService
        .getSolvedExercises()
        .then((resp) => setSubmissions(resp))
        .catch((err) => console.error(err));
    } else {
      setSubmissions([]);
    }
  }, []);

  // Merge submissions & exercise data to show
  // the <ExercisePreview> component complete with
  // user context (ie: exercise status, no of feedbacks, etc)
  const mergedData = {};
  if (submissions && lessonExercises) {
    lessonExercises.forEach((ex) => {
      const { lesson } = ex;
      const matchedSubmission = submissions.find((sub) => sub.exercise._id === ex._id);

      mergedData[lesson] = mergedData[lesson] || [];
      if (matchedSubmission) {
        mergedData[lesson].push(matchedSubmission);
      } else {
        mergedData[lesson].push({
          _id: ex._id,
          exercise: ex,
          feedbacks: [],
          status: null,
          readOnly: false,
        });
      }
    });
  }

  return (
    <PageContainer className={styles['exercises-page']}>
      <h1> Exerciții </h1>
      <p>
        Lecțiile și tutorialale de programare sunt un bun prim pas pentru
        a învăța, dar noi credem că mai important este
        <strong> să codezi și să primești feedback </strong>
        la rezolvările tale.
        Ăsta a fost procesul fiecăruia dintre noi
        la începutul carierei, când am avut un mentor în cadrul echipei
        ce ne-a ajutat cu sfaturi și code-review.
      </p>
      <p>
        De aceea, pentru fiecare
        {' '}
        <Link href="lectii">
          <a>
            lecție
          </a>
        </Link>
        {' '}
        am adăugat câteva exerciții pe care te încurajăm să le rezolvi. Apoi,
        {' '}
        <strong>
          trimite-ne rezolvările
        </strong>
        {' '}
        chiar aici pe platformă, iar noi îți vom oferi feedback
        pentru fiecare.
      </p>
      <p className="text-right">
        PS: dacă ești curios să afli mai multe despre noi și de ce facem asta,
        aruncă un ochi
        {' '}
        <Link href="/intro/despre-noi">
          <a>
            aici
          </a>
        </Link>
      </p>
      {(!lessonExercises || !submissions) && (<Spinner showText text="Încărcăm exercițiile" />)}
      {LESSONS
        .filter((lesson) => mergedData.hasOwnProperty(lesson.id))
        .map((lesson) => (
          <section className={styles['lesson-section']}>
            <h2>
              <span>
                {lesson.type}
              </span>
              {lesson.title}
            </h2>
            <div className={styles['exercises-wrapper']}>
              {mergedData[lesson.id].map((submission) => (
                <ExercisePreview
                  key={submission._id}
                  exercise={submission.exercise}
                  href={`rezolva/${submission.exercise._id}`}
                  viewMode="STUDENT"
                  feedbackCount={submission.feedbacks.filter((f) => f.type === 'improvement').length}
                  isApproved={submission.status === SubmissionStatus.DONE}
                  readOnly={[
                    SubmissionStatus.AWAITING_REVIEW,
                    SubmissionStatus.DONE,
                  ].includes(submission.status)}
                />
              ))}
            </div>
          </section>
        ))}
    </PageContainer>
  );
}

function mapStateToProps(state: RootState) {
  return {
    user: state.user,
  };
}

const connector = connect(mapStateToProps);

export default connector(ExercisesPage);
