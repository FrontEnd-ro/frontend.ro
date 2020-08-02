import React from 'react';
import Link from 'next/link';

import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.logo}>
          <img src="/logo.png" alt="FrontEnd.ro logo" />
        </a>
      </Link>
    </header>
  );
}
