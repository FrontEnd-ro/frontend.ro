import React, { useState, PropsWithChildren } from 'react';
import Button from '~/components/Button';

import styles from './Collapser.module.scss';

interface Props {
  defaultOpen?: boolean;
  openLabel?: string;
  closeLabel?: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const Collapser = ({
  defaultOpen = false,
  openLabel = 'Vezi mai mult',
  closeLabel = 'Vezi mai puțin',
  className = '',
  as: Wrapper = 'div',
  children,
}: PropsWithChildren<Props>) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Wrapper className={`
      ${className} 
      ${styles.Collapser} 
      ${isOpen ? styles['is-open'] : ''}
      relative
      `}
    >
      <div className={styles.content}>
        {children}
      </div>
      <Button variant="link" className={`${styles.toggler} absolute`} onClick={toggle}>
        {isOpen ? closeLabel : openLabel}
      </Button>
    </Wrapper>
  );
};

export default Collapser;
