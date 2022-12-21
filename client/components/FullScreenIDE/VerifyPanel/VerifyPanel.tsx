import Button from '~/components/Button';
import Alert from '~/components/generic/Alert/Alert';
import List from '~/components/List';
import { VerificationStatus } from '~/services/api/Challenge.service';
import { ApiStatus } from '../FullScreenIDE';

import styles from './VerifyPanel.module.scss';

interface Props {
  isLoggedIn: boolean;
  apiStatus: ApiStatus;
  onVerify: () => void;
  onSaveProgress: () => void;
  onNextChallenge: () => void;
  verificationStatus?: VerificationStatus;
}

const VerifyPanel = ({
  isLoggedIn,
  apiStatus,
  onVerify,
  onSaveProgress,
  onNextChallenge,
  verificationStatus,
}: Props) => {
  const getActionButton = () => {
    if (verificationStatus === undefined) {
      return (
        <Button onClick={() => onVerify()} loading={apiStatus.loadingType === 'verifying'} variant="blue">
          Verifică soluția
        </Button>
      );
    }

    const { valid } = verificationStatus;
    if (!valid) {
      return (
        <Button className="mt-8" onClick={() => onVerify()} loading={apiStatus.loadingType === 'verifying'} variant="light">
          Verifică încă o dată soluția
        </Button>
      );
    }

    return (
      <Button className="mt-4" onClick={() => onNextChallenge()} loading={apiStatus.loadingType === 'submitting'} variant="success">
        Continuă cu următorul task
      </Button>
    );
  };

  const ActionButton = getActionButton();

  if (!isLoggedIn) {
    return (
      <section className="w-100">
        {!isLoggedIn && (
          <Alert severity="info" className="mb-8">
            Trebuie să te autentifici pentru a trimite o soluție.
          </Alert>
        )}
      </section>
    );
  }

  return (
    <section className="w-100">
      <h1 className="mt-0"> Verify Solution </h1>
      {verificationStatus === undefined ? (
        <p>
          Dacă crezi că souția ta e corectă, apasă acest buton și noi
          o vom valida automat.
        </p>
      ) : <VerificationDetails verificationStatus={verificationStatus} />}
      {ActionButton}
      {verificationStatus?.valid !== true && (
        <>
          <hr className="mt-8" />
          <p>
            Dacă vrei să salvezi progresul și să continui rezolvarea mai târziu,
            apasă pe butonul de mai jos.
          </p>
          <Button onClick={() => onSaveProgress()} variant="light" loading={apiStatus.loadingType === 'saving'}>
            Salvează Progresul
          </Button>

        </>
      )}
      {apiStatus.error !== '' && (
        <Alert className="mt-8" severity="error">
          {apiStatus.error}
        </Alert>
      )}

    </section>
  );
};

const VerificationDetails = ({
  verificationStatus,
  className = '',
}: {
  verificationStatus: VerificationStatus,
  className?: string;
}) => {
  const { valid, error } = verificationStatus;

  if (valid === true) {
    return (
      <Alert severity="success">
        Felicitări! Soluția ta e corectă!
      </Alert>
    );
  }

  return (
    <div className={className}>
      <Alert severity="error">
        {error.description}
      </Alert>
      {error.stackTrace !== undefined && (
        <pre className={styles.code}>
          <code>
            {error.stackTrace}
          </code>
        </pre>
      )}
      {error.suggestions !== undefined && (
        <>
          <p>
            Înainte să continui rezolvarea, uite câteva sugestii care te-ar putea ajuta:
          </p>
          <List variant="bullets">
            {error.suggestions.map((suggestion) => (
              <li className="mb-2" key={suggestion}>
                {suggestion}
              </li>
            ))}
          </List>
        </>
      )}
    </div>
  );
};

export default VerifyPanel;
