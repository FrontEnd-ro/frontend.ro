import { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import SEOTags from '~/components/SEOTags';
import { RootState } from '~/redux/root.reducer';
import PageContainer from '~/components/PageContainer';
import TutorialService from '~/services/api/Tutorial.service';
import TutorialNav from '~/tutorials/TutorialNav/TutorialNav';
import { TutorialProgressI, WIPPopulatedTutorialI } from '~/../shared/types/tutorial.types';
import TutorialDashboard from '~/tutorials/TutorialDashboard/TutorialDashboard';
import PageWithAsideMenu from '~/components/layout/PageWithAsideMenu/PageWithAsideMenu';
import TutorialDescription from '~/tutorials/TutorialDescription/TutorialDescription';

type Props = {
  tutorialInfo: WIPPopulatedTutorialI
} & ConnectedProps<typeof connector>;

function HtmlTutorialDashboard({ user, tutorialInfo }: Props) {
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
            ? <TutorialDashboard tutorialId={TUTORIAL_ID} />
            : <TutorialDescription tutorialId={TUTORIAL_ID} tutorialName={tutorialInfo.name} />}

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
