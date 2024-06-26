import React, { useState, PropsWithChildren } from 'react';
import Button from '~/components/Button';

import styles from './Collapser.module.scss';

interface Props {
  onToggle: () => void;

  // Height of the visible part inside the <Collapser>
  size?: string;
  isOpen?: boolean;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  Toggler?: ({ onClick, isOpen }: { onClick: () => void, isOpen: boolean }) => JSX.Element;
}

const Collapser = ({
  onToggle,
  size = '20em',
  isOpen = false,
  className = '',
  as: Wrapper = 'div',
  Toggler = DefaultToggler,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <Wrapper className={`
      ${className} 
      ${styles.Collapser} 
      ${isOpen ? styles['is-open'] : ''}
      relative
      `}
    >
      <div style={{ maxHeight: size }} className={styles.content}>
        {children}
      </div>
      <div className={`${styles.toggler} absolute`}>
        <Toggler onClick={onToggle} isOpen={isOpen} />
      </div>
    </Wrapper>
  );
};

const DefaultToggler = ({ isOpen, onClick }: { isOpen: boolean, onClick: () => void }) => (
  <Button variant="link" onClick={onClick}>
    {isOpen ? 'Vezi mai puțin' : 'Vezi mai mult'}
  </Button>
);

export default Collapser;
