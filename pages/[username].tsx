import React from 'react';
import NotFoundPage from './404';
import { API_UserI } from '../shared/types/user.types';
import UserProfile from '~/components/user-profile/UserProfile';

export default function Username({ publicProfile }: {
  publicProfile: API_UserI | null
}) {
  if (publicProfile === null) {
    return <NotFoundPage />;
  }

  return <UserProfile profileUser={publicProfile} />
}

export async function getServerSideProps({ res, params }) {
  const resp = await fetch(`${process.env.ENDPOINT}/auth/${params.username}`);

  if (!resp.ok) {
    res.statusCode = resp.status;
    return {
      props: {
        publicProfile: null,
      },
    };
  }

  const publicProfile = await resp.json();
  return {
    props: {
      publicProfile
    }
  }
}
