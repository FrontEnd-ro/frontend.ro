import React, { PropsWithChildren } from 'react';
import styles from './InputWithIcon.module.scss';

export default function InputWithIcon({
  children,
  ...props
}: PropsWithChildren<React.InputHTMLAttributes<HTMLInputElement>>) {
  return (
    <div className={`${styles['input-with-icon']} relative`}>
      <input {...props} />
      <span className="absolute">
        {children}
      </span>
    </div>
  );
}
