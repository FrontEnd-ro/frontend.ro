import React from 'react';
import PageContainer from '~/components/PageContainer';
import { UserState } from '~/redux/user/types';
import svgCover from './no-activity.svg';

import styles from './NoActivity.module.scss';

function NoActivity({ user }: { user: UserState['info'] }) {
  const nameOrUsername = user.name || user.username;

  return (
    <PageContainer className={`${styles['no-activity']} text-center`}>
      <h2>
        {nameOrUsername}
        {' '}
        nu are activitate publică încă
      </h2>
      <div dangerouslySetInnerHTML={{
        __html: svgCover,
      }}
      />
    </PageContainer>
  );
}

export default NoActivity;
