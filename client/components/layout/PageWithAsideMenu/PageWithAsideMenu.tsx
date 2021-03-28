import { useRouter } from 'next/router';
import React, { useState, PropsWithChildren, ReactElement } from 'react';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import AsideMenu from '../AsideMenu/AsideMenu';

import styles from './PageWithAsideMenu.module.scss';

interface Props {
  menu: {
    title: string;
    Component: ReactElement;
  }
}

function PageWithAsideMenu({ children, menu }: PropsWithChildren<Props>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  router.events.on('routeChangeStart', () => setIsMenuOpen(false));

  return (
    <div className={`${styles['page-with-aside-menu']} d-flex`}>
      <AsideMenu className={styles['aside-menu']} title={menu.title} isOpen={isMenuOpen} close={() => setIsMenuOpen(false)}>
        {menu.Component}
      </AsideMenu>
      <main>
        <Header onMenuClick={() => setIsMenuOpen(true)} withNavMenu />
        {children}
        <Footer />
      </main>
    </div>
  );
}

export default PageWithAsideMenu;
