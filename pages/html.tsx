import React from 'react';

const HTMLTutorial = () => {
  return <></>;
};

// Redirect to the lessons page until we implement
// the page for the HTML module.
export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/lectii',
      permanent: false,
    },
  };
}

export default HTMLTutorial;
