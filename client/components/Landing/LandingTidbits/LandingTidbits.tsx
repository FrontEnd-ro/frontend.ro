import React, { useState, useEffect } from 'react';
import { noop } from 'lodash';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import Button from '~/components/Button';
import StackedImages from '~/components/StackedImages';
import { TidbitI } from '~/../shared/types/tidbit.types';

import styles from './LandingTidbits.module.scss';

const LandingTidbits = ({ tidbits }: { tidbits: TidbitI[] }) => {
  // Temporary hardcode the HREF to the instagram posts
  // Remove when we fully implemented the Tidbits functionality,
  // including separate pages.
  const TIDBIT_HREF = [
    'https://www.instagram.com/p/CYn5OuCoOXm/',
    'https://www.instagram.com/p/CYdnoW2IgVP/',
    'https://www.instagram.com/p/CV7wqmaIMxR/',
    'https://www.instagram.com/p/CT_lyItoKRZ/',
    'https://www.instagram.com/p/CTuUpVflDuB/',
    'https://www.instagram.com/p/CTb5oOoIwBF/',
    'https://www.instagram.com/p/CTT0Zs8o7Fr/',
    'https://www.instagram.com/p/CTEdMftIghc/',
    'https://www.instagram.com/p/CSoGpI0o7ha/',
    'https://www.instagram.com/p/CSdwjo5oSdt/',
    'https://www.instagram.com/p/CSV_UcHIE06/',
    'https://www.instagram.com/p/CQidsvAnYtC/',
    'https://www.instagram.com/p/CSJU3miIEi5/',
    'https://www.instagram.com/p/CPK4UwYnVRx/',
  ];

  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!inView) {
      return noop;
    }

    const TIMEOUT_DURATION = 3000;
    const timeoutId = setTimeout(nextPage, TIMEOUT_DURATION);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentIndex, inView]);

  const nextPage = () => {
    if (currentIndex + 1 === tidbits.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousPage = () => {
    if (currentIndex === 0) {
      setCurrentIndex(tidbits.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section
      className={`
        ${styles.LandingTidbits}
        d-flex
        align-items-center
        justify-content-between
      `}
      style={{
        backgroundColor: tidbits[currentIndex].backgroundColor,
        color: tidbits[currentIndex].textColor,
      }}
      ref={ref}
    >
      <div className={`${styles.about} d-flex flex-column justify-content-between`}>
        <a
          target="_blank"
          rel="noreferrer"
          href={TIDBIT_HREF[currentIndex]}
          className={`${styles['heading-link']} no-underline`}
        >
          <h2 className={`${styles.heading} m-0`}>
            {tidbits[currentIndex].title}
          </h2>
        </a>
        <div className={styles.controls}>
          <div>
            <Button variant="transparent" onClick={previousPage}>
              <FontAwesomeIcon width={32} icon={faArrowAltCircleLeft} />
            </Button>
            <Button variant="transparent" onClick={nextPage}>
              <FontAwesomeIcon width={32} icon={faArrowAltCircleRight} />
            </Button>
          </div>
          {inView && (
            <Progress key={currentIndex} color={tidbits[currentIndex].textColor} />
          )}
        </div>
      </div>
      <StackedImages
        images={tidbits.map((t, index) => ({
          href: TIDBIT_HREF[index],
          alt: t.title,
          src: t.items[1].imageSrc,
        }))}
        rotationDelta={15}
        currentIndex={currentIndex}
        className={styles.StackedImages}
      />
    </section>
  );
};

const Progress = ({ color = 'var(--black)' }: { color?: string }) => {
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    // TODO: DOCUMENT WHY WE NEED THIS TIMEOUT!
    setTimeout(() => {
      setDidMount(true);
    }, 10);
  }, []);

  return (
    <div className={styles.progress}>
      <div
        className="w-100 h-100 bg-black"
        style={{
          backgroundColor: color,
          transform: didMount ? 'scaleX(1)' : 'scaleX(0)',
        }}
      />
    </div>
  );
};

export default LandingTidbits;
