import React from 'react';
import NotFoundPage from './404';
import UserProfile from '~/components/user-profile/UserProfile';

export default function Username(props: any) {
  // eslint-disable-next-line react/destructuring-assignment
  return props.user ? <UserProfile {...props} /> : <NotFoundPage />;
}

export async function getServerSideProps({ req, res, params }) {
  let url=`${process.env.HOST}/api/users/${params.username}`
  const resp = await fetch(url,{
    headers:{
      "Cookie":`auth=${req.cookies.auth}`
    }
  });
  
  let user = null;
  if (resp.status === 404 || resp.status===401) {
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
