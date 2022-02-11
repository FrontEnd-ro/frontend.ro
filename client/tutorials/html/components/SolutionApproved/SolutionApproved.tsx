import React, { useEffect, useRef } from 'react';
import ConfettiGenerator from 'confetti-js';

import styles from './SolutionApproved.module.scss';

const SolutionApproved = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const confetti = new ConfettiGenerator({
      target: canvasRef.current,
    });
    confetti.render();

    return () => confetti.clear();
  }, []);

  return (
    <>
      <div className={styles.SolutionApproved}>
        Felicitări!
      </div>
      <canvas className="absolute w-100 h-100" ref={canvasRef} />
    </>
  );
};

export default SolutionApproved;
