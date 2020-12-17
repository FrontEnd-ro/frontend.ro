import React from 'react';
import styles from './Schmoe.module.scss';

export default function SchmoeJodi({ style }: { style?: React.CSSProperties }) {
  return (
    <div style={style} className={styles.schmoe}>
      <img
        className="Schmoe__character"
        src="https://d3tycb976jpudc.cloudfront.net/schmoes/jodi.svg"
        alt="Jodi Schmoe illustration"
      />
      <img
        width="170"
        alt="Am codat toată noaptea.."
        className="Schmoe__thought"
        style={{ transform: 'translate(0, 20px)' }}
        src="/images/landing/characters/Schmoe_6.png"
      />

    </div>
  );
}
