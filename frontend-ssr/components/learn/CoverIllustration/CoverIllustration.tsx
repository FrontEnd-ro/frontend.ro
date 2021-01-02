import React from 'react';
import styles from './CoverIllustration.module.scss';

interface Props {
  src: string;
  position: 'left' | 'right';
}

function CoverIllustration({ src, position }: Props) {
  return (
    <div
      className={`${styles['cover-illustration']} absolute`}
      style={{
        backgroundImage: `url(${src})`,
        backgroundPosition: position,
      }}
    />
  );
}

export default CoverIllustration;
