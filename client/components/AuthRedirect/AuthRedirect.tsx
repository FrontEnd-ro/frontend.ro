import { useRouter } from 'next/router';
import React from 'react';
import { API_UserI } from '~/../shared/types/user.types';
import Login from '../login';
import PageContainer from '../PageContainer';

import styles from './AuthRedirect.module.scss';

function AuthRedirect() {
  const router = useRouter();

  const onLogin = (user: API_UserI) => {
    const nextHref = router.query.next as string;
    router.replace(nextHref || `/${user.username}`);
  };

  return (
    <PageContainer className={styles.main}>
      <h2>
        <span>Pentru a continua, autentifică-te 😉</span>
      </h2>
      <div>
        <Login className={styles.login} onSuccess={onLogin} />
      </div>
    </PageContainer>
  );
}

export default AuthRedirect;
