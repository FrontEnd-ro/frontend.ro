import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './LandingAdBanner.module.scss';

const LOCAL_STORAGE_KEY = 'ad/git-incepatori';

function LandingAdBanner() {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const didShow = localStorage.getItem(LOCAL_STORAGE_KEY);

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

  const didVisit = () => localStorage.setItem(LOCAL_STORAGE_KEY, 'true');

  return (
    <div className={`
      ${styles['landing-ad-banner']} 
      ${visible ? styles['landing-ad-banner--visible'] : ''} 
      d-flex justify-content-center align-items-center
    `}
    >
      <FontAwesomeIcon className="mr-2" icon={faBell} width={24} height={24} />
      <p className="mr-2">
        În weekend organizăm un training gratuit despre Git & GitHub.
      </p>
      <Link href="/evenimente/git-incepatori">
        <a onClick={didVisit}>
          Vrei să participi?
        </a>
      </Link>
    </div>
  );
}

export default LandingAdBanner;
