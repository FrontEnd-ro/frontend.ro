import React from 'react';
import Background from '../Background';
import styles from './StatsCardLayout3.module.scss';

interface Props {
  text1: string;
  text2: string;
  colorText: string;
  className?: string;
}

function StatsCardLayout3({
  text1,
  text2,
  colorText,
  className = '',
}: Props) {
  return (
    <Background
      background="image"
      src="./images/stats/vintage-typewriter.jpg"
      className={`${className} ${styles['stats-card-layout-3']} d-flex justify-content-center`}
    >
      <div className="text-center" style={{ color: `${colorText}` }}>
        <p>{text1}</p>
        <p className={`${styles.title} text-bold`}>
          {text2}
        </p>
      </div>
    </Background>

  );
}

export default StatsCardLayout3;
