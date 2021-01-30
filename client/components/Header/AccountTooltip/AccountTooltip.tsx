import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { connect, ConnectedProps } from 'react-redux';
import UserService from '~/services/User.service';
import { RootState } from '~/redux/root.reducer';

import styles from './AccountTooltip.module.scss';
import { useOutsideClick } from '~/services/Hooks';

function AccountTooltip({ user }: ConnectedProps<typeof connector>) {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const logout = () => {
    UserService.logout().then(() => {
      window.location.pathname = '/';
    });
  };

  const toggleToolip = () => setIsOpen(!isOpen);

  useOutsideClick(ref, () => setIsOpen(false));

  return (
    <div ref={ref} className={styles['account-tooltip']}>
      <button className={styles.avatar} type="button" onClick={toggleToolip}>
        <img
          className="pointer"
          title="Toggle menu"
          src={user.info.avatar}
          alt={`${user.info.name} avatar`}
          width="32"
          data-toggle="true"
        />
      </button>
      {isOpen && (
        <ul className="menu">
          <li>
            <Link href="/settings">
              <a className="no-underline">
                Account Settings
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
