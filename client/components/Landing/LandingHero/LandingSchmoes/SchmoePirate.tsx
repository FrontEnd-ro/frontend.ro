import React from 'react';
import styles from './Schmoe.module.scss';

export default function SchmoePirate({ style }: { style?: React.CSSProperties }) {
  return (
    <div style={style} className={styles.schmoe}>
      <img
        className="Schmoe__character"
        alt="Pirate Schmoe illustration"
        src="https://d3tycb976jpudc.cloudfront.net/schmoes/adam.svg"
      />
      <img
        width="240"
        alt="Ahoy Frontend'er"
        className="Schmoe__thought"
        style={{ transform: 'translate(-120px, 20px)' }}
        src="/images/landing/characters/Schmoe_7.png"
      />

    </div>
  );
}
