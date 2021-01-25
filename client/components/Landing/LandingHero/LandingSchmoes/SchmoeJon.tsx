import React from 'react';
import styles from './Schmoe.module.scss';

export default function SchmoeJon({ style }: { style?: React.CSSProperties }) {
  return (
    <div style={style} className={styles.schmoe}>
      <img
        className="Schmoe__character"
        alt="Jon Schmoe illustration"
        src="https://d3tycb976jpudc.cloudfront.net/schmoes/jon.svg"
      />
      <img
        width="260"
        className="Schmoe__thought"
        alt="Desigur! Hai sa invatam impreuna!"
        style={{ transform: 'translate(-100px, 30px)' }}
        src="/images/landing/characters/Schmoe_5.png"
      />

    </div>
  );
}
