import { ReactNode, useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Spinner from '~/components/Spinner';
import SEOTags from '~/components/SEOTags';
import { RootState } from '~/redux/root.reducer';
import PageContainer from '~/components/PageContainer';
import { HTML_TUTORIAL_ID } from '~/services/Constants';
import maybeFetchTutorialProgress from './tutorial.utils';
import ExerciseService from '~/services/Exercise.service';
import { getEmptyTutorialProgress } from '~/services/Utils';
import TutorialNav from '~/tutorials/TutorialNav/TutorialNav';
import { loadSubmissions } from '~/redux/progress/progress.actions';
import { WIPPopulatedTutorialI } from '~/../shared/types/tutorial.types';
import PageWithAsideMenu from '~/components/layout/PageWithAsideMenu/PageWithAsideMenu';

type Props = {
  tutorialInfo: WIPPopulatedTutorialI
  children?: ReactNode;
} & ConnectedProps<typeof connector>;

// Re-usable component for Tutorial "main pages",
// that have the Navigation on the side and main content
// in the middle.
// This also deals with making sure to fetch the appropriate
// data from the server.
function TutorialPage({
  user,
  tutorialInfo,
  tutorialProgress,
  hasFetchedSubmissions,
  dispatch,
  children,
}: Props) {
  const isLoggedIn = !!user.info;
  const [failedToFetchSubmissions, setFailedToFetchSubmissions] = useState(false);

  const failedToFetchProgress = maybeFetchTutorialProgress(
    tutorialInfo.tutorialId,
    isLoggedIn && tutorialProgress === undefined,
  );

  const fetchSubmissions = async () => {
    try {
      const submissions = await ExerciseService.getSolvedExercises();
      dispatch(loadSubmissions(tutorialInfo.tutorialId, submissions));
    } catch (err) {
      console.error('HtmlTutorialDashboard.fetchSubmissions', err);
      setFailedToFetchSubmissions(true);
    }
  };

  useEffect(() => {
    if (isLoggedIn && !hasFetchedSubmissions) {
      fetchSubmissions();
    }
  }, [isLoggedIn, hasFetchedSubmissions]);

  if (isLoggedIn && tutorialProgress === undefined) {
    return (
      <Spinner />
    );
  }

  if (failedToFetchSubmissions || failedToFetchProgress) {
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
        title={tutorialInfo.name}
        // TODO: this should be dynamic, stored in the DB
        description="Învață HTML printr-un curs online, focusat pe practică și feedback de la developeri cu experiență."
        url={`https://FrontEnd.ro/${tutorialInfo.tutorialId}`}
      />
      <PageWithAsideMenu
        withFooter={false}
        menu={{
          title: tutorialInfo.name,
          Component: <TutorialNav
            tutorialId={tutorialInfo.tutorialId}
            tutorialProgress={tutorialProgress ?? getEmptyTutorialProgress(tutorialInfo)}
          />,
        }}
      >
        <PageContainer>
          {children}
        </PageContainer>
      </PageWithAsideMenu>
    </>
  );
}

function mapStateToProps(state: RootState) {
  return {
    user: state.user,
    hasFetchedSubmissions: state.progress.submissions[HTML_TUTORIAL_ID] !== undefined,

    // FIXME|TODO remove hardcoding
    tutorialProgress: state.progress.tutorials[HTML_TUTORIAL_ID],
    submissions: state.progress.submissions[HTML_TUTORIAL_ID] ?? [],
  };
}

const connector = connect(mapStateToProps);

export default connector(TutorialPage);
