import React from 'react';
import styles from './Schmoe.module.scss';

export default function SchmoeJazabelle({ style }: { style?: React.CSSProperties }) {
  return (
    <div style={style} className={styles.schmoe}>
      <img
        className="Schmoe__character"
        src="https://d3tycb976jpudc.cloudfront.net/schmoes/jazebelle.svg"
        alt="Jazabelle Schmoe illustration"
      />
      <img
        width="220"
        className="Schmoe__thought"
        style={{ transform: 'translate(0, 20px)' }}
        alt="Da, sunt developer. FrontEnd developer!"
        src="/images/landing/characters/Schmoe_3.png"
      />

    </div>
  );
}
