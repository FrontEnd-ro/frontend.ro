import { useEffect, useState } from 'react';
import SEOTags from '~/components/SEOTags';
import { LESSONS } from '~/services/DataModel';
import PageContainer from '~/components/PageContainer';
import TutorialService from '~/services/api/Tutorial.service';
import TutorialNav from '~/tutorials/TutorialNav/TutorialNav';
import { TutorialProgressI } from '~/../shared/types/tutorial.types';
import PageWithAsideMenu from '~/components/layout/PageWithAsideMenu/PageWithAsideMenu';

function HtmlTutorialDashboard() {
  const TUTORIAL_ID = 'html';
  const firstLessonId = LESSONS.find((lesson) => lesson.type === TUTORIAL_ID)?.id;

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
            lessonId={firstLessonId}
            tutorialId={TUTORIAL_ID}
            isExercisesPage={false}
            tutorialProgress={tutorialProgress}
          />
        ) : null,
      }}
      >
        <PageContainer>
          <h1>
            {TUTORIAL_ID.toUpperCase()}
          </h1>
        </PageContainer>
      </PageWithAsideMenu>
    </>
  );
}

export default HtmlTutorialDashboard;
