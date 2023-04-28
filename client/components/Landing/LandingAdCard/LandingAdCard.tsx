import React, { useState, useEffect } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '~/components/Button';
import Link from '~/components/generic/Link';
import { ApplicationConfig } from '~/../shared/types/application-config.types';

import styles from './LandingAdCard.module.scss';

/**
 * Show an "ad" card that promotes our latest
 * features/lessons, etc. It's fully configurable from the
 * database via the `application-config` model.
 *
 * When you clicked the `ctaLink` or the close button,
 * we save this information in `localStorage` so we know
 * not to show it to you on a subsequent visit.
 */
function LandingAdCard({ ad }: { ad: ApplicationConfig['ad'] }) {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const didShow = localStorage.getItem(ad.id);

    if (!didShow) {
      setShow(true);
    }
  }, []);

  useEffect(() => {
    if (show) {
      setTimeout(() => setVisible(true), 1000);
    }
  }, [show]);

  if (!show) {
    return null;
  }

  const didVisit = () => {
    setVisible(false);
    localStorage.setItem(ad.id, 'true');
  };

  return (
    <div className={`
      ${styles.LandingAdCard}
      ${visible ? styles['LandingAdCard--visible'] : ''}
      w-100
    `}
    >
      <div className={`${styles.content} bg-white relative d-flex align-items-center flex-wrap`}>
        <h2 className="m-0">
          Hey,
        </h2>
        <p className="mr-2">
          {ad.text}
        </p>
        {ad.cta && ad.ctaLink && (
          <Link prefetch={false} onClick={didVisit} href={ad.ctaLink}>
            {ad.cta}
          </Link>
        )}
        <Button className={`${styles['close-button']} text-silver absolute`} onClick={didVisit}>
          <FontAwesomeIcon icon={faTimes} width={20} height={20} />
        </Button>
      </div>
    </div>
  );
}

export default LandingAdCard;
