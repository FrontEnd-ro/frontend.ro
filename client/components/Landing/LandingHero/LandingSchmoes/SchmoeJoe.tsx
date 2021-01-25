import React from 'react';
import styles from './Schmoe.module.scss';

export default function SchmoeJoe({ style }: { style?: React.CSSProperties }) {
  return (
    <div style={style} className={styles.schmoe}>
      <img
        className="Schmoe__character"
        alt="Joe Schmoe illustration"
        src="https://d3tycb976jpudc.cloudfront.net/schmoes/joe.svg"
      />
      <img
        width="325"
        className="Schmoe__thought"
        alt="Wow! Nu ma asteptam sa-mi placa asa mult"
        style={{ transform: 'translate(0px, 20px)' }}
        src="/images/landing/characters/Schmoe_2.png"
      />

    </div>
  );
}
