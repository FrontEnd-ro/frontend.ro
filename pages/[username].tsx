import React from 'react';
import NotFoundPage from './404';
import UserProfile from '~/components/user-profile/UserProfile';
import SharedUserModel from '../shared/user.shared-model';

export default function Username(props: any) {
  // eslint-disable-next-line react/destructuring-assignment
  return props.user ? <UserProfile {...props} /> : <NotFoundPage />;
}

export async function getServerSideProps({ res, params }) {
  const user = await SharedUserModel.findUserBy({ username: params.username });

  if (!user) {
    res.statusCode = 404;
  }

  return {
    props: {
      user,
    },
  };
}
