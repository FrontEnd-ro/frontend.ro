import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { connect, ConnectedProps } from 'react-redux';

import AccountTooltip from './AccountTooltip/AccountTooltip';
import Button from '~/components/Button';
import { RootState } from '~/redux/root.reducer';

import styles from './Header.module.scss';

interface Props {
  href?: string;
  demoPage?: boolean;
  onMenuClick?: () => void;
}

function Header({
  href = '/',
  demoPage,
  onMenuClick,
  isLoggedIn,
}: ConnectedProps<typeof connector> & Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`${styles.header} ${isMenuOpen ? ` ${styles['header-menu-open']}` : ''}`}>
      <div className="d-flex justify-content-between w-100 align-items-center h-100">
        {onMenuClick && (
          <Button
            onClick={onMenuClick}
            className={`header__menu-btn ${styles.menu}`}
          >
            <FontAwesomeIcon icon={faBars} />
          </Button>
        )}
        <Link href={href}>
          <a className={styles.logo}>
            <img src="/logo.png" alt="FrontEnd.ro logo" />
          </a>
        </Link>
        <nav className={styles['main-nav']}>
          <ul>
            <li>
              <Link href="/slides">
                <a> Slide-uri </a>
              </Link>
            </li>
            <li>
              <Link href="/evenimente">
                <a> Evenimente </a>
              </Link>
            </li>
          </ul>
        </nav>
        {/* <Button variant="blue" id={styles.menuOpenBtn} onClick={() => setIsMenuOpen(true)}>
          <span> Meniu </span>
          <span className={styles.hamburger}>
            <FontAwesomeIcon icon={faBars} />
          </span>
        </Button> */}
        {/* <nav className={styles['mobile-menu']}>
          <Link href={href}>
            <a className={styles.title} href="/">
              FrontEnd.ro
            </a>
          </Link>
          <ul>
            <li>
              <a href="/slideuri">Slide-uri</a>
            </li>
            <li>
              <a href="/evenimente">Evenimente</a>
            </li>
          </ul>
          <Button id={styles.menuCloseBtn} onClick={() => setIsMenuOpen(false)}>
            <span> Inchide </span>
          </Button>
        </nav> */}
        {demoPage && (
          <p className={`${styles['demo-label']} text-white mx-5 text-bold`}>
            DEMO
          </p>
        )}
      </div>
      <div>{isLoggedIn ? <AccountTooltip /> : null}</div>
    </header>
  );
}

function mapStateToProps(state: RootState) {
  return {
    isLoggedIn: !!state.user.info,
  };
}

const connector = connect(mapStateToProps);

export default connector(Header);
