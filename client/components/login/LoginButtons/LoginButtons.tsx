import React from 'react';
import Button from '~/components/Button';
import styles from './LoginButtons.module.scss';

interface Props {
  mode: 'login' | 'register';
  onLogin: () => void;
  onRegister: () => void;
  loading?: boolean
}

export default function LoginButtons({
  mode, onLogin, onRegister, loading,
}: Props) {
  return (
    <div className={`${styles['login-buttons']} ${mode === 'register' ? styles['register-mode'] : ''} text-center`}>
      <Button
        variant="light"
        type={mode === 'register' ? 'button' : 'submit'}
        className={`${mode === 'register' ? 'btn--light' : 'btn--blue'} ${(loading && mode === 'login') ? 'btn--loading' : ''} btn w-100`}
        loading={loading && mode === 'login'}
        disabled={loading}
        onClick={onLogin}
      >
        Intră în cont
      </Button>
      <p className="relative"> sau </p>
      <Button
        variant="light"
        type={mode === 'register' ? 'submit' : 'button'}
        className={`${mode === 'register' ? 'btn--blue' : 'btn--light'} ${(loading && mode === 'register') ? 'btn--loading' : ''} btn w-100`}
        loading={loading && mode === 'register'}
        disabled={loading}
        onClick={onRegister}
      >
        Înregistrează-te
      </Button>

    </div>
  );
}
