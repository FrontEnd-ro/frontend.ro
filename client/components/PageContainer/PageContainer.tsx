import React, { PropsWithChildren } from 'react';
import styles from './PageContainer.module.scss';

interface Props {
  className?: string
}

function PageContainer({ className, children } : PropsWithChildren<Props>) {
  return (
    <main className={`${styles['page-container']} ${className || ''}`}>
      <div className={styles.container}>
        {children}
      </div>
    </main>
  );
}

export default PageContainer;
