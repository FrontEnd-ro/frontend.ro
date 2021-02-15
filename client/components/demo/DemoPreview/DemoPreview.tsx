import React, { PropsWithChildren } from 'react';
import styles from './DemoPreview.module.scss';

interface Props {
  className?: string;
}

export default function DemoPreview({ className = '', children } : PropsWithChildren<Props>) {
  return (
    <div className={`${styles['demo-preview']} ${className}`}>
      {children}
    </div>
  );
}
