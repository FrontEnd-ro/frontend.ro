import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Submission } from '~/redux/exercise-submissions/types';
import { Exercise } from '~/redux/user/types';
import { getLessonById } from '~/services/Constants';
import ExerciseService from '~/services/Exercise.service';
import LessonExerciseService from '~/services/LessonExercise.service';
import ExercisePreview from '../ExercisePreview';
import PageContainer from '../PageContainer';
import Spinner from '../Spinner';
import { SUBMISSION_STATUS } from '~/../shared/SharedConstants';
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

  // merge submission & exercise data to show
  // ExercisePreview component together with submitted/preview data
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
        Rezolvă exercițiile de mai jos iar noi îți vom trimite feedback
        pentru fiecare.
      </p>
      {(!lessonExercises || !submissions) && <Spinner showText text="Încărcăm exercițiile" />}
      {Object.keys(mergedData).map((lesson) => (
        <section className={styles['lesson-section']}>
          <h2>
            <span>
              {getLessonById(lesson).type}
            </span>
            {getLessonById(lesson).title}
          </h2>
          <div className={styles['exercises-wrapper']}>
            {mergedData[lesson].map((submission) => (
              <ExercisePreview
                key={submission._id}
                exercise={submission.exercise}
                href={`rezolva/${submission.exercise._id}`}
                viewMode="STUDENT"
                feedbackCount={submission.feedbacks.filter((f) => f.type === 'improvement').length}
                isApproved={submission.status === SUBMISSION_STATUS.DONE}
                readOnly={[
                  SUBMISSION_STATUS.AWAITING_REVIEW,
                  SUBMISSION_STATUS.DONE,
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
