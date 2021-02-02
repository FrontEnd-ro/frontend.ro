import Header from '~/components/Header';
import Footer from '~/components/Footer';
import UserBio from './UserBio/UserBio';
import { UserState } from '~/redux/user/types';

import SEOTags from '../SEOTags';
import styles from './UserProfile.module.scss';

interface Props {
  profileUser: UserState['info']
}
function UserProfile({ profileUser }: Props) {
  const nameOrUsername = profileUser.name || profileUser.username;
  const defaultDescription = 'Profilul public ce conține activitatea de pe platformă.';

  return (
    <>
      <SEOTags
        title={`${nameOrUsername} | FrontEnd.ro`}
        url={`https://FrontEnd.ro/${profileUser.username}`}
        description={profileUser.description || defaultDescription}
        shareImage={profileUser.avatar}
        bigShareImage={false}
      >
        <link rel="preload" href={profileUser.avatar} as="image" />
      </SEOTags>
      <div className={`d-flex ${styles['user-profile']}`}>
        <UserBio className={styles['user-bio']} user={profileUser} />
        <div className={styles.right}>
          <Header />
          <main>
            <UserBio className={styles['user-bio']} user={profileUser} />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default UserProfile;
