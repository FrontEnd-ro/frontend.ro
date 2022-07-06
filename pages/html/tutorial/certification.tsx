import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '~/redux/root.reducer';
import TutorialPage from '~/tutorials/TutorialPage';
import { HTML_TUTORIAL_ID } from '~/services/Constants';
import { WIPPopulatedTutorialI } from '~/../shared/types/tutorial.types';
import Certification from '~/components/certification/Certification/Certification';
import HtmlFakeDiploma from '~/tutorials/html/components/HtmlFakeDiploma/HtmlFakeDiploma';

type Props = {
  tutorialInfo: WIPPopulatedTutorialI
} & ConnectedProps<typeof connector>;

const TutorialCertification = ({ tutorialInfo, tutorialProgress }: Props) => {
  return (
    <TutorialPage tutorialInfo={tutorialInfo}>
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
    </TutorialPage>
  );
};

function mapStateToProps(state: RootState) {
  return {
    // FIXME|TODO remove hardcoding
    tutorialProgress: state.progress.tutorials[HTML_TUTORIAL_ID],
  };
}

const connector = connect(mapStateToProps);

export default connector(TutorialCertification);

// TODO|FIXME is this the correct way to re-use a
// `getServerSideProps` function? Are there any
// other Good Practices out there?
export { getServerSideProps } from './index';
