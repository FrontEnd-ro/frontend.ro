import { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Spinner from '~/components/Spinner';
import SEOTags from '~/components/SEOTags';
import { RootState } from '~/redux/root.reducer';
import PageContainer from '~/components/PageContainer';
import ExerciseService from '~/services/Exercise.service';
import TutorialService from '~/services/api/Tutorial.service';
import TutorialNav from '~/tutorials/TutorialNav/TutorialNav';
import { WIPPopulatedTutorialI } from '~/../shared/types/tutorial.types';
import { loadSubmissions, loadTutorial } from '~/redux/progress/progress.actions';
import TutorialDashboard from '~/tutorials/TutorialDashboard/TutorialDashboard';
import PageWithAsideMenu from '~/components/layout/PageWithAsideMenu/PageWithAsideMenu';
import TutorialDescription from '~/tutorials/TutorialDescription/TutorialDescription';

type Props = {
  tutorialInfo: WIPPopulatedTutorialI
} & ConnectedProps<typeof connector>;

function HtmlTutorialDashboard({
  user, tutorialInfo, tutorialProgress, submissions, hasFetchedSubmissions, dispatch,
}: Props) {
  const TUTORIAL_ID = 'html';
  const isLoggedIn = !!user.info;
  const [didError, setDidError] = useState(false);
  const didStartTutorial = isLoggedIn && user.info.tutorials.includes(TUTORIAL_ID);

  const fetchSubmissions = async () => {
    try {
      const submissions = await ExerciseService.getSolvedExercises();
      dispatch(loadSubmissions(tutorialInfo.tutorialId, submissions));
    } catch (err) {
      console.error('HtmlTutorialDashboard.fetchSubmissions', err);
      setDidError(true);
    }
  };

  const fetchTutorial = async () => {
    try {
      const progress = await TutorialService.getProgress(TUTORIAL_ID);
      dispatch(loadTutorial(progress));
    } catch (err) {
      console.error('HtmlTutorialDashboard.fetchTutorial', err);
      setDidError(true);
    }
  };

  useEffect(() => {
    if (isLoggedIn && tutorialProgress === undefined) {
      fetchTutorial();
    }

    if (isLoggedIn && !hasFetchedSubmissions) {
      fetchSubmissions();
    }
  }, [isLoggedIn]);

  if (isLoggedIn && tutorialProgress === undefined) {
    return (
      <Spinner />
    );
  }

  if (didError) {
    return (
      // TODO: extract into a re-usable <TryAgain> component
      // https://github.com/FrontEnd-ro/frontend.ro/issues/674
      <p className="text-red text-center">
        Oops! Nu am putut încărca acest tutorial.
        <br />
        Încearcă din nou.
      </p>
    );
  }

  return (
    <>
      <SEOTags
        title="Tutorialul de HTMl"
        description="Învață HTML printr-un curs online, focusat pe practică și feedback de la developeri cu experiență."
        url={`https://FrontEnd.ro/${TUTORIAL_ID}`}
      />
      <PageWithAsideMenu
        withFooter={false}
        menu={{
          // FIXME: should come from server
          title: `Modulul de ${TUTORIAL_ID.toUpperCase()}`,
          Component: tutorialProgress !== undefined ? (
            <TutorialNav
              tutorialId={TUTORIAL_ID}
              tutorialProgress={tutorialProgress}
            />
          ) : null,
        }}
      >
        <PageContainer>
          {didStartTutorial
            ? <TutorialDashboard submissions={submissions} tutorialProgress={tutorialProgress} />
            : <TutorialDescription tutorialId={TUTORIAL_ID} tutorialName={tutorialInfo.name} />}

        </PageContainer>
      </PageWithAsideMenu>
    </>
  );
}

function mapStateToProps(state: RootState) {
  return {
    user: state.user,
    hasFetchedSubmissions: state.progress.submissions.html !== undefined,

    // FIXME|TODO remove hardcoding
    tutorialProgress: state.progress.tutorials.html,
    submissions: state.progress.submissions.html ?? [],
  };
}

const connector = connect(mapStateToProps);

export default connector(HtmlTutorialDashboard);

export async function getServerSideProps(): Promise<{
  props: {
    tutorialInfo: WIPPopulatedTutorialI
  }
}> {
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
}
