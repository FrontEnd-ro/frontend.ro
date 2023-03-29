import { PublicUserI } from '~/../shared/types/user.types';
import PageContainer from '~/components/PageContainer';
import svgCover from './no-activity.svg';

import styles from './NoActivity.module.scss';

function NoActivity({ user }: { user: PublicUserI }) {
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
