import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Footer from '~/components/Footer';
import Teach from '~/components/teach';
import Header from '~/components/Header';
import SEOTags from '~/components/SEOTags';
import { useLoggedInOnly, withClientMonitoring } from '~/services/Hooks';
import { RootState } from '~/redux/root.reducer';
import { USER_ROLE } from '../shared/SharedConstants';
import PageContainer from '~/components/PageContainer';

function TeachPage({ userInfo }: ConnectedProps<typeof connector>) {
  withClientMonitoring();

  useLoggedInOnly(!!userInfo, '/exercitii-rezolvate');

  return (
    <>
      <SEOTags
        title="Exerciții Rezolvate | FrontEnd.ro"
        description="Oferă feedback pentru exerciții rezolvate."
        url="https://FrontEnd.ro/exercitii-rezolvate"
      />
      <Header />

      {
        userInfo?.role !== USER_ROLE.ADMIN
          ? (
            <PageContainer>
              <h1> Doar echipa FrontEnd.ro are poate da feedback la exercițiile submise</h1>
            </PageContainer>
          )
          : <Teach />
      }
      <Footer />
    </>
  );
}

function mapStateToProps(state: RootState) {
  return {
    userInfo: state.user.info,
  };
}

const connector = connect(mapStateToProps);

export default connector(TeachPage);
