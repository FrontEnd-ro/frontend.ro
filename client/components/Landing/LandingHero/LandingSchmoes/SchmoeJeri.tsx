import React from 'react';
import styles from './Schmoe.module.scss';

export default function SchmoeJeri({ style }: { style?: React.CSSProperties }) {
  return (
    <div style={style} className={styles.schmoe}>
      <img
        className="Schmoe__character"
        src="https://d3tycb976jpudc.cloudfront.net/schmoes/jeri.svg"
        alt="Jeri Schmoe illustration"
      />
      <img
        alt="Meah, încă un bug..."
        width="200"
        className="Schmoe__thought"
        style={{ transform: 'translate(20px, 20px)' }}
        src="/images/landing/characters/Schmoe_1.png"
      />

    </div>
  );
}
