import React, { PropsWithChildren } from 'react';

import styles from './Checkbox.module.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Checkbox({
  children,
  className = '',
  ...props
}: PropsWithChildren<Props>) {
  return (
    <label className={`${styles['checkbox-wrapper']} ${className}`}>
      <div className={styles.checkbox}>
        <input className="absolute" type="checkbox" {...props} />
        <span className={`${styles['control-indicator']} d-inline-block`} />
      </div>
      {children}
    </label>
  );
}
