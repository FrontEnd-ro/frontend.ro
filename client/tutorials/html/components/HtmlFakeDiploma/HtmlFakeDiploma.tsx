import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '~/redux/root.reducer';
import { JonDoeUser } from '~/services/Constants';
import Diploma from '~/components/certification/Diploma/Diploma';

const HtmlFakeDiploma = ({ isLoggedIn, userInfo } : ConnectedProps<typeof connector>) => {
  return (
    <Diploma
      student={isLoggedIn ? userInfo : JonDoeUser}
      tutorial={{
        name: 'Modulul de HTML',
        tutorialId: 'html',
      }}
      certification={{
        date: new Date(),
        exerciseCount: 18,
        url: 'https://FrontEnd.ro',
      }}
      showQRCode={false}
      showSignature={false}
      showShareControls={false}
    />
  );
};

function mapStateToProps(state: RootState) {
  return {
    isLoggedIn: !!state.user.info,
    userInfo: state.user.info,
  };
}

const connector = connect(mapStateToProps);

export default connector(HtmlFakeDiploma);
