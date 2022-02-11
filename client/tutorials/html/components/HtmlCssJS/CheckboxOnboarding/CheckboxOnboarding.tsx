import React from 'react';
import styles from './CheckboxOnboarding.module.scss';

const CheckboxOnboarding = ({ className = '' }: { className?: string }) => {
  return (
    <p className={`${styles.CheckboxOnboarding} ${className}`}>
      Apasă pe checkbox-uri pentru a vedea cum arată
      componenta de mai jos fără CSS sau JavaScript.
    </p>
  );
};

export default CheckboxOnboarding;
