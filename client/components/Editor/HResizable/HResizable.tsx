import React, { useEffect, useRef } from 'react';
import styles from './HResizable.module.scss';

const HResizable = ({ onResize }: {onResize: ({ dx: number }) => void}) => {
  const ref = useRef(null);
  const xRef = useRef(0);

  const onMouseDown = (e) => {
    xRef.current = getClientX(e);

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('touchmove', onMouseMove);

    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('touchend', onMouseUp);

    ref.current.removeEventListener('mousedown', onMouseDown);
    ref.current.removeEventListener('touchstart', onMouseDown);
  };

  const onMouseMove = (e) => {
    onResize({ dx: getClientX(e) - xRef.current });

    xRef.current = getClientX(e);
  };

  const onMouseUp = () => {
    ref.current.addEventListener('mousedown', onMouseDown);
    ref.current.addEventListener('touchstart', onMouseDown);

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('touchmove', onMouseMove);

    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('touchend', onMouseUp);
  };

  useEffect(() => {
    ref.current.addEventListener('mousedown', onMouseDown);
    ref.current.addEventListener('touchstart', onMouseDown);

    return () => {
      ref.current.removeEventListener('mousedown', onMouseDown);
      ref.current.removeEventListener('touchstart', onMouseDown);

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return <div ref={ref} className={`${styles.resizable} ${styles['h-resizable']}`} />;
};

export default HResizable;

function getClientX(e) {
  return e.clientX || e.touches[0].clientX;
}
