import React from 'react';
import styles from './Spinner.module.scss';

interface Props {
  text?: string;
  className?: string;
  showText?: boolean;
}

const Spinner = ({ className = '', showText = false, text = 'Se încarcă' }: Props) => {
  return (
    <div className={`${styles.spinner} ${className}`}>
      {showText && (
        <p>
          {text}
        </p>
      )}
    </div>
  );
};

export default Spinner;
