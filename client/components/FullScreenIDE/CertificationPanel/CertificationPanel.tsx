import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '~/redux/root.reducer';
import { JonDoeUser } from '~/services/Constants';
import Diploma from '~/components/certification/Diploma/Diploma';

import styles from './CertificationPanel.module.scss';

const CertificationPanel = ({
  userInfo,
  isLoggedIn,
  tutorialId,
  className = '',
}: ConnectedProps<typeof connector> & { tutorialId: string; className?: string }) => {
  const didFinishTutorial = isLoggedIn && userInfo.tutorials.includes(tutorialId);

  return (
    <section className={`${className} ${styles.CertificationPanel}`}>
      <h1 className="mt-0"> Certification </h1>
      {!didFinishTutorial && (
        <p>
          Rezolvă toate exercițiile din acest tutorial și obține o certificare
          ca cea de jos:
        </p>
      )}
      <Diploma
        student={isLoggedIn ? userInfo : JonDoeUser}
        tutorial={{
          name: 'React 3D Christmas Advent',
          tutorialId: 'christmas-advent-3d',
        }}
        certification={{
          date: new Date(),
          exerciseCount: 7,
          url: 'https://FrontEnd.ro',
        }}
        showQRCode={false}
        showSignature={false}
        showShareControls={false}
      />
    </section>
  );
};

function mapStateToProps(state: RootState) {
  return {
    isLoggedIn: !!state.user.info,
    userInfo: state.user.info,
  };
}

const connector = connect(mapStateToProps);

export default connector(CertificationPanel);
