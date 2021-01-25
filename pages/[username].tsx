import React from 'react';
import NotFoundPage from './404';
import UserProfile from '~/components/user-profile/UserProfile';

export default function Username(props: any) {
  // eslint-disable-next-line react/destructuring-assignment
  return props.user ? <UserProfile {...props} /> : <NotFoundPage />;
}

export async function getServerSideProps({ res, params }) {
  const resp = await fetch(`${process.env.HOST}/api/users/${params.username}`);
  let user = null;

  if (resp.status === 404) {
    res.statusCode = 404;
  } else {
    user = await resp.json();
  }

  return {
    props: {
      user,
    },
  };
}
