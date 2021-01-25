import React from 'react';
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
      <button
        type={mode === 'register' ? 'button' : 'submit'}
        className={`${mode === 'register' ? 'btn--light' : 'btn--blue'} ${(loading && mode === 'login') ? 'btn--loading' : ''} btn w-100`}
        disabled={loading}
        onClick={onLogin}
      >
        Intră în cont
      </button>
      <p className="relative"> sau </p>
      <button
        type={mode === 'register' ? 'submit' : 'button'}
        className={`${mode === 'register' ? 'btn--blue' : 'btn--light'} ${(loading && mode === 'register') ? 'btn--loading' : ''} btn w-100`}
        disabled={loading}
        onClick={onRegister}
      >
        Înregistrează-te
      </button>

    </div>
  );
}
