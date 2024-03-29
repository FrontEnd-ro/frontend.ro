import React from 'react';
import { useRouter } from 'next/router';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '~/redux/root.reducer';
import UserService from '~/services/api/User.service';
import { logoutUser } from '~/redux/user/user.actions';
import Button from '~/components/Button';
import Link from '~/components/generic/Link';
import List from '../List';

import styles from './NavLinks.module.scss';

function NavLinks({ user, navItems, dispatch }: ConnectedProps<typeof connector>) {
  const router = useRouter();
  const isLoggedIn = !!user.info;

  const logout = () => {
    UserService.logout().then(() => {
      router.replace('/').then(() => {
        dispatch(logoutUser());
      });
    });
  };

  return (
    <nav className={styles['nav-links']}>
      <List as="ol">
        {navItems.map((navItem) => (
          <li key={navItem._id}>
            <Link
              prefetch={false}
              href={navItem.href}
              className={`${navItem.highlighted === true ? styles.highlighted : ''}`}
            >
              {navItem.text}
            </Link>
          </li>
        ))}
        {isLoggedIn ? (
          <li className={styles.login}>
            <Button variant="transparent" onClick={logout}>
              Sign out
            </Button>
          </li>
        ) : (
          <li className={styles.login}>
            <Link prefetch={false} href={`/auth?next=${encodeURIComponent(router.asPath)}`}>
              Intră în cont
            </Link>
          </li>
        )}
      </List>
    </nav>
  );
}

function mapStateToProps(state: RootState) {
  return {
    user: state.user,
    navItems: state.applicationConfig.navItems,
  };
}

const connector = connect(mapStateToProps);

export default connector(NavLinks);
