import { useRouter } from 'next/router';
import React from 'react';
import Login from '../login';
import PageContainer from '../PageContainer';

import styles from './AuthRedirect.module.scss';

function AuthRedirect() {
  const router = useRouter();

  const onLogin = () => {
    const nextHref = router.query.next as string;
    router.replace(nextHref || '/');
  };

  return (
    <PageContainer className={styles.main}>
      <h2>
        <span>Pentru a continua trebuie să te autentifici! 😉</span>
      </h2>
      <div>
        <Login className={styles.login} onSuccess={onLogin} />
      </div>
    </PageContainer>
  );
}

export default AuthRedirect;
