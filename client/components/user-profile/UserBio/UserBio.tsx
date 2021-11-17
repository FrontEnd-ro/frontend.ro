import React from 'react';
import Link from 'next/link';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '~/redux/root.reducer';
import { UserState } from '~/redux/user/types';

import styles from './UserBio.module.scss';

interface Props {
  user: UserState['info'],
  className?: string
}

function UserBio({ user, currentUser, className }: ConnectedProps<typeof connector> & Props) {
  const isOwnBio = currentUser.info && user.username === currentUser.info.username;

  return (
    <aside className={`${styles['user-bio']} ${className || ''}`}>
      <img src={user.avatar} alt={`${user.name || user.username} avatar`} />
      {user.name ? (
        <div>
          <h1>{user.name}</h1>
          <h2>
            {user.username}
          </h2>
        </div>
      ) : (
        <h2>
          {user.username}
        </h2>
      )}
      <div className={styles['description-wrapper ']}>
        {user.description && (
        <p className="text-left">
          {user.description}
        </p>
        )}
        {isOwnBio && (
        <Link href="/settings">
          <a className="btn btn--light no-underline my-5"> Editează profilul </a>
        </Link>
        )}
      </div>
    </aside>
  );
}

function mapStateToProps(state: RootState) {
  return {
    currentUser: state.user,
  };
}

const connector = connect(mapStateToProps);

export default connector(UserBio);
