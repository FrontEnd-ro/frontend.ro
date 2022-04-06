import React, { useEffect, useState } from 'react';
import Spinner from '~/components/Spinner';
import ResponsiveFlex from '~/components/ResponsiveFlex';
import ExerciseService from '~/services/Exercise.service';
import ExercisePreview from '~/components/ExercisePreview';
import TutorialService from '~/services/api/Tutorial.service';
import { Submission } from '~/redux/exercise-submissions/types';
import { TutorialProgressI } from '~/../shared/types/tutorial.types';
import { SubmissionStatus } from '~/../shared/types/submission.types';
import TutorialProgress from '~/components/user-profile/UserActivity/TutorialProgress/TutorialProgress';

import styles from './TutorialDashboard.module.scss';

const TutorialDashboard = ({ tutorialId }: { tutorialId: string }) => {
  const [didError, setDidError] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>(undefined);
  const [tutorialProgress, setTutorialProgress] = useState<TutorialProgressI>(undefined);

  const fetchTutorialProgress = async () => {
    try {
      const tutorialProgress = await TutorialService.getProgress(tutorialId);
      setTutorialProgress(tutorialProgress);
    } catch (err) {
      console.error('TutorialDashboard.fetchTutorialProgress', err);
      setDidError(true);
    }
  };

  const fetchSubmissions = async () => {
    try {
      const submissions = await ExerciseService.getSolvedExercises();
      setSubmissions(submissions);
    } catch (err) {
      console.error('TutorialDashboard.fetchSubmissions', err);
      setDidError(true);
    }
  };

  useEffect(() => {
    fetchSubmissions();
    fetchTutorialProgress();
  }, [tutorialId]);

  if (didError) {
    return (
      // TODO: extract into a re-usable <TryAgain> component
      // https://github.com/FrontEnd-ro/frontend.ro/issues/674
      <p className="text-red text-center">
        Oops! Nu am putut încărca progresul pentru acest tutorial.
        <br />
        Încearcă din nou.
      </p>
    );
  }

  if (tutorialProgress === undefined || submissions === undefined) {
    // TODO: add Skeleton Screens
    // https://github.com/FrontEnd-ro/frontend.ro/issues/673
    return <Spinner />;
  }

  const pendingSubmissions = submissions.filter(
    (submission) => submission.status === SubmissionStatus.IN_PROGRESS,
  );

  return (
    <div className="mt-8">
      <section>
        <h2> Progresul tău </h2>
        <TutorialProgress tutorialProgress={tutorialProgress} />
      </section>
      {pendingSubmissions.length > 0 && (
        <section className="mt-8">
          <h2> Continuă exercițiile</h2>
          <SubmissionList submissions={pendingSubmissions} />
        </section>
      )}
    </div>

  );
};

const SubmissionList = ({ submissions }: { submissions: Submission[] }) => (
  <ResponsiveFlex breakpoint={800}>
    {submissions.map((submission: Submission) => (
      <ExercisePreview
        className={`${styles.ExercisePreview} mb-8`}
        key={submission._id}
        exercise={submission.exercise}
        href={`tutorial/${submission.exercise.lesson}/exercitii/${submission.exercise._id}`}
        viewMode="STUDENT"
        feedbackCount={submission.feedbacks.filter((f) => f.type === 'improvement').length}
        isApproved={submission.status === SubmissionStatus.DONE}
        readOnly={[
          SubmissionStatus.AWAITING_REVIEW,
          SubmissionStatus.DONE,
        ].includes(submission.status)}
      />
    ))}
  </ResponsiveFlex>
);

export default TutorialDashboard;
