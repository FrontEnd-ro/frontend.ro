import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';

interface Props {
  onMenuClick?: () => void
}

export default function Header({ onMenuClick } : Props) {
  return (
    <header className={styles.header}>
      <div className="d-flex align-items-center h-100">
        {onMenuClick && (
        <button type="button" onClick={onMenuClick} className={`ceva btn--transparent ${styles.menu}`}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        ) }
        <Link href="/">
          <a className={styles.logo}>
            <img src="/logo.png" alt="FrontEnd.ro logo" />
          </a>
        </Link>
      </div>
      {/* We're gonna have the user info and a drodown menu on the right */}
    </header>
  );
}
