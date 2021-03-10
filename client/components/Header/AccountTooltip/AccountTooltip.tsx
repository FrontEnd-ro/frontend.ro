import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { connect, ConnectedProps } from 'react-redux';
import { useRouter } from 'next/router';
import UserService from '~/services/User.service';
import { RootState } from '~/redux/root.reducer';
import Button from '~/components/Button';

import styles from './AccountTooltip.module.scss';
import { useOutsideClick } from '~/services/Hooks';
import { logoutUser } from '~/redux/user/user.actions';

function AccountTooltip({ user, dispatch }: ConnectedProps<typeof connector>) {
  const ref = useRef(null);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const logout = () => {
    UserService.logout().then(() => {
      router.replace('/').then(() => {
        dispatch(logoutUser());
      });
    });
  };

  const toggleToolip = () => setIsOpen(!isOpen);

  useOutsideClick(ref, () => setIsOpen(false));

  return (
    <div ref={ref} className={styles['account-tooltip']}>
      <Button className={styles.avatar} onClick={toggleToolip}>
        <img
          className="pointer"
          title="Toggle menu"
          src={user.info.avatar}
          alt={`${user.info.name} avatar`}
          width="32"
          data-toggle="true"
        />
      </Button>
      {isOpen && (
        <ul className="menu">
          <li>
            <Link href={`/${user.info.username}`}>
              <a className="no-underline">
                Profilul tău
              </a>
            </Link>
          </li>
          <li>
            <Link href="/settings">
              <a className="no-underline">
                Setările contului
              </a>
            </Link>
          </li>
          <li>
            <a href="#" onClick={logout} className="no-underline">
              Sign out
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}

function mapStateToProps(state: RootState) {
  return {
    user: state.user,
  };
}

const connector = connect(mapStateToProps);

export default connector(AccountTooltip);
