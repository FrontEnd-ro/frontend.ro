import React from 'react';
import Background from '../Background/Background';
import styles from './StatsCardLayout2.module.scss';

interface Props {
  src;
  header?: string;
  counter: number;
  description: string;
  colorText: string;
  withHeader?: boolean;
  className?: string;
}

function StatsCardLayout2({
  src,
  header = '',
  counter,
  description,
  colorText,
  withHeader = true,
  className = '',
}: Props) {
  return (
    <Background
      src={src}
      background="image & linear-gradient"
      direction="to top left"
      size="contain"
      colorGradient1="96E9E9"
      colorGradient2="D4F5BC"
      className={`${className} ${styles['stats-card-layout-2']} d-flex justify-content-center align-items-center`}
    >
      <div className="text-center w-100" style={{ color: `${colorText}` }}>
        {withHeader && <p className={`${styles['header-card']}`} style={{ color: `${colorText}` }}>{header}</p>}
        <p className={styles.description}>{description}</p>
        <p className={styles.counter}>
          {counter}
        </p>
      </div>
    </Background>

  );
}

export default StatsCardLayout2;
