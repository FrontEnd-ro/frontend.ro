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
  didFinishChallange?: boolean;
}

const VerifyPanel = ({
  isLoggedIn,
  apiStatus,
  onVerify,
  onSaveProgress,
  onNextChallenge,
  verificationStatus,
  didFinishChallange = false,
}: Props) => {
  const getActionButton = () => {
    if (verificationStatus === undefined || verificationStatus.valid === false) {
      return (
        <Button
          variant="blue"
          onClick={onVerify}
          className={styles.button}
          loading={apiStatus.loadingType === 'verifying'}
        >
          Verifică soluția
        </Button>
      );
    }

    return (
      <Button
        variant="success"
        onClick={onNextChallenge}
        className={styles.button}
        loading={apiStatus.loadingType === 'submitting'}
      >
        Continuă cu următorul task
      </Button>
    );
  };

  const ActionButton = getActionButton();

  if (!isLoggedIn) {
    return (
      <section className="w-100">
        <Alert severity="info">
          Trebuie să te autentifici pentru a trimite o soluție.
        </Alert>
      </section>
    );
  }

  if (didFinishChallange) {
    return (
      <section className="w-100">
        <Alert severity="success">
          Felicitări! Ai terminat cu succes acest tutorial.
        </Alert>
      </section>
    );
  }

  return (
    <section className="w-100">
      {verificationStatus !== undefined && (
        <VerificationDetails className="mb-8" verificationStatus={verificationStatus} />
      )}
      {ActionButton}
      {verificationStatus?.valid !== true && (
        <Button
          variant="light"
          onClick={onSaveProgress}
          className={`${styles.button} ml-2`}
          loading={apiStatus.loadingType === 'saving'}
        >
          Salvează Progresul
        </Button>
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
      <Alert className={className} severity="success">
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
