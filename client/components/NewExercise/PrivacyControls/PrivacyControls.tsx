import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Checkbox } from '~/components/Form';

import styles from './PrivacyControls.module.scss';

const PRIVATE_INFO = 'Doar tu poți vedea acest exercițiu.';
const PUBLIC_INFO = 'Public către toți utilizatorii, chiar și cei ne-înregistrați.';

interface Props {
  isPrivate: boolean;
  onPrivacyChange: (isPrivate: boolean) => void
  form?: string;
}

function PrivacyControls(props: Props) {
  // ceva
  const { isPrivate, onPrivacyChange, form } = props;

  return (
    <div className={styles['privacy-controls']}>
      <Checkbox
        form={form}
        className="d-block"
        type="radio"
        name="private"
        onChange={() => onPrivacyChange(false)}
        checked={!isPrivate}
        value="true"
      >
        Public
      </Checkbox>
      <Checkbox
        form={form}
        className="d-block"
        type="radio"
        name="private"
        onChange={() => onPrivacyChange(true)}
        checked={isPrivate}
        value="false"
      >
        Privat
      </Checkbox>
      <p>
        <FontAwesomeIcon width="16" icon={faInfoCircle} />
        {isPrivate ? PRIVATE_INFO : PUBLIC_INFO}
      </p>
    </div>
  );
}

export default PrivacyControls;
