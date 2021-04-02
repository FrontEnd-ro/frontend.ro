import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '~/redux/root.reducer';
import UserService from '~/services/User.service';
import { logoutUser } from '~/redux/user/user.actions';
import Button from '~/components/Button';

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
      <ol>
        <li>
          <Link href="/lectii">
            <a>
              Lecții
            </a>
          </Link>
        </li>
        {/* <li>
          <Link href="/exercitii">
            <a>
              Exerciții
            </a>
          </Link>
        </li> */}
        <li>
          <Link href="/evenimente">
            <a>
              Evenimente
            </a>
          </Link>
        </li>
        <li>
          <Link href="/slides">
            <a>
              Slide-uri
            </a>
          </Link>
        </li>
        {isLoggedIn ? (
          <li className={styles.login}>
            <Button variant="transparent" onClick={logout}>
              Sign out
            </Button>
          </li>
        ) : (
          <li className={styles.login}>
            <Link href={`/auth?next=${encodeURIComponent(router.asPath)}`}>
              <a>
                Intră în cont
              </a>
            </Link>
          </li>
        )}
      </ol>
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
