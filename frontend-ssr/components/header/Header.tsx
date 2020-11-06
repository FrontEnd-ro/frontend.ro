import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';

interface Props {
  demoPage?: boolean
  onMenuClick?: () => void
}

export default function Header({ demoPage, onMenuClick } : Props) {
  return (
    <header className={styles.header}>
      <div className="d-flex align-items-center h-100">
        {onMenuClick && (
        <button type="button" onClick={onMenuClick} className={`header__menu-btn btn--transparent ${styles.menu}`}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        ) }
        <Link href="/">
          <a className={styles.logo}>
            <img src="/logo.png" alt="FrontEnd.ro logo" />
          </a>
        </Link>
        {demoPage && (
        <p
          className={`${styles['demo-label']} text-white mx-5 text-bold`}
        >
          DEMO
        </p>
        )}
      </div>
      {/* We're gonna have the user info and a drodown menu on the right */}
    </header>
  );
}
