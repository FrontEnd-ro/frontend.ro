import React, { useState, useEffect } from 'react';
import { noop } from 'lodash';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import Button from '~/components/Button';
import StackedImages from '~/components/StackedImages';

import styles from './LandingTidbits.module.scss';

const LandingTidbits = () => {
  const images = [{
    textColor: '#fff',
    backgroundColor: '#252734',
    alt: 'Cum să animezi un Blob?',
    href: 'https://www.instagram.com/p/CYn5OuCoOXm/',
    src: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/blob-animation/2.jpg',
  }, {
    textColor: '#272936',
    backgroundColor: '#fff',
    alt: 'Nou feature pe FrontEnd.ro',
    href: 'https://www.instagram.com/p/CYdnoW2IgVP/',
    src: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/feature-tutorial-progress/2.jpg',
  }, {
    textColor: '#fff',
    backgroundColor: '#1a1b16',
    alt: 'Deci FrontEnd-ul e doar butoane?',
    href: 'https://www.instagram.com/p/CV7wqmaIMxR/',
    src: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/so-frontend-is-just-buttons/2.jpg',
  }, {
    textColor: '#eb4d4c',
    backgroundColor: '#fff',
    alt: 'Formulare Web',
    href: 'https://www.instagram.com/p/CT_lyItoKRZ/',
    src: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/html-forms/2.jpg',
  }, {
    textColor: '#fff',
    backgroundColor: '#eb4d4c',
    alt: 'Video și Audio',
    href: 'https://www.instagram.com/p/CTuUpVflDuB/',
    src: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/video-audio/2.jpg',
  }, {
    textColor: '#121212',
    backgroundColor: '#fff',
    alt: 'Imagini și cum le optimizăm?',
    href: 'https://www.instagram.com/p/CTb5oOoIwBF/',
    src: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/html-images/2.jpg',
  }, {
    textColor: '#fff',
    backgroundColor: '#eb4d4c',
    alt: 'Elemente de tip container',
    href: 'https://www.instagram.com/p/CTT0Zs8o7Fr/',
    src: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/container-elements/2.jpg',
  }, {
    textColor: '#eb4d4c',
    backgroundColor: '#fff',
    alt: 'Liste în HTML',
    href: 'https://www.instagram.com/p/CTEdMftIghc/',
    src: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/html-lists/2.jpg',
  }, {
    textColor: '#fff',
    backgroundColor: '#eb4d4c',
    alt: 'Linkuri și Butoane',
    href: 'https://www.instagram.com/p/CSoGpI0o7ha/',
    src: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/links-and-buttons/2.jpg',
  }, {
    textColor: '#121212',
    backgroundColor: '#fff',
    alt: 'Markup pentru texte',
    href: 'https://www.instagram.com/p/CSdwjo5oSdt/',
    src: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/text-markup/2.jpg',
  }, {
    textColor: '#fff',
    backgroundColor: '#eb4d4c',
    alt: 'Validarea paginii HTML',
    href: 'https://www.instagram.com/p/CSV_UcHIE06/',
    src: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/html-validation/2.jpg',
  }, {
    textColor: '#eb4d4c',
    backgroundColor: '#fff',
    alt: 'Structura unei pagini HTML',
    href: 'https://www.instagram.com/p/CQidsvAnYtC/',
    src: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/html-structure/2.jpg',
  }, {
    textColor: '#fff',
    backgroundColor: '#eb4d4c',
    alt: 'Despre Programare Web și HTML',
    href: 'https://www.instagram.com/p/CSJU3miIEi5/',
    src: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/about-web-development-and-html/2.jpg',
  }, {
    textColor: '#297fb8',
    backgroundColor: '#fff',
    alt: 'Cum să faci logo-ul responsive?',
    href: 'https://www.instagram.com/p/CPK4UwYnVRx/',
    src: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/responsive-logo/2.jpg',
  }];

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
    if (currentIndex + 1 === images.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousPage = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
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
        backgroundColor: images[currentIndex].backgroundColor,
        color: images[currentIndex].textColor,
      }}
      ref={ref}
    >
      <div className={`${styles.about} d-flex flex-column justify-content-between`}>
        <a
          target="_blank"
          rel="noreferrer"
          href={images[currentIndex].href}
          className={`${styles['heading-link']} no-underline`}
        >
          <h2 className={`${styles.heading} m-0`}>
            {images[currentIndex].alt}
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
            <Progress key={currentIndex} color={images[currentIndex].textColor} />
          )}
        </div>
      </div>
      <StackedImages
        images={images}
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
