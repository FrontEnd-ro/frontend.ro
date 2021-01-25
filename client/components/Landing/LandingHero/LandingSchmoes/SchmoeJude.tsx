import React from 'react';
import styles from './Schmoe.module.scss';

export default function SchmoeJude({ style }: { style?: React.CSSProperties }) {
  return (
    <div style={style} className={styles.schmoe}>
      <img
        className="Schmoe__character"
        alt="Jude Schmoe illustration"
        src="https://d3tycb976jpudc.cloudfront.net/schmoes/jude.svg"
      />
      <img
        width="200"
        className="Schmoe__thought"
        alt="Uhm... Cred că am nevoie de ajutor"
        style={{ transform: 'translateY(50px)' }}
        src="/images/landing/characters/Schmoe_4.png"
      />

    </div>
  );
}
