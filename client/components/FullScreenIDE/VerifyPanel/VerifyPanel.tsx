import Button from '~/components/Button';
import Alert from '~/components/generic/Alert/Alert';
import List from '~/components/List';
import { VerificationStatus } from '~/services/api/Challenge.service';

import styles from './VerifyPanel.module.scss';

interface Props {
  isLoggedIn: boolean;
  isVerifying: boolean;
  savingStatus: {
    isSaving: boolean;
    error: string;
  };
  onVerify: () => void;
  onSaveProgress: () => void;
  onNextChallenge: () => void;
  verificationStatus?: VerificationStatus;
}

const VerifyPanel = ({
  isLoggedIn,
  isVerifying,
  savingStatus,
  onVerify,
  onSaveProgress,
  onNextChallenge,
  verificationStatus,
}: Props) => {
  const getActionButton = () => {
    if (verificationStatus === undefined) {
      return (
        <Button onClick={() => onVerify()} loading={isVerifying} variant="blue">
          Verify solution
        </Button>
      );
    }

    const { valid } = verificationStatus;
    if (!valid) {
      return (
        <Button className="mt-8" onClick={() => onVerify()} loading={isVerifying} variant="light">
          Verify solution again
        </Button>
      );
    }

    return (
      <Button className="mt-4" onClick={() => onNextChallenge()} loading={isVerifying} variant="success">
        Next challenge
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
          If you think your solution is ready, then press the button below
          and we'll automatically evaluate it.
        </p>
      ) : <VerificationDetails verificationStatus={verificationStatus} />}
      {ActionButton}
      <hr className="mt-8" />
      <p>
        If you'd like to save your progress and continue later, click the button below.
      </p>
      {verificationStatus?.valid !== true && (
        <>
          <Button onClick={() => onSaveProgress()} variant="light" loading={savingStatus.isSaving}>
            Save Progress
          </Button>
          {savingStatus.error !== '' && (
            <Alert severity="error">
              {savingStatus.error}
            </Alert>
          )}
        </>
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
        Congratulations. Your solution is correct!
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
            Before submitting it again here's a few suggestions which may help you:
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
