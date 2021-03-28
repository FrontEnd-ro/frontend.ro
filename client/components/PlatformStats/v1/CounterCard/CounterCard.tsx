import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './CounterCard.module.scss';

interface Props {
  icon: IconProp;
  counter: number;
  description: string;
  withAnimation?: boolean;
}

export default function CounterCard({
  icon,
  counter,
  description,
  withAnimation = true,
}: Props) {
  let counterWrapperRef = useRef(null);
  let [inView, setInView] = useState(false);
  const observerRef = useRef<IntersectionObserver>(null);

  const initIntersectionObserver = () => {
    const options = { threshold: 0.5 };

    observerRef.current = new IntersectionObserver(detectIntersection, options);
    observerRef.current.observe(counterWrapperRef.current);
  };

  const detectIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    });
  };

  useEffect(initIntersectionObserver, []);
  useEffect(() => {
    if (inView && observerRef.current) {
      observerRef.current.disconnect();
    }
  }, [inView]);

  return (
    <CountUp start={0} end={inView ? counter : 0} delay={0}>
      {({ countUpRef }) => (
        <div ref={counterWrapperRef} className={`${styles['counter-card']} text-center`}>
          <div
            className={`${styles['icon-box']} d-flex justify-content-center align-items-center`}
          >
            <FontAwesomeIcon width="30" height="30" color="#fff" icon={icon} />
          </div>
          <div className={styles['counter-details']}>
            <p ref={withAnimation && countUpRef}>{counter}</p>
            <p>{description}</p>
          </div>
        </div>
      )}
    </CountUp>
  );
}
