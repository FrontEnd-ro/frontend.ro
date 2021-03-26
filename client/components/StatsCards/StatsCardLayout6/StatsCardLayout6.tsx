import React from 'react';
import Background from '~/components/StatsCards/Background';

import styles from './StatsCardLayout6.module.scss';

interface Props {
  src?: string;
  footer?: string;
  counter: number;
  colorText: string;
  className?: string;
  description: string;
  background?: 'image' | 'linear-gradient' | 'image & linear-gradient';
  colorGradient1?: string;
  colorGradient2?: string;
  direction?: 'to left' | 'to right' | 'to top left' | 'to top right';
}

function StatsCardLayout6({
  src,
  counter,
  footer,
  background,
  colorText,
  className,
  direction,
  description,
  colorGradient1,
  colorGradient2,
}: Props) {
  return (
    <Background
      key={description}
      className={`${className || ''} d-flex justify-content-center align-items-center`}
      background={background || 'linear-gradient'}
      direction={direction}
      src={src || ''}
      colorGradient1={colorGradient1}
      colorGradient2={colorGradient2}
    >
      <div>
        <p className={`${styles['grid-card']}`} style={{ color: `${colorText}` }}>
          <span className={styles.counter}>{counter}</span>
          <span className={styles.description}>{description}</span>
        </p>
        {footer && <p className={`${styles['footer-card']}`} style={{ color: `${colorText}` }}>{footer}</p>}
      </div>

    </Background>
  );
}

export default StatsCardLayout6;
