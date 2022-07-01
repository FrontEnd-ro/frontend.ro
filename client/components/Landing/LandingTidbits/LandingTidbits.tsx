import { noop } from 'lodash';
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import Button from '~/components/Button';
import Link from '~/components/generic/Link';
import SVGArrow from '../../SVGArrow/SVGArrow';
import StackedImages from '~/components/StackedImages';
import { TidbitI } from '~/../shared/types/tidbit.types';

import styles from './LandingTidbits.module.scss';

const LandingTidbits = ({ tidbits }: { tidbits: TidbitI[] }) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: false,
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
    <div>
      <CallToAction arrowColor={tidbits[currentIndex].textColor} />
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
            rel="noreferrer"
            href={`/tidbits/${tidbits[currentIndex].tidbitId}/${currentIndex + 1}`}
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
            href: `/tidbits/${tidbits[currentIndex].tidbitId}/${currentIndex + 1}`,
            alt: t.title,
            src: t.items[1].imageSrc,
          }))}
          rotationDelta={15}
          currentIndex={currentIndex}
          className={styles.StackedImages}
        />
      </section>
    </div>
  );
};

const CallToAction = ({ arrowColor }: { arrowColor: string }) => (
  <div className={`${styles.CallToAction} relative`}>
    <h2 className="mb-8 d-inline-block">
      Iar dacă ești deja
      {' '}
      <span className="text-blue">programator</span>
      ,
      <br />
      În fiecare saptămână postăm
      {' '}
      <Link href="/tidbits">
        Tips & Tricks
      </Link>
    </h2>
    {(arrowColor !== '#fff' && arrowColor !== '#ffffff') && (
      <SVGArrow color={arrowColor} className={`${styles.SVGArrow} absolute`} />
    )}
  </div>
);

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
