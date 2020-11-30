import React, { PropsWithChildren } from 'react';
import styles from './FormGroup.module.scss';

export default function FormGroup({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={`${styles['form-group']} ${className}`}>
      {children}
    </div>
  );
}
