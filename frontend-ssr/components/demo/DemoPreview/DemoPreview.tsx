import React, { PropsWithChildren } from 'react';
import styles from './DemoPreview.module.scss';

export default function DemoPreview({ children } : PropsWithChildren<unknown>) {
  return (
    <div className={styles['demo-preview']}>
      {children}
    </div>
  );
}
