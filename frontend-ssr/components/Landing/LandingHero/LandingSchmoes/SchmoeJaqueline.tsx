import React from 'react';
import styles from './Schmoe.module.scss';

export default function SchmoeJaqueline({ style }: { style?: React.CSSProperties }) {
  return (
    <div style={style} className={styles.schmoe}>
      <img
        className="Schmoe__character"
        src="https://d3tycb976jpudc.cloudfront.net/schmoes/jaqueline.svg"
        alt="Jaqueline Schmoe illustration"
      />
      <img
        alt="Nu e prea târziu să începi ceva nou"
        width="260"
        className="Schmoe__thought"
        style={{ transform: 'translate(65px, 40px)' }}
        src="/images/landing/characters/Schmoe_8.png"
      />

    </div>
  );
}
