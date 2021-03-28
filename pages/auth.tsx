import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { connect, ConnectedProps } from 'react-redux';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import AuthRedirect from '~/components/AuthRedirect/AuthRedirect';
import { RootState } from '~/redux/root.reducer';
import { useAnonymousOnly } from '~/services/Hooks';
import SEOTags from '~/components/SEOTags';

function Authpage({ isLoggedIn }: ConnectedProps<typeof connector>) {
  const router = useRouter();

  useEffect(() => {
    let nextHref = '/';
    if (router.query.next) {
      nextHref = Array.isArray(router.query.next) ? router.query.next[0] : router.query.next;
    }
    useAnonymousOnly(router, isLoggedIn, nextHref);
  }, []);

  return (
    <>
      <SEOTags
        title="Autentifică-te pentru a merge mai departe | FrontEnd.ro"
        shareImage="https://frontend.ro/learn-seo-image.jpg"
        description="Autentifică-te pentru a merge mai departe"
        url="https://FrontEnd.ro/auth"
      />
      {!isLoggedIn && (
        <>
          <Header />
          <AuthRedirect />
          <Footer />
        </>
      )}
    </>
  );
}

function mapStateToProps(state: RootState) {
  return {
    isLoggedIn: !!state.user.info,
  };
}

const connector = connect(mapStateToProps);

export default connector(Authpage);
