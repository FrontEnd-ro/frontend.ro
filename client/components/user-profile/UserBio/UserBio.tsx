import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '~/redux/root.reducer';
import Link from '~/components/generic/Link';
import { API_UserI } from '~/../shared/types/user.types';

import styles from './UserBio.module.scss';

interface Props {
  user: API_UserI;
  className?: string;
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
        <Link prefetch={false} variant="contained" color="white" href="/settings" className="my-5">
          Editează profilul
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
