import React, { useState } from 'react';
import { SUBMISSION_STATUS } from '~/../shared/SharedConstants';

import styles from './StatusBanner.module.scss';

interface Props {
  status: string; // SUBMISSION_STATUS
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
      ${status === SUBMISSION_STATUS.AWAITING_REVIEW
      ? styles['awaiting-review']
      : styles.done}
    `}
    >
      {status === SUBMISSION_STATUS.AWAITING_REVIEW && (
        <p>
          Ai trimis soluția și în curând va primi feedback.
          Dacă vrei să o editezi apasă pe butonul alăturat.
        </p>
      )}

      {status === SUBMISSION_STATUS.DONE && (
        <p> Congrats! Soluția este bună! </p>
      )}

      <button
        type="button"
        onClick={exitReadonly}
        disabled={isExitingReadonly}
        className={`btn btn--light ${isExitingReadonly ? 'btn--loading' : ''}`}
      >
        Editează soluția
      </button>
    </div>
  );
}

export default StatusBanner;
