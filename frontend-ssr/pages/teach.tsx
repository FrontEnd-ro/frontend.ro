import React from 'react';
import Footer from '~/components/Footer';
import Teach from '~/components/teach';
import Header from '~/components/Header';
import NoSubmissionsYet from '~/components/teach/NoSubmissionsYet/NoSubmissionsYet';
import SubmissionModel from '~/server/model/submissions.model';
import SEOTags from '~/components/SEOTags';
import { connectToDb } from '~/server/database';

function TeachPage({ hasSubmissions }: {hasSubmissions: boolean}) {
  return (
    <>
      <SEOTags
        title="Exerciții Rezolvate | FrontEnd.ro"
        shareImage="https://frontend.ro/logo-square.jpg"
        bigShareImage={false}
        description="Oferă feedback pentru exerciții rezolvate."
        url="https://FrontEnd.ro/teach"
      />
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
    connectToDb();

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
