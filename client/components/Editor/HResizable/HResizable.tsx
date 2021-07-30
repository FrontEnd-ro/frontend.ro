import React, { useEffect, useRef } from 'react';
import styles from './HResizable.module.scss';

/**
 * Vertical separator, ssed inside the MonacoEditor component
 * to separate the files section from the actual coding section.
 *
 * By passing the `onResize` callback we get notified when the user
 * grips and drags it (either via Mouse or Touch).
 */
const HResizable = ({ onResize }: { onResize: ({ dx: number }) => void }) => {
  const xRef = useRef<number>(0);
  const ref = useRef<HTMLDivElement>(null);

  const onMouseDown = React.useCallback((e) => {
    xRef.current = getClientX(e);

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('touchmove', onMouseMove);

    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('touchend', onMouseUp);

    ref.current.removeEventListener('mousedown', onMouseDown);
    ref.current.removeEventListener('touchstart', onMouseDown);
  }, []);

  const onMouseMove = React.useCallback((e) => {
    onResize({ dx: getClientX(e) - xRef.current });

    xRef.current = getClientX(e);
  }, []);

  const onMouseUp = React.useCallback(() => {
    ref.current.addEventListener('mousedown', onMouseDown);
    ref.current.addEventListener('touchstart', onMouseDown);

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('touchmove', onMouseMove);

    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('touchend', onMouseUp);
  }, []);

  useEffect(() => {
    /**
     * If we're not creating a separate variable here and we
     * just do `ref.current` in the code below, we're gonna get an
     * error in the clean-up/dispose function because `ref.null`
     * will be undefined.
     *
     * Thus, by creating a separate variable here we're gonna
     * make use of closures and keep it in memory long enough
     * to remove those events
     */
    const { current: gripElement } = ref;
    gripElement.addEventListener('mousedown', onMouseDown);
    gripElement.addEventListener('touchstart', onMouseDown);

    return () => {
      gripElement.removeEventListener('mousedown', onMouseDown);
      gripElement.removeEventListener('touchstart', onMouseDown);

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return <div ref={ref} className={`${styles.resizable} ${styles['h-resizable']}`} />;
};

export default HResizable;

function getClientX(e: MouseEvent | TouchEvent) {
  if ('clientX' in e) {
    return (e as MouseEvent).clientX;
  }

  if ('touches' in e) {
    return (e as TouchEvent).touches[0].clientX;
  }

  return 0;
}
