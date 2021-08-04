import React from 'react';
import NotFoundPage from './404';
import UserProfile from '~/components/user-profile/UserProfile';
import { findUserBy, sanitize } from '../shared/user.shared-model';

export default function Username(props: any) {
  // eslint-disable-next-line react/destructuring-assignment
  return props.profileUser ? <UserProfile profileUser={props.profileUser} /> : <NotFoundPage />;
}

export async function getServerSideProps({ res, params }) {
  const user = await findUserBy({ username: params.username });

  if (!user) {
    res.statusCode = 404;

    return {
      props: {},
    };
  }

  const sanitizedUser = sanitize(user);
  delete sanitizedUser.lastLogin;

  return {
    props: {
      profileUser: sanitizedUser,
    },
  };
}
