import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '~/redux/root.reducer';
import Diploma from '~/components/certification/Diploma/Diploma';

const HtmlFakeDiploma = ({ isLoggedIn, userInfo } : ConnectedProps<typeof connector>) => {
  const defaultStudent = {
    name: 'Jon Doe',
    username: 'jonDoe',
    avatar: 'https://d3tycb976jpudc.cloudfront.net/schmoes/jon.svg',
  };

  return (
    <Diploma
      student={isLoggedIn ? userInfo : defaultStudent}
      module={{
        name: 'Modulul de HTML',
        url: '/html',
      }}
      certification={{
        date: new Date(),
        exerciseCount: 18,
        url: 'https://FrontEnd.ro',
      }}
      shareControls={false}
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
