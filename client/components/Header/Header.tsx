import React, { useEffect, useState } from 'react';
import Link from '~/components/generic/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faLink } from '@fortawesome/free-solid-svg-icons';

import { connect, ConnectedProps } from 'react-redux';

import AccountTooltip from './AccountTooltip/AccountTooltip';
import Button from '~/components/Button';
import { RootState } from '~/redux/root.reducer';

import styles from './Header.module.scss';
import AsideMenu from '../layout/AsideMenu/AsideMenu';
import NavLinks from '../NavLinks/NavLinks';
import { ThemeVariant } from '~/services/Constants';
import NotificationTooltip from '../notification-tooltip/NotificationTooltip';
import { useTranslation } from '~/services/typesafeNextTranslate';

interface Props {
  href?: string;
  demoPage?: boolean;
  withNavMenu?: boolean;
  onMenuClick?: () => void;
  theme?: ThemeVariant;
  className?: string;
}

function Header({
  href = '/',
  demoPage,
  onMenuClick,
  isLoggedIn,
  navItems,
  withNavMenu = false,
  theme = 'light',
  className = '',
}: ConnectedProps<typeof connector> & Props) {
  const { t } = useTranslation('common');
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const hasHighlightNavItems = navItems.some((item) => item.highlighted === true);

  return (
    <>

      <header className={`${styles.header} ${styles[`theme-${theme}`]} ${className}`}>
        <div className="d-flex justify-content-between w-100 align-items-center h-100">
          {onMenuClick && (
            <Button
              onClick={onMenuClick}
              className={`header__menu-btn ${styles.menu}`}
            >
              <FontAwesomeIcon icon={faBars} />
            </Button>
          )}
          <Link prefetch={false} className={styles.logo} href={href}>
            <picture>
              <source
                srcSet={`${process.env.CLOUDFRONT_PUBLIC}/public/logo-square--S.jpg`}
                media="(max-width: 600px)"
              />
              <source
                srcSet={`${process.env.CLOUDFRONT_PUBLIC}/public/logo.png`}
                media="(min-width: 600px)"
              />
              <img
                src={`${process.env.CLOUDFRONT_PUBLIC}/public/logo.png`}
                alt="FrontEnd.ro logo"
              />
            </picture>
          </Link>
          {demoPage && (
            <p className={`${styles['demo-label']} text-white mx-5 text-bold`}>
              DEMO
            </p>
          )}
        </div>
        <div className="d-flex align-items-center h-100 py-1 gap-x-4">
          {isLoggedIn ? (
            <>
              <AccountTooltip theme={theme} />
              <NotificationTooltip
                theme={theme}
                tooltipClassName={styles.NotificationTooltip}
              />
            </>
          ) : null}
          {withNavMenu && (
            <Button
              variant="transparent"
              onClick={() => setIsNavMenuOpen(true)}
              className={`
                ${styles['nav-menu']}
                ${hasHighlightNavItems ? styles['nav-menu--highlight'] : ''}
                h-100
                relative
                align-items-center
              `}
            >
              Nav
              <FontAwesomeIcon className="ml-2" icon={faBars} />
            </Button>
          )}
        </div>
      </header>
      {
        withNavMenu && (
          <AsideMenu
            hideScrollOnBody
            title={t('FrontEndro')}
            isOpen={isNavMenuOpen}
            className={styles['aside-menu']}
            close={() => setIsNavMenuOpen(false)}
          >
            <div className={styles['nav-wrapper']}>
              <NavLinks />
            </div>
          </AsideMenu>
        )
      }

    </>
  );
}

function mapStateToProps(state: RootState) {
  return {
    isLoggedIn: !!state.user.info,
    navItems: state.applicationConfig.navItems,
  };
}

const connector = connect(mapStateToProps);

export default connector(Header);
