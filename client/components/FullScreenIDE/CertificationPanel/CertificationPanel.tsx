import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '~/redux/root.reducer';
import { JonDoeUser } from '~/services/Constants';
import { API_ChallengeI } from '~/../shared/types/challenge.types';
import Diploma from '~/components/certification/Diploma/Diploma';
import { API_CertificationI } from '~/../shared/types/certification.types';

import styles from './CertificationPanel.module.scss';

const CertificationPanel = ({
  userInfo,
  isLoggedIn,
  challenge,
  certification,
  className = '',
}: ConnectedProps<typeof connector> & {
  challenge: API_ChallengeI;
  certification?: API_CertificationI;
  className?: string;
}) => {
  const didFinishTutorial = certification !== undefined;

  const getDiploma = () => {
    if (didFinishTutorial) {
      return (
        <Diploma
          student={certification.user}
          tutorial={certification.tutorial}
          challenge={certification.challenge}
          certification={{
            date: new Date(certification.timestamp),
            exerciseCount: certification.lesson_exercises.length,
            url: `/certificari/${certification._id}`,
            pdf: certification.pdf,
          }}
        />
      );
    }

    return (
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
    );
  };

  return (
    <section className={`${className} ${styles.CertificationPanel}`}>
      <h1 className="mt-0"> Certificare </h1>
      {!didFinishTutorial ? (
        <p>
          Rezolvă toate exercițiile din acest tutorial și obține o certificare
          ca cea de jos:
        </p>
      ) : (
        <p>
          Congrats! Ai terminat cu succes acest challenge!
        </p>
      )}
      {getDiploma()}
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
