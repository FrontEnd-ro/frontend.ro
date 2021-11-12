import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Footer from '~/components/Footer';
import Teach from '~/components/teach';
import Header from '~/components/Header';
import SEOTags from '~/components/SEOTags';
import { useLoggedInOnly } from '~/services/Hooks';
import { RootState } from '~/redux/root.reducer';
import { UserRole } from '../shared/types/user.types';
import PageContainer from '~/components/PageContainer';

function TeachPage({ userInfo }: ConnectedProps<typeof connector>) {
  useLoggedInOnly(!!userInfo, '/exercitii-rezolvate');

  return (
    <>
      <SEOTags
        title="Exerciții Rezolvate | FrontEnd.ro"
        description="Oferă feedback pentru exerciții rezolvate."
        url="https://FrontEnd.ro/exercitii-rezolvate"
      />
      <Header withNavMenu />

      {
        userInfo?.role !== UserRole.ADMIN
          ? (
            <PageContainer>
              <h1>
                Pentru moment doar echipa FrontEnd.ro are poate da feedback la exercițiile submise
              </h1>
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
