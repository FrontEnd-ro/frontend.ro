import React from 'react';
import { useRouter } from 'next/router';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '~/redux/root.reducer';
import UserService from '~/services/User.service';
import { logoutUser } from '~/redux/user/user.actions';
import Button from '~/components/Button';
import Link from '~/components/generic/Link';
import List from '../List';

import styles from './NavLinks.module.scss';

function NavLinks({ user, dispatch }: ConnectedProps<typeof connector>) {
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
        <li>
          <Link href="/lectii">
            Lecții
          </Link>
        </li>
        <li>
          <Link href="/exercitii">
            Exerciții
          </Link>
        </li>
        <li>
          <Link href="/tidbits">
            Tidbits
          </Link>
        </li>
        {/* <li>
          <Link href="/evenimente">
            Evenimente
          </Link>
        </li>
        <li>
          <Link href="/slides">
            Slide-uri
          </Link>
        </li> */}
        {isLoggedIn ? (
          <li className={styles.login}>
            <Button variant="transparent" onClick={logout}>
              Sign out
            </Button>
          </li>
        ) : (
          <li className={styles.login}>
            <Link href={`/auth?next=${encodeURIComponent(router.asPath)}`}>
              Intră în cont
            </Link>
          </li>
        )}
        <li>
          <Link href="/resurse">
            Resurse utile
          </Link>
        </li>
      </List>
    </nav>
  );
}

function mapStateToProps(state: RootState) {
  return {
    user: state.user,
  };
}

const connector = connect(mapStateToProps);

export default connector(NavLinks);
