import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '~/redux/root.reducer';
import { JonDoeUser } from '~/services/Constants';
import { ParsedChallengeI } from '~/../shared/types/challenge.types';
import Diploma from '~/components/certification/Diploma/Diploma';

import styles from './CertificationPanel.module.scss';

const CertificationPanel = ({
  userInfo,
  isLoggedIn,
  challenge,
  className = '',
}: ConnectedProps<typeof connector> & { challenge: ParsedChallengeI; className?: string }) => {
  const didFinishTutorial = isLoggedIn && userInfo.tutorials.includes(challenge.challengeId);

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
          name: challenge.title,
          tutorialId: challenge.challengeId,
        }}
        certification={{
          date: new Date(),
          exerciseCount: challenge.tasks.length,
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
