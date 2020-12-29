import React from 'react';
import Footer from '~/components/Footer';
import Teach from '~/components/teach';
import Header from '~/components/Header';
import NoSubmissionsYet from '~/components/teach/NoSubmissionsYet/NoSubmissionsYet';
import SubmissionModel from '~/server/model/submissions.model';

function TeachPage({ hasSubmissions }: {hasSubmissions: boolean}) {
  return (
    <>
      <Header />
      {
        hasSubmissions
          ? <Teach />
          : <NoSubmissionsYet />
      }
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  let hasSubmissions = false;

  try {
    const results = await SubmissionModel.search(0, '');
    hasSubmissions = results.length > 0;
  } catch (err) {
    console.error('[teach.tsx][getServerSideProps]', err);
  }

  return {
    props: { hasSubmissions },
  };
}

export default TeachPage;
