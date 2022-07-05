import { connect, ConnectedProps } from 'react-redux';

import Spinner from '~/components/Spinner';
import SEOTags from '~/components/SEOTags';
import { RootState } from '~/redux/root.reducer';
import { HTML_TUTORIAL_ID } from '~/services/Constants';
import PageContainer from '~/components/PageContainer';
import maybeFetchTutorialProgress from './tutorial.utils';
import TutorialNav from '~/tutorials/TutorialNav/TutorialNav';
import { WIPPopulatedTutorialI } from '~/../shared/types/tutorial.types';
import Certification from '~/components/certification/Certification/Certification';
import PageWithAsideMenu from '~/components/layout/PageWithAsideMenu/PageWithAsideMenu';
import HtmlFakeDiploma from '~/tutorials/html/components/HtmlFakeDiploma/HtmlFakeDiploma';

type Props = {
  tutorialInfo: WIPPopulatedTutorialI
} & ConnectedProps<typeof connector>;

function HTMLTutorialCertification({ isLoggedIn, tutorialInfo, tutorialProgress }: Props) {
  const didError = maybeFetchTutorialProgress(
    HTML_TUTORIAL_ID,
    isLoggedIn && tutorialProgress === undefined,
  );

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
        title={tutorialInfo.name}
        // TODO|FIXME: this should come from the Tutorial Description
        description="Învață HTML printr-un curs online, focusat pe practică și feedback de la developeri cu experiență."
        url={`https://FrontEnd.ro/${HTML_TUTORIAL_ID}`}
      />
      <PageWithAsideMenu
        withFooter={false}
        menu={{
          title: tutorialInfo.name,
          Component: tutorialProgress !== undefined ? (
            <TutorialNav
              tutorialId={HTML_TUTORIAL_ID}
              tutorialProgress={tutorialProgress}
            />
          ) : null,
        }}
      >
        <PageContainer data-tutorial-certification>
          {tutorialProgress && tutorialProgress?.certification !== null
            ? <Certification className="mt-12" certification={tutorialProgress.certification} />
            : (
              <>
                <h2 className="mt-8">
                  Certificare pentru
                  {' '}
                  {tutorialInfo.name}
                </h2>
                <p className="mb-8 text-xl">
                  Rezolvă toate exercițiile din acest tutorial și obține o certificare
                  ca cea de jos
                </p>
                <HtmlFakeDiploma />
              </>
            )}
        </PageContainer>
      </PageWithAsideMenu>
    </>
  );
}

function mapStateToProps(state: RootState) {
  return {
    isLoggedIn: !!state.user.info,
    tutorialProgress: state.progress.tutorials[HTML_TUTORIAL_ID],
  };
}

const connector = connect(mapStateToProps);

export default connector(HTMLTutorialCertification);

export async function getServerSideProps(): Promise<{
  props: { tutorialInfo: WIPPopulatedTutorialI }
}> {
  const Tutorial = (await import('../../../server/tutorial/tutorial.model')).default;
  const htmlTutorial = await Tutorial
    .findOne({ tutorialId: HTML_TUTORIAL_ID })
    .populate('lessons');

  // FIXME
  // In theory only calling `.toObject()` should be enough to get a plain Object
  // However, NextJS complains it cannot serialize it.
  // This issue may hold the answer https://github.com/vercel/next.js/issues/11993.
  const tutorialInfo = JSON.parse(JSON.stringify(htmlTutorial.toObject()));

  return {
    props: { tutorialInfo },
  };
}
