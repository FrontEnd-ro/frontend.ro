import { useRouter } from 'next/router';
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '~/redux/root.reducer';
import { loadInfo, logoutUser } from '~/redux/user/user.actions';
import SweetAlertService from '~/services/sweet-alert/SweetAlert.service';
import PageContainer from '../PageContainer';
import ChangeAvatar from './components/ChangeAvatar/ChangeAvatar';
import ChangeDescription from './components/ChangeDescription';
import ChangeEmail from './components/ChangeEmail';
import ChangeName from './components/ChangeName';
import ChangePassword from './components/ChangePassword';
import ChangeUsername from './components/ChangeUsername';
import DeleteAccount from './components/DeleteAccount';

import styles from './Settings.module.scss';

/**
 * If this page is being rendered we're sure the user
 * is already logged in!
 */
function Settings({ user, dispatch }: ConnectedProps<typeof connector>) {
  const router = useRouter();
  const updateUserStore = (updatedUser: any) => {
    dispatch(loadInfo(updatedUser));
  };

  const deleteUserSuccess = () => {
    SweetAlertService.toast({
      type: 'success',
      text: '👋 Contul a fost șters cu succes',
    });

    router.replace('/').then(() => {
      dispatch(logoutUser());
    });
  };

  return (
    <PageContainer className={styles.settings}>
      <h1 className="mb-4"> Setări </h1>
      <section>
        <ChangeAvatar user={user} onSuccess={updateUserStore} />
        <ChangeName onSuccess={updateUserStore} />
        <ChangeDescription onSuccess={updateUserStore} />
        <ChangeUsername onSuccess={updateUserStore} />
        <ChangeEmail onSuccess={updateUserStore} />
        <ChangePassword onSuccess={updateUserStore} />
      </section>
      <section className={styles.danger}>
        <DeleteAccount onSuccess={deleteUserSuccess} />
      </section>
    </PageContainer>
  );
}

function mapStateToProps(state: RootState) {
  return {
    user: state.user,
  };
}

const connector = connect(mapStateToProps);

export default connector(Settings);
