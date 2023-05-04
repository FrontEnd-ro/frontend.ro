import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import ExercisePreview from '~/components/ExercisePreview';
import PageContainer from '~/components/PageContainer';
import { Submission } from '~/redux/exercise-submissions/types';
import { RootState } from '~/redux/root.reducer';
import NoActivity from '../NoActivity/NoActivity';
import { API_SubmissionI, SubmissionStatus } from '~/../shared/types/submission.types';
import styles from './UserActivity.module.scss';
import { API_TutorialProgressI } from '~/../shared/types/tutorial.types';
import TutorialService from '~/services/api/Tutorial.service';
import TutorialProgress from './TutorialProgress/TutorialProgress';
import { aggregateTutorialProgress } from '~/services/Utils';
import { API_UserI, UserRole } from '~/../shared/types/user.types';
import Link from '~/components/generic/Link';
import SubmissionService from '~/services/api/Submission.service';
import LessonExerciseService from '~/services/api/LessonExercise.service';
import { API_LessonExerciseI } from '~/../shared/types/lesson-exercise.types';

interface Props {
  profileUser: API_UserI;
}

function UserActivity({ profileUser, currentUser }: ConnectedProps<typeof connector> & Props) {
  const isOwnProfile = currentUser.info && currentUser.info.username === profileUser.username;
  const [didError, setDidError] = useState(false);
  const [submissions, setSubmissions] = useState<API_SubmissionI[]>(undefined);
  const [tutorialsProgress, setTutorialsProgress] = useState<API_TutorialProgressI[]>(undefined);

  const fetchTutorialsProgress = async () => {
    try {
      const tutorials = await TutorialService.getAll();
      const progressResponses = await Promise.all(tutorials.map((tutorial) => {
        return TutorialService.getProgress(tutorial.tutorialId);
      }));

      setTutorialsProgress(progressResponses);
    } catch (err) {
      console.error('UserActivity.fetchTutorialsProgress', err);
      setDidError(true);
    }
  };

  useEffect(() => {
    // Solved exercises
    if (isOwnProfile) {
      SubmissionService
        .getOwnSubmissions()
        .then((resp) => setSubmissions(resp))
        .catch((err) => console.error(err));

      fetchTutorialsProgress();
    } else {
      setSubmissions([]);
      setTutorialsProgress([]);
    }
  }, []);

  if (didError) {
    return (
      <p className="text-red text-center">
        Oops! Nu am putut încărca profilul.
        <br />
        Încearcă din nou.
      </p>
    );
  }

  if (!submissions || !tutorialsProgress) {
    // Loading
    return null;
  }

  if (!isOwnProfile) {
    return <NoActivity user={profileUser} />;
  }

  return (
    <PageContainer>
      <section className="mb-12">
        <h2> Tutoriale </h2>
        {tutorialsProgress
          .map(aggregateTutorialProgress)
          .map((aggregatedProgress, index) => (
            <div
              key={tutorialsProgress[index].name}
              className={`${styles['progress-wrapper']} p-3`}
            >
              <TutorialProgress
                title={tutorialsProgress[index].name}
                tutorialProgress={tutorialsProgress[index]}
              />

              {aggregatedProgress.done < aggregatedProgress.total && (
                <Link
                  color="white"
                  prefetch={false}
                  variant="contained"
                  href={`/${tutorialsProgress[index].tutorialId}/tutorial`}
                  className="d-inline-block mt-4"
                >
                  {(
                    aggregatedProgress.done === 0
                    && aggregatedProgress.inProgress === 0
                  )
                    ? 'Începe tutorialul'
                    : 'Continuă'}
                </Link>
              )}

              {/* TODO: https://github.com/FrontEnd-ro/frontend.ro/issues/512 */}
              {/* {aggregatedProgress.done === aggregatedProgress.total && (
                <Link href="#" className="btn btn--light no-underline mt-4">
                  Vezi certificarea
                </Link>
              )} */}
            </div>
          ))}
      </section>
      <h2>
        Exerciții rezolvate
      </h2>
      <div className={styles['exercises-wrapper']}>
        {submissions.map((submission: API_SubmissionI) => (
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
        {submissions.length === 0 && (
          <Link prefetch={false} href="/exercitii" className="d-flex align-items-center justify-content-center no-underline text-center">
            <FontAwesomeIcon icon={faPlus} width="32" height="32" />
            <span> Rezolvă un exercițiu </span>
          </Link>
        )}
      </div>
      <hr />
      {isOwnProfile && currentUser.info.role.includes(UserRole.ADMIN) && (
        <AllExercises />
      )}
    </PageContainer>
  );
}

const AllExercises = () => {
  const [createdExercises, setCreatedExercises] = useState<API_LessonExerciseI[]>([]);

  useEffect(() => {
    LessonExerciseService
      .getAllLessonExercises()
      .then((exercises) => {
        setCreatedExercises(exercises);
      })
      .catch((err) => {
        console.error('[CreatedExercises.getCreatedExercises] Failed to get exercises.', err);
      });
  }, []);

  return (
    <section>
      <h2> Toate exercițiile din platformă </h2>
      <div className={styles['exercises-wrapper']}>
        {createdExercises.map((ex) => (
          <ExercisePreview
            key={ex._id}
            exercise={ex}
            href={`exercitii/${ex._id}`}
            viewMode="TEACHER"
            feedbackCount={0}
            isApproved={false}
            readOnly={false}
          />
        ))}
        <Link prefetch={false} href="/exercitii/creeaza" className="d-flex align-items-center justify-content-center no-underline text-center">
          <FontAwesomeIcon icon={faPlus} width="32" height="32" />
          <span> Creează un nou exercițiu </span>
        </Link>
      </div>
    </section>
  );
};

function mapStateToProps(state: RootState) {
  return {
    currentUser: state.user,
  };
}

const connector = connect(mapStateToProps);

export default connector(UserActivity);
