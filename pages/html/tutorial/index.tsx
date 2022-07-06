import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '~/redux/root.reducer';
import TutorialPage from '~/tutorials/TutorialPage';
import { HTML_TUTORIAL_ID } from '~/services/Constants';
import { WIPPopulatedTutorialI } from '~/../shared/types/tutorial.types';
import TutorialDashboard from '~/tutorials/TutorialDashboard/TutorialDashboard';
import TutorialDescription from '~/tutorials/TutorialDescription/TutorialDescription';

type Props = {
  tutorialInfo: WIPPopulatedTutorialI
} & ConnectedProps<typeof connector>;

const TutorialIndex = ({
  isLoggedIn, userTutorials, tutorialInfo, tutorialProgress, submissions,
}: Props) => {
  const didStartTutorial = isLoggedIn && userTutorials.includes(tutorialInfo.tutorialId);

  return (
    <TutorialPage tutorialInfo={tutorialInfo} isRootPage>
      {didStartTutorial
        ? <TutorialDashboard submissions={submissions} tutorialProgress={tutorialProgress} />
        : (
          <TutorialDescription
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

export const getServerSideProps = async () => {
  const Tutorial = (await import('../../../server/tutorial/tutorial.model')).default;
  const htmlTutorial = await Tutorial.findOne({ tutorialId: 'html' }).populate('lessons');

  // FIXME
  // In theory only calling `.toObject()` should be enough to get a plain Object
  // However, NextJS complains it cannot serialize it.
  // This issue may hold the answer https://github.com/vercel/next.js/issues/11993.
  const htmlTutorialObject = JSON.parse(JSON.stringify(htmlTutorial.toObject()));

  return {
    props: {
      tutorialInfo: htmlTutorialObject,
    },
  };
};
