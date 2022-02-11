import React, { useEffect, useRef } from 'react';
import ConfettiGenerator from 'confetti-js';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        <FontAwesomeIcon icon={faCheck} width={32} className="mr-2" />
        Soluția e corectă!
      </div>
      <canvas className="absolute w-100 h-100" ref={canvasRef} />
    </>
  );
};

export default SolutionApproved;
