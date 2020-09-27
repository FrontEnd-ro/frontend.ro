import React from 'react';
import NotFoundPage from './404';
import UserProfile from '~/components/user-profile/UserProfile';

export async function getServerSideProps({ res, params }) {
  const resp = await fetch(`${process.env.HOST}/api/users/${params.username}`);

  if (resp.status === 404) {
    res.statusCode = 404;
    return {
      props: {
        user: null,
      },
    };
  }

  const user = await resp.json();

  return {
    props: {
      user,
    },
  };
}

export default function Username(props: any) {
  const { user } = props;
  return user ? <UserProfile {...props} /> : <NotFoundPage />;
}
