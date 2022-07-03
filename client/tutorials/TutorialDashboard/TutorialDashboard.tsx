import React from 'react';
import ResponsiveFlex from '~/components/ResponsiveFlex';
import ExercisePreview from '~/components/ExercisePreview';
import { Submission } from '~/redux/exercise-submissions/types';
import { TutorialProgressI } from '~/../shared/types/tutorial.types';
import { SubmissionStatus } from '~/../shared/types/submission.types';
import TutorialProgress from '~/components/user-profile/UserActivity/TutorialProgress/TutorialProgress';

import styles from './TutorialDashboard.module.scss';

interface Props {
  submissions: Submission[];
  tutorialProgress: TutorialProgressI;
}

const TutorialDashboard = ({ tutorialProgress, submissions }: Props) => {
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
