import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { connect, ConnectedProps } from 'react-redux';
import { useRouter } from 'next/router';
import PageContainer from '../PageContainer';
import Spinner from '../Spinner';
import { RootState } from '~/redux/root.reducer';
import SubmissionService from '~/services/Submission.service';
import { Submission } from '~/redux/exercise-submissions/types';

import { timeAgo } from '~/services/Utils';
import Markdown from '../Markdown';
import CompleteEditorLazy from '../Editor/CompleteEditor/CompleteEditor.lazy';
import { FEEDBACK_TYPES } from '~/services/Constants';
import SweetAlertService from '~/services/sweet-alert/SweetAlert.service';
import { SUBMISSION_STATUS } from '~/../shared/SharedConstants';

import styles from './OfferFeedback.module.scss';
import Button from '../Button';

interface Props {
  username: string;
  exerciseId: string;
}

function OfferFeedback({
  exerciseId,
  username,
  userInfo,
}: ConnectedProps<typeof connector> & Props) {
  const router = useRouter();
  const solutionRef = useRef(null);
  const [fetchError, setFetchError] = useState(false);
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  const [submission, setSubmission] = useState<Submission>(null);
  const [feedbacks, setFeedbacks] = useState([]);

  const isCorrect = feedbacks.find((f) => f.type === FEEDBACK_TYPES.IMPROVEMENT) === undefined;
  const authorNameOrUsername = submission
    ? (submission.user.name || submission.user.username)
    : '';
  const canOfferFeedback = submission && submission.status === SUBMISSION_STATUS.AWAITING_REVIEW;

  const folderStructure = React.useMemo(() => {
    if (!submission) {
      return null;
    }

    return JSON.parse(submission.code || submission.exercise.example);
  }, [submission]);

  console.log({ isCorrect });

  const fetchSubmission = () => {
    SubmissionService
      .getUserSubmission(username, exerciseId)
      .then((submission) => setSubmission(submission))
      .catch((err) => {
        console.error('[fetchSubmission]', err);
        setFetchError(true);
      });
  };

  const approveOrSendFeedback = () => {
    setIsSendingFeedback(true);

    let ApiToCall;

    if (isCorrect) {
      ApiToCall = SubmissionService.approveSubmission;
    } else {
      ApiToCall = SubmissionService.sendFeedback;
    }

    ApiToCall(submission._id, feedbacks)
      .then(() => {
        SweetAlertService.toast({
          type: 'success',
          text: isCorrect ? 'Exercițiul aprobat cu succes' : 'Feedback trimis cu succes',
        });
        router.push('/exercitii-rezolvate');
      })
      .catch((err) => {
        console.error('[OfferFeedback][approveOrSendFeedback]', err);

        SweetAlertService.toast({
          type: 'error',
          text: err.message || `Oops. Se pare că nu am putut ${isCorrect ? 'aprova exercițiul' : 'trimite feedback-ul'}. Încearcă din nou.`,
        });
      })
      .finally(() => setIsSendingFeedback(false));
  };

  useEffect(fetchSubmission, [exerciseId]);

  if (fetchError) {
    return (
      <>
        <PageContainer className="text-center">
          <h1> Oops 😟</h1>
          <h2> Feedback-ul a fost trimis sau submisia nu mai există </h2>

          <Link href="/">
            <a className="btn btn--blue">
              Navighează acasă
            </a>
          </Link>
        </PageContainer>
      </>
    );
  }
  if (!submission) {
    return (
      <PageContainer className="relative">
        <Spinner showText />
      </PageContainer>
    );
  }

  return (
    <>
      {!canOfferFeedback && (
        <p className={`
          ${styles.banner}
          ${styles[`banner-${submission.status}`]}
          text-center 
          text-bold
        `}
        >
          {submission.status === SUBMISSION_STATUS.DONE ? (
            'Exercițiul a fost deja aprobat'
          ) : (
            <>
              {authorNameOrUsername}
              {' '}
              încă lucrează la acest exercițiu
            </>
          )}
        </p>
      )}
      <PageContainer>
        <p />
        <h1 className="mb-0">
          Feedback pentru
          {' '}
          <Link href={`/${submission.user.username}`}>
            <a>
              {authorNameOrUsername}
            </a>

          </Link>
        </h1>
        <time className="m-0">
          Trimis
          {' '}
          {timeAgo(new Date(submission.submittedAt))}

        </time>
        <Markdown markdownString={submission.exercise.body} className={styles.bodyMarkdown} />
        <CompleteEditorLazy
          readOnly
          askTooltip
          // If we can offer feedback then pass the newly
          // created empty array of feedbacks which will be
          // populated on every new feedback given.
          // If however we cannot offer feedback, this means
          // the exercise is still IN_PROGRESS or DONE. In this
          // case we still want to see what feedbacks are still unresolved.
          feedbacks={canOfferFeedback ? feedbacks : submission.feedbacks}
          key={exerciseId}
          ref={solutionRef}
          folderStructure={folderStructure}
          onFeedbackAdded={(f) => setFeedbacks(f.getAll())}
        />
        {canOfferFeedback && (
        <div className="text-right my-5">
          <Button
            loading={isSendingFeedback}
            variant={isCorrect ? 'success' : 'blue'}
            onClick={approveOrSendFeedback}
          >
            {isCorrect ? 'Aprobă exercițiul' : 'Trimite feedback-ul'}
          </Button>
        </div>
        )}
      </PageContainer>
    </>
  );
}

function mapStateToProps(state: RootState) {
  return {
    userInfo: state.user.info,
  };
}

const connector = connect(mapStateToProps);

export default connector(OfferFeedback);
