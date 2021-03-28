import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useRouter } from 'next/router';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import Settings from '~/components/Settings';
import SEOTags from '~/components/SEOTags';
import { RootState } from '~/redux/root.reducer';
import { useLoggedInOnly } from '~/services/Hooks';

function SettingsPage({ isLoggedIn }: ConnectedProps<typeof connector>) {
  const router = useRouter();
  useLoggedInOnly(isLoggedIn, router.asPath);

  return (
    <>
      <SEOTags
        title="Setările contului tău | FrontEnd.ro"
        shareImage="https://frontend.ro/learn-seo-image.jpg"
        description="Schimbă-ți avatar-ul, username-ul, parola sau email-ul."
        url="https://FrontEnd.ro/settings"
      />
      {
        isLoggedIn && (
          <>
            <Header withNavMenu />
            <Settings />
            <Footer />
          </>
        )
      }
    </>
  );
}

function mapStateToProps(state: RootState) {
  return {
    isLoggedIn: !!state.user.info,
  };
}

const connector = connect(mapStateToProps);

export default connector(SettingsPage);
