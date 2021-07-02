import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ApplicationConfig } from '~/redux/application-config.reducer';

import styles from './LandingAdBanner.module.scss';

/**
 * Show a banner with info about our next training.
 *
 * Whether you've see it or not is saved in
 * localStorage via the `adId` key.
 */
function LandingAdBanner({ banner }: { banner: ApplicationConfig['banner'] }) {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const didShow = localStorage.getItem(banner.id);

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

  const didVisit = () => localStorage.setItem(banner.id, 'true');

  return (
    <div className={`
      ${styles['landing-ad-banner']} 
      ${visible ? styles['landing-ad-banner--visible'] : ''} 
      d-flex justify-content-center align-items-center
    `}
    >
      <FontAwesomeIcon className="mr-2" icon={faBell} width={24} height={24} />
      <p className="mr-2">
        {banner.text}
      </p>
      {banner.cta && banner.ctaLink && (
        <Link href={banner.ctaLink}>
          <a onClick={didVisit}>
            {banner.cta}
          </a>
        </Link>
      )}
    </div>
  );
}

export default LandingAdBanner;
