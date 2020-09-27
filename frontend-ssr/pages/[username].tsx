import React from 'react';
import NotFoundPage from './404';
import store from '~/redux/store';
import { storeUserDetails } from '~/redux/actions/username';
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
  const { dispatch } = store;
  if (user) {
    dispatch(storeUserDetails(user));
    return <UserProfile {...props} />;
  }

  return <NotFoundPage />;
}
