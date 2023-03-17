import { useRouter } from 'next/router';
import React, {
  useState, PropsWithChildren, ReactElement, useEffect,
} from 'react';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import AsideMenu from '../AsideMenu/AsideMenu';

import styles from './PageWithAsideMenu.module.scss';

interface Props {
  menu: {
    title: string;
    Component: ReactElement;
  }
  withFooter?: boolean;
}

function PageWithAsideMenu({ children, menu, withFooter = true }: PropsWithChildren<Props>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => setIsMenuOpen(false);
    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  return (
    <div className={`${styles['page-with-aside-menu']} d-flex`}>
      <AsideMenu
        className={`${styles['aside-menu']} d-flex flex-column`}
        title={menu.title}
        isOpen={isMenuOpen}
        close={() => setIsMenuOpen(false)}
      >
        {menu.Component}
      </AsideMenu>
      <main className="d-flex flex-column">
        <Header onMenuClick={() => setIsMenuOpen(true)} withNavMenu />
        {children}
        {withFooter && (
          <Footer />
        )}
      </main>
    </div>
  );
}

export default PageWithAsideMenu;
