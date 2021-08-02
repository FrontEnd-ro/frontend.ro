import React, { useState } from 'react';
import { SubmissionStatus } from '~/../shared/SharedConstants';
import Button from '~/components/Button';

import styles from './StatusBanner.module.scss';

interface Props {
  status: string; // SubmissionStatus
  onExitReadonly: () => Promise<void>;
}

function StatusBanner({ status, onExitReadonly }: Props) {
  const [isExitingReadonly, setIsExitingReadonly] = useState(false);

  const exitReadonly = () => {
    setIsExitingReadonly(true);
    onExitReadonly().finally(() => setIsExitingReadonly(false));
  };

  return (
    <div className={`
      d-flex
      align-items-center
      ${styles['status-banner']} 
      ${status === SubmissionStatus.AWAITING_REVIEW
      ? styles['awaiting-review']
      : styles.done}
    `}
    >
      {status === SubmissionStatus.AWAITING_REVIEW && (
        <p>
          Ai trimis soluția și în curând va primi feedback.
          Dacă vrei să o editezi apasă pe butonul alăturat.
        </p>
      )}

      {status === SubmissionStatus.DONE && (
        <p> Congrats! Soluția este bună! </p>
      )}

      <Button variant="light" onClick={exitReadonly} loading={isExitingReadonly}>
        Editează soluția
      </Button>
    </div>
  );
}

export default StatusBanner;
