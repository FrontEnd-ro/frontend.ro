import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { RootState } from '~/redux/root.reducer';
import { useLoggedInOnly } from '~/services/Hooks';
import { ConnectedProps, connect } from 'react-redux';
import { UserRole } from '~/../shared/types/user.types';
import NotFoundPage from '~/components/NotFound/NotFound';
import { CreateEditExercise } from '~/components/create-edit-exercise';

function CreateExercisePage({ isLoggedIn, userInfo }: ConnectedProps<typeof connector>) {
  const router = useRouter();
  useLoggedInOnly(isLoggedIn, router.asPath);

  if (!isLoggedIn) {
    return null;
  }

  if (userInfo?.role !== UserRole.ADMIN) {
    return <NotFoundPage />
  }

  return (
    <>
      <Head>
        <title>Creează un exercițiu | FrontEnd.ro</title>
      </Head>
      <>
        <Header withNavMenu />
        <CreateEditExercise />
        <Footer />
      </>
    </>
  );
}

function mapStateToProps(state: RootState) {
  return {
    isLoggedIn: !!state.user.info,
    userInfo: state.user.info,
  };
}

const connector = connect(mapStateToProps);

export default connector(CreateExercisePage);
