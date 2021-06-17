import React, { useState, useEffect } from 'react';
import AD_CONFIGS from './ads/ads-model';

import styles from './LandingAdBanner.module.scss';

/**
 * Show a banner with info about our next training.
 *
 * Whether you've see it or not is saved in
 * localStorage via the `adId` key.
 */
function LandingAdBanner({ adId }: { adId: string }) {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const didShow = localStorage.getItem(adId);

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

  const adConfig = AD_CONFIGS[adId];
  const didVisit = () => localStorage.setItem(adId, 'true');

  return (
    <div className={`
      ${styles['landing-ad-banner']} 
      ${visible ? styles['landing-ad-banner--visible'] : ''} 
      d-flex justify-content-center align-items-center
    `}
    >
      <adConfig.Component href={adConfig.href} didVisit={didVisit} />
    </div>
  );
}

export default LandingAdBanner;
