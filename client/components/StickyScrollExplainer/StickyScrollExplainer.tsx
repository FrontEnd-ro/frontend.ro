import noop from 'lodash/noop';
import React, { useState, useEffect, useRef } from 'react';
import styles from './StickyScrollExplainer.module.scss';

interface Props {
  // Left-side component that explains the animations
  // on the right.
  Explainer: () => JSX.Element;

  // Right-side animation component. It gets a percentage as prop,
  // which changes whenever the scroll changes.
  Animation: ({ percentage }: { percentage: number }) => JSX.Element;

  // Breakpoint where to switch from `row` to `column` layout.
  breakpoint?: number;
  className?: string;
}

const StickyScrollExplainer = ({
  Explainer,
  Animation,
  breakpoint = -1,
  className = '',
}: Props) => {
  const [isColumn, setIsColumn] = useState(false);
  const [percentage, setPercentage] = useState(0);

  const rootRef = useRef<HTMLElement>(null);

  // How much of the total height has it been scrolled
  const computePercentage = () => {
    // I think this have have a "delay", half of it's height!
    const { offsetTop, offsetHeight } = rootRef.current;
    let { scrollY, innerHeight } = window;

    // This component will always be full screen (100vh)
    // We want to start "counting" the percentage
    // only when this component is halfway into view.
    // Since this component will be full-screen,
    // we subtract from scrollY half of the window height
    scrollY -= innerHeight / 2;

    const scrollOver = scrollY + innerHeight - offsetTop;

    if (scrollOver / offsetHeight > 1) {
      return 100;
    }

    if (scrollOver / offsetHeight < 0) {
      return 0;
    }

    return (scrollOver / offsetHeight) * 100;
  };

  useEffect(() => {
    setPercentage(computePercentage());

    function onWindowScroll() {
      setPercentage(computePercentage());
    }

    window.addEventListener('scroll', onWindowScroll);
    return () => {
      window.removeEventListener('scroll', onWindowScroll);
    };
  }, []);

  useEffect(() => {
    if (breakpoint === -1) {
      // Ignore
      return noop;
    }

    /**
     * We want this component to be totally reusable, maybe even
     * extract into a separate UI Library at some point. This
     * means that CSS Modules do not work. Instead, Styled Components
     * would be a great choice.
     *
     * But, we don't want to add them in our project yet,
     * so going with this compromise aproach - using JS
     * to listen to the window resize event.
     */
    const onWindowResize = () => {
      if (window.innerWidth <= breakpoint && !isColumn) {
        setIsColumn(true);
      }

      if (window.innerWidth > breakpoint && isColumn) {
        setIsColumn(false);
      }
    };

    onWindowResize();
    window.addEventListener('resize', onWindowResize);
    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, [isColumn, breakpoint]);

  return (
    <section
      ref={rootRef}
      className={`
        ${styles.StickyScrollExplainer}
        ${isColumn ? styles['StickyScrollExplainer-column'] : styles['StickyScrollExplainer-row']}
        ${className}
      `}
    >
      <div className={styles.explainer}>
        <Explainer />
      </div>
      <div className={styles.animation}>
        <Animation percentage={percentage} />
      </div>
    </section>
  );
};

export default StickyScrollExplainer;
