import React from 'react';
import styles from './Schmoe.module.scss';

export default function SchmoeJacques({ style }: { style?: React.CSSProperties }) {
  return (
    <div style={style} className={styles.schmoe}>
      <img
        className="Schmoe__character"
        src="https://d3tycb976jpudc.cloudfront.net/schmoes/jacques.svg"
        alt="Jacques Schmoe illustration"
      />
      <img
        width="400"
        alt="Pe vremea mea FrontEnd'ul nu era asa popular"
        className="Schmoe__thought"
        style={{ transform: 'translate(-240px, 35px)' }}
        src="/images/landing/characters/Schmoe_9.png"
      />

    </div>
  );
}
