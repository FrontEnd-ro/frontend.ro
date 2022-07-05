import React, { PropsWithChildren } from 'react';
import styles from './PageContainer.module.scss';

type Props = PropsWithChildren<React.HTMLAttributes<HTMLElement>>;

const PageContainer = React.forwardRef<HTMLElement, Props>((
  { className = '', children, ...rest }: Props, forwardRef,
) => {
  return (
    <main ref={forwardRef} className={`flex-1 ${className}`} {...rest}>
      <div className={styles.container}>
        {children}
      </div>
    </main>
  );
});

export default PageContainer;
