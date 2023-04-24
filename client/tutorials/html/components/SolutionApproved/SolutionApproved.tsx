import React, { useEffect, useRef } from 'react';
import ConfettiGenerator from 'confetti-js';
import { useTranslation } from '~/services/typesafeNextTranslate';

import styles from './SolutionApproved.module.scss';

const SolutionApproved = () => {
  const { t } = useTranslation('common');
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
        {t('Congratulations!')}
      </div>
      <canvas className="absolute w-100 h-100" ref={canvasRef} />
    </>
  );
};

export default SolutionApproved;
