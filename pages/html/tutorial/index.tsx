import { GetServerSideProps } from 'next';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '~/redux/root.reducer';
import NotFoundPage from '~/components/NotFound/NotFound';
import TutorialPage from '~/tutorials/TutorialPage';
import { HTML_TUTORIAL_ID } from '~/services/Constants';
import { startedTutorial } from '~/redux/user/user.actions';
import TutorialService from '~/services/api/Tutorial.service';
import { API_TutorialI } from '~/../shared/types/tutorial.types';
import TutorialDashboard from '~/tutorials/TutorialDashboard/TutorialDashboard';
import TutorialDescription from '~/tutorials/TutorialDescription/TutorialDescription';

type Props = {
  // If `null` then the tutorial is missing, so we want to render a 404 Page
  tutorialInfo: API_TutorialI | null;
} & ConnectedProps<typeof connector>;

const TutorialIndex = ({
  isLoggedIn, userTutorials, tutorialInfo, tutorialProgress, submissions, dispatch,
}: Props) => {
  const didStartTutorial = isLoggedIn && userTutorials.includes(tutorialInfo?.tutorialId);

  if (tutorialInfo === null) { 
    return <NotFoundPage />;
  }

  return (
    <TutorialPage tutorialInfo={tutorialInfo} isRootPage>
      {didStartTutorial
        ? <TutorialDashboard submissions={submissions} tutorialProgress={tutorialProgress} />
        : (
          <TutorialDescription
            isLoggedIn={isLoggedIn}
            onSuccess={() => dispatch(startedTutorial(tutorialInfo.tutorialId))}
            tutorialName={tutorialInfo.name}
            tutorialId={tutorialInfo.tutorialId}
          />
        )}
    </TutorialPage>
  );
};

function mapStateToProps(state: RootState) {
  return {
    isLoggedIn: !!state.user.info,
    userTutorials: state.user?.info?.tutorials ?? [],

    // FIXME|TODO remove hardcoding
    tutorialProgress: state.progress.tutorials[HTML_TUTORIAL_ID],
    submissions: state.progress.submissions[HTML_TUTORIAL_ID] ?? [],
  };
}

const connector = connect(mapStateToProps);

export default connector(TutorialIndex);

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  try {
    const tutorialInfo = await TutorialService.getInfo('html');
    return {
      props: {
        tutorialInfo,
      },
    };
  } catch (err) {
    res.statusCode = 500;
    throw new Error('Something went wrong when trying to fetch the tutorial', {
      cause: err,
    });
  }
};
