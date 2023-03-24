import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import ExercisePreview from '~/components/ExercisePreview';
import PageContainer from '~/components/PageContainer';
import { Submission } from '~/redux/exercise-submissions/types';
import { RootState } from '~/redux/root.reducer';
import { UserState } from '~/redux/user/types';
import ExerciseService from '~/services/api/Exercise.service';
import NoActivity from '../NoActivity/NoActivity';
import { SubmissionStatus } from '~/../shared/types/submission.types';
import styles from './UserActivity.module.scss';
import { TutorialProgressI } from '~/../shared/types/tutorial.types';
import TutorialService from '~/services/api/Tutorial.service';
import TutorialProgress from './TutorialProgress/TutorialProgress';
import { aggregateTutorialProgress } from '~/services/Utils';
import { UserRole } from '~/../shared/types/user.types';
import Link from '~/components/generic/Link';

interface Props {
  profileUser: UserState['info']
}

function UserActivity({ profileUser, currentUser }: ConnectedProps<typeof connector> & Props) {
  const isOwnProfile = currentUser.info && currentUser.info.username === profileUser.username;
  const [didError, setDidError] = useState(false);
  const [solvedExercises, setSolvedExercises] = useState<Submission[]>(undefined);
  const [tutorialsProgress, setTutorialsProgress] = useState<TutorialProgressI[]>(undefined);

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
      ExerciseService
        .getSolvedExercises()
        .then((resp) => setSolvedExercises(resp))
        .catch((err) => console.error(err));

      fetchTutorialsProgress();
    } else {
      setSolvedExercises([]);
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

  if (!solvedExercises || !tutorialsProgress) {
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
        {solvedExercises.map((submission: Submission) => (
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
        {solvedExercises.length === 0 && (
          <Link prefetch={false} href="/exercitii" className="d-flex align-items-center justify-content-center no-underline text-center">
            <FontAwesomeIcon icon={faPlus} width="32" height="32" />
            <span> Rezolvă un exercițiu </span>
          </Link>
        )}
      </div>
      <hr />
      {isOwnProfile && profileUser.role.includes(UserRole.ADMIN) && (
        <CreatedExercises />
      )}
    </PageContainer>
  );
}

// Only show this component for Logged In Admin Users
const CreatedExercises = () => {
  const [createdExercises, setCreatedExercises] = useState([]);

  useEffect(() => {
    ExerciseService
      .getCreatedExercises()
      .then((exercises) => {
        setCreatedExercises(exercises);
      })
      .catch((err) => {
        console.error('[CreatedExercises.getCreatedExercises] Failed to get exercises.', err);
      });
  }, []);

  return (
    <section>
      <h2> Exerciții create </h2>
      <div className={styles['exercises-wrapper']}>
        {createdExercises.map((ex) => (
          <ExercisePreview
            key={ex._id}
            exercise={ex}
            href={`exercitii/${ex._id}`}
            isPrivate={ex.private}
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
