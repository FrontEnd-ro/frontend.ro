import React from 'react';
import Background from '../Background/Background';
import styles from './StatsCardLayout4.module.scss';

interface Props {
  title: string;
  counter1: number;
  counter2: number;
  text1: string;
  text2: string;
  colorText: string;
  className?: string;
}

function StatsCardLayout4({
  title,
  counter1,
  counter2,
  text1,
  text2,
  colorText,
  className = '',
}: Props) {
  return (
    <Background
      background="linear-gradient"
      colorGradient1="FAD49E"
      colorGradient2="58af58"
      className={`${className} ${styles['stats-card-layout-4']} d-flex justify-content-center align-items-center`}
    >
      <div className="text-center w-100" style={{ color: `${colorText}` }}>
        <div className={styles['title-wrapper']}>
          <p className={styles.title}>
            {title}
          </p>
        </div>

        <ul className={styles['stats-list']}>
          <li className="d-flex flex-column align-items-center justify-content-center">
            <span className={styles.counter}>{counter1}</span>
            <p className={styles.description}>
              {text1}
            </p>
          </li>
          <li className="d-flex flex-column align-items-center justify-content-center">
            <span className={styles.counter}>{counter2}</span>
            <p className={styles.description}>
              {text2}
            </p>
          </li>
        </ul>
      </div>
    </Background>

  );
}
export default StatsCardLayout4;
