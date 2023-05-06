import React from 'react';
import { useRouter } from 'next/router';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import SEOTags from '~/components/SEOTags';
import { RootState } from '~/redux/root.reducer';
import { useLoggedInOnly } from '~/services/Hooks';
import { ConnectedProps, connect } from 'react-redux';
import { UserRole } from '~/../shared/types/user.types';
import NotFoundPage from '~/components/NotFound/NotFound';
import { CreateExercise } from '~/components/create-edit-exercise';

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
      <SEOTags
        title="Creează un exercițiu | FrontEnd.ro"
        description="Scrie un nou exercițiu pe care-l poți propune pentru lecțiile noastre sau îl poți folosi în propriile traininguri."
        shareImage="https://frontend.ro/seo/create-exercise.jpg"
        url="https://FrontEnd.ro/exercitii/creeaza"
      />
      <>
        <Header withNavMenu />
        <CreateExercise />
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
