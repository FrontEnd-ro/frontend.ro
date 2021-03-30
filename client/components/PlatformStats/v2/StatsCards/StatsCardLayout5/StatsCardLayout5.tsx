import React from 'react';
import { Contributor } from '~/services/contributors';
import Background from '../Background/Background';

import styles from './StatsCardLayout5.module.scss';

interface Props {
  text1: string;
  text2: string;
  colorText: string;
  contributors?: Contributor[];
  className?: string;
}

function StatsCardLayout5({
  text1,
  text2,
  colorText,
  contributors = [],
  className = '',

}: Props) {
  return (
    <Background
      background="linear-gradient"
      colorGradient1="FC83AB"
      colorGradient2="FFECB3"
      className={`${className} ${styles['stats-card-layout-5']} d-flex justify-content-center align-items-center`}
    >
      <div className="w-100" style={{ color: `${colorText}` }}>
        <p className={styles.small}>
          {text1}
        </p>
        <p className={styles.description}>
          {text2}
        </p>
        <div className={styles.contributors}>
          {contributors.map((contributor) => (
            <a href={contributor.url} key={contributor.name}>
              <img width="48" height="48" alt={`${contributor.name} avatar`} src={contributor.avatar} />
              <p>
                {contributor.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </Background>

  );
}
export default StatsCardLayout5;
