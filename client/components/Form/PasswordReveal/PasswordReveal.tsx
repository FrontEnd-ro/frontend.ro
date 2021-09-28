import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';

import styles from './PasswordReveal.module.scss';

interface Props {
  required?: boolean;
  name?: string;
  autoComplete?: string;
  passwordError?: boolean;
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
}

const PasswordReveal = React.forwardRef(({
  required = true,
  name = 'password',
  autoComplete = 'on',
  passwordError = false,
  onInput,
}: Props, forwardRef: React.RefObject<HTMLInputElement>) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles['password-reveal']}>
      <div className="relative">
        <input
          ref={forwardRef}
          type={visible ? 'text' : 'password'}
          name={name}
          required={required}
          autoComplete={autoComplete}
          onInput={onInput}
        />

        <Button
          className="absolute text-grey"
          onClick={() => setVisible(!visible)}
          title={visible ? 'Hide password' : 'Show password'}
        >
          <FontAwesomeIcon icon={visible ? faEye : faEyeSlash} />
        </Button>
      </div>
      {passwordError
        ? <span className="text-red text-bold">🧙‍ Nu poți trece mai departe decât cu o parolă!</span>
        : null}
    </div>
  );
});

export default PasswordReveal;
