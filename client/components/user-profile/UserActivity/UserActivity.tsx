import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import ExercisePreview from '~/components/ExercisePreview';
import PageContainer from '~/components/PageContainer';
import { Submission } from '~/redux/exercise-submissions/types';
import { RootState } from '~/redux/root.reducer';
import { UserState } from '~/redux/user/types';
import ExerciseService from '~/services/Exercise.service';
import NoActivity from '../NoActivity/NoActivity';
import { SubmissionStatus } from '~/../shared/types/submission.types';
import styles from './UserActivity.module.scss';
import { TutorialProgressI } from '~/../shared/types/tutorial.types';
import TutorialService from '~/services/api/Tutorial.service';
import TutorialProgress from './TutorialProgress/TutorialProgress';

interface Props {
  profileUser: UserState['info']
}

function UserActivity({ profileUser, currentUser }: ConnectedProps<typeof connector> & Props) {
  const isOwnProfile = currentUser.info && currentUser.info.username === profileUser.username;
  const [didError, setDidError] = useState(false);
  const [solvedExercises, setSolvedExercises] = useState<Submission[]>(undefined);
  const [createdExercises, setCreatedExercises] = useState(undefined);
  const [tutorialsProgress, setTutorialsProgress] = useState<TutorialProgressI[]>(undefined);

  const fetchTutorialsProgress = async () => {
    try {
      const tutorials = await TutorialService.getAll();
      const progressResponses = await Promise.all(tutorials.map((tutorial) => {
        return TutorialService.getProgress(tutorial.name);
      }));

      setTutorialsProgress(progressResponses);
    } catch (err) {
      console.error('UserActivity.fetchTutorialsProgress', err);
      setDidError(true);
    }
  };

  const aggregateTutorialProgress = (tutorialProgress: TutorialProgressI) => {
    const aggregate = {
      done: 0,
      inProgress: 0,
      total: 0,
    };

    tutorialProgress.lessons.forEach((lesson) => {
      aggregate.done += lesson.progress.done;
      aggregate.inProgress += lesson.progress.inProgress;
      aggregate.total += lesson.progress.total;
    });

    return {
      name: tutorialProgress.name,
      progress: aggregate,
    };
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

    // Created exercises
    const createdExercisesPromise = isOwnProfile
      ? ExerciseService.getCreatedExercises()
      : ExerciseService.getPublicCreatedExercises(profileUser.username);

    createdExercisesPromise.then((resp) => {
      setCreatedExercises(resp);
    }).catch((err) => {
      console.error(err);
    });
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

  if (!createdExercises || !solvedExercises || !tutorialsProgress) {
    // Loading
    return null;
  }

  if (createdExercises.length === 0 && !isOwnProfile) {
    return <NoActivity user={profileUser} />;
  }

  return (
    <PageContainer>
      <section className="mb-12">
        <h2> Tutoriale </h2>
        {tutorialsProgress
          .map(aggregateTutorialProgress)
          .map((aggregatedProgress) => (
            <div
              key={aggregatedProgress.name}
              className={`${styles['progress-wrapper']} p-3`}
            >
              <TutorialProgress
                title={aggregatedProgress.name.toUpperCase()}
                items={[
                  { description: 'Rezolvate', count: aggregatedProgress.progress.done, color: 'var(--green)' },
                  { description: 'În progres', count: aggregatedProgress.progress.inProgress, color: 'var(--yellow)' },
                  {
                    description: 'Neîncepute',
                    count: aggregatedProgress.progress.total
                      - (aggregatedProgress.progress.done + aggregatedProgress.progress.inProgress),
                    color: 'var(--grey)',
                  },
                ]}
                total={aggregatedProgress.progress.total}
              />

              {aggregatedProgress.progress.done < aggregatedProgress.progress.total && (
                <Link href={`/${aggregatedProgress.name}`}>
                  <a className="btn btn--light no-underline mt-4">
                    {(
                      aggregatedProgress.progress.done === 0
                      && aggregatedProgress.progress.inProgress === 0
                    )
                      ? 'Începe tutorialul'
                      : 'Continuă'}
                  </a>
                </Link>
              )}

              {/* TODO: https://github.com/FrontEnd-ro/frontend.ro/issues/512 */}
              {/* {aggregatedProgress.progress.done === aggregatedProgress.progress.total && (
                <Link href="#">
                  <a className="btn btn--light no-underline mt-4">
                    Vezi certificarea
                  </a>
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
          <Link href="/exercitii">
            <a className="d-flex align-items-center justify-content-center no-underline text-center">
              <FontAwesomeIcon icon={faPlus} width="32" height="32" />
              <span> Rezolvă un exercițiu </span>
            </a>
          </Link>
        )}
      </div>
      <hr />
      <h2> Exerciții create </h2>
      <div className={styles['exercises-wrapper']}>
        {createdExercises.map((ex) => (
          <ExercisePreview
            key={ex._id}
            exercise={ex}
            href={`exercitii/${ex._id}`}
            isPrivate={ex.private}
            viewMode={isOwnProfile ? 'TEACHER' : 'STUDENT'}
            feedbackCount={0}
            isApproved={false}
            readOnly={false}
          />
        ))}
        {isOwnProfile && (
          <Link href="/exercitii/creeaza">
            <a className="d-flex align-items-center justify-content-center no-underline text-center">
              <FontAwesomeIcon icon={faPlus} width="32" height="32" />
              <span> Creează un nou exercițiu </span>
            </a>
          </Link>
        )}

      </div>
    </PageContainer>
  );
}

function mapStateToProps(state: RootState) {
  return {
    currentUser: state.user,
  };
}

const connector = connect(mapStateToProps);

export default connector(UserActivity);
