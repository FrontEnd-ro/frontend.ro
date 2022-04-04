import { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import SEOTags from '~/components/SEOTags';
import { RootState } from '~/redux/root.reducer';
import PageContainer from '~/components/PageContainer';
import TutorialService from '~/services/api/Tutorial.service';
import TutorialNav from '~/tutorials/TutorialNav/TutorialNav';
import { TutorialProgressI } from '~/../shared/types/tutorial.types';
import PageWithAsideMenu from '~/components/layout/PageWithAsideMenu/PageWithAsideMenu';
import TutorialDescription from '~/tutorials/TutorialDescription/TutorialDescription';

function HtmlTutorialDashboard({ user }: ConnectedProps<typeof connector>) {
  const TUTORIAL_ID = 'html';
  const isLoggedIn = !!user.info;
  const didStartTutorial = isLoggedIn && user.info.tutorials.includes(TUTORIAL_ID);
  const [tutorialProgress, setTutorialProgress] = useState<TutorialProgressI>(undefined);

  useEffect(() => {
    TutorialService
      .getProgress(TUTORIAL_ID)
      .then((progress) => {
        setTutorialProgress(progress);
      })
      .catch((err) => {
        console.error('HtmlTutorialDashboard.useEffect', err);
      });
  }, []);

  return (
    <>
      <SEOTags
        title={`Tutorialul de ${TUTORIAL_ID.toUpperCase()}`}
        description="Învață HTML printr-un curs online, focusat pe practică și feedback de la developeri cu experiență."
        url={`https://FrontEnd.ro/${TUTORIAL_ID}`}
      />
      <PageWithAsideMenu menu={{
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
            ? (
              <p>
                Tutorial Dashboard
              </p>
            )
            : <TutorialDescription tutorialId={TUTORIAL_ID} />}

        </PageContainer>
      </PageWithAsideMenu>
    </>
  );
}

function mapStateToProps(state: RootState) {
  return {
    user: state.user,
  };
}

const connector = connect(mapStateToProps);

export default connector(HtmlTutorialDashboard);
