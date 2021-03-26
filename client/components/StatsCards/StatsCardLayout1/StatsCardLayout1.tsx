import React from 'react';
import Background from '../Background';
import styles from './StatsCardLayout1.module.scss';

interface Props {
  src: string;
  counter: number;
  colorText: string;
  description: string;
  className?: string;
}

function StatsCardLayout1({
  src,
  counter,
  colorText,
  description,
  className = '',
}: Props) {
  return (
    <Background
      background="image"
      direction="to top left"
      size="cover"
      colorGradient1="ACCB0B"
      colorGradient2="FFFF82"
      src={src}
      className={`${className} ${styles['stats-card-layout-1']} d-flex justify-content-center align-items-center`}
    >
      <div className="text-center" style={{ color: `${colorText}` }}>
        <p className={styles.description}>{description}</p>
        <p className={styles.counter}>
          {counter}
        </p>
      </div>
    </Background>

  );
}

export default StatsCardLayout1;
