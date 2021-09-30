import React, { useRef, useState } from 'react';
import Button, { Variant } from '~/components/Button';
import Form, { FormGroup, PasswordReveal } from '../../Form';

import styles from './PasswordReset.module.scss';

interface Props {
  // Returns a Promise that resolves to an error message
  // or null if the request succeeded.
  onReset: (code: string, newPassword: string) => Promise<string | null>;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  characterCount?: number;
  buttonVariant?: Variant;
}

const PasswordReset = ({
  onReset,
  className = '',
  loading = false,
  disabled = false,
  characterCount = 4,
  buttonVariant = 'blue',
}: Props) => {
  const formRef = useRef(null);
  const passwordRef = useRef(null);

  const [error, setError] = useState(null);

  const onSubmit = (data: Record<string, any>) => {
    let resetCode = '';

    for (let i = 0; i < characterCount; i += 1) {
      resetCode += data[`char${i}`];
    }

    // Do not catch error here.
    // It should be treated in the parent component
    onReset(resetCode, data.newPassword).then((errorMessage) => {
      setError(errorMessage);
    });
  };

  const onCodeInput = (e: React.FormEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target as HTMLInputElement;

    if (value.length !== 1) {
      // We only want to move focus if the input is filled
      return;
    }

    if (index < characterCount - 1) {
      // We have another input next to this one
      // thus, let's move focus there
      focusCodeInput(index + 1);
    } else {
      // If this is the last code input then
      // focus the password input.
      focusPasswordInput();
    }
  };

  const focusCodeInput = (index: number) => {
    if (!formRef.current) {
      console.log(`[PasswordReset.focusInput] Tried to focus input with index=${index} but the form reference is null.`);
      return;
    }

    const inputEl: HTMLInputElement = formRef.current.querySelector(`[name="char${index}"]`);
    if (!inputEl) {
      console.log(`[PasswordReset.focusInput] Tried to focus input with index=${index} but the input couldn't be found.`);
      return;
    }
    inputEl.focus();
  };

  const focusPasswordInput = () => {
    if (!formRef.current) {
      console.log('[PasswordReset.focusPasswordInput] Tried to focus the password input but the form reference is null.');
      return;
    }

    passwordRef.current.focus();
  };

  return (
    <Form ref={formRef} onSubmit={onSubmit} className={className}>
      <FormGroup className="mb-4">
        <label>
          <span className="label"> Cod primit prin email </span>
          <div className={`${styles['reset-code']} d-flex justify-content-between`}>
            {Array.from(Array(characterCount), (_, index) => (
              <input
                key={index}
                type="text"
                minLength={1}
                maxLength={1}
                style={{ width: `${80 / characterCount}% ` }}
                name={`char${index}`}
                disabled={disabled || loading}
                onInput={(e) => onCodeInput(e, index)}
                className="text-center"
              />
            ))}
          </div>
        </label>
      </FormGroup>
      <FormGroup className="mb-4">
        <label>
          <span className="label">Noua parolă </span>
          <PasswordReveal
            ref={passwordRef}
            name="newPassword"
            autoComplete="new-password"
            onInput={() => setError(null)}
          />
        </label>
      </FormGroup>
      {error && (
        <p className="text-red text-bold">
          {error}
        </p>
      )}
      <Button
        className="w-100"
        type="submit"
        variant={buttonVariant}
        loading={loading}
        disabled={disabled || loading}
      >
        Schimbă parola
      </Button>
    </Form>
  );
};

export default PasswordReset;
