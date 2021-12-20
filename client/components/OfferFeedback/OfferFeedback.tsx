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
import { FeedbackType, SubmissionVersionI, SubmissionStatus } from '~/../shared/types/submission.types';
import SweetAlertService from '~/services/sweet-alert/SweetAlert.service';
import { removeSubmission } from '~/redux/exercise-submissions/exercise-submissions.actions';

import styles from './OfferFeedback.module.scss';
import Button from '../Button';
import PageWithAsideMenu from '../layout/PageWithAsideMenu/PageWithAsideMenu';
import { getLessonById } from '~/services/Constants';
import AsideNav from '../SolveExercise/AsideNav/AsideNav';
import SubmissionPreview from '../SubmissionPreview/SubmissionPreview';
import RoutingUtils from '~/services/utils/Routing.utils';
import { Checkbox } from '~/components/Form';
import DiffEditorLazy from '../Editor/DiffEditor/DiffEditor.lazy';

interface Props {
  username: string;
  exerciseId: string;
}

// TODO: refactor to get rid of duplicate code
// https://github.com/FrontEnd-ro/frontend.ro/issues/411
function OfferFeedback({
  exerciseId,
  username,
  isLoggedIn,
  dispatch,
}: ConnectedProps<typeof connector> & Props) {
  const router = useRouter();
  const solutionRef = useRef(null);
  const [fetchError, setFetchError] = useState(false);
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  const [submission, setSubmission] = useState<Submission>(null);
  const [feedbacks, setFeedbacks] = useState([]);
  const [versions, setVersions] = useState<SubmissionVersionI[]>([]);

  const isCorrect = feedbacks.find((f) => f.type === FeedbackType.IMPROVEMENT) === undefined;
  const authorNameOrUsername = submission
    ? (submission.user.name || submission.user.username)
    : '';
  const canOfferFeedback = submission && submission.status === SubmissionStatus.AWAITING_REVIEW;
  const activeVersionIndex = versions.findIndex((v) => v._id === RoutingUtils.getQueryString(router, 'version'));

  // Between 'Current cone <-> exercise starting code'
  const [showDiff, setShowDiff] = useState(false);

  const folderStructure = React.useMemo(() => {
    if (!submission) {
      return null;
    }

    return JSON.parse(submission.code || submission.exercise.example);
  }, [submission]);

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
        dispatch(removeSubmission(submission._id));
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

  const fetchSubmissionVersions = (submissionId) => {
    return SubmissionService
      .getSubmissionVersions(submissionId)
      .then((versions) => setVersions(versions))
      .catch((err) => {
        setVersions([]);
        console.error('[SolveExercise.fetchSubmissionVersions] Failed to fetch versions', err);
      });
  };

  useEffect(fetchSubmission, [exerciseId]);
  useEffect(() => {
    if (isLoggedIn && submission?._id) {
      fetchSubmissionVersions(submission._id);
    }
  }, [submission?.exercise?.lesson, submission?._id]);

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
    <PageWithAsideMenu menu={{
      title: getLessonById(submission.exercise.lesson).title,
      Component: (
        <AsideNav lessonExercises={[]} versions={versions} />
      ),
    }}
    >
      {!canOfferFeedback && (
        <p className={`
          ${styles.banner}
          ${styles[`banner-${submission.status}`]}
          text-center 
          text-bold
        `}
        >
          {submission.status === SubmissionStatus.DONE ? (
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
      <PageContainer className="relative">
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
        {!showDiff ? (
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
        ) : (
          <DiffEditorLazy
            modifiedFolderStructure={folderStructure}
            originalFolderStructure={JSON.parse(submission.exercise.example)}
          />
        )}

        {canOfferFeedback && (
          <div className="my-5 d-flex justify-content-between align-items-centers">
            <Checkbox
              checked={showDiff}
              onChange={() => { setShowDiff(!showDiff); }}
            >
              Vezi schimbările față de
              <br />
              codul de început al exercițiului
            </Checkbox>
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
      {activeVersionIndex !== -1 && (
        <SubmissionPreview
          onClose={() => RoutingUtils.removeQuery(router, 'version')}
          className={styles.SubmissionPreview}
          submission={versions[activeVersionIndex]}
          previousSubmissionCode={
            versions[activeVersionIndex + 1]?.code ?? submission.exercise.example
          }
        />
      )}
    </PageWithAsideMenu>
  );
}

function mapStateToProps(state: RootState) {
  return {
    isLoggedIn: !!state.user.info,
  };
}

const connector = connect(mapStateToProps);

export default connector(OfferFeedback);
