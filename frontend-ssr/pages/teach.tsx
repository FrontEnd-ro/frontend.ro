import React from 'react';
import Footer from '~/components/Footer';
import Teach from '~/components/teach';
import Header from '~/components/Header';
import NoSubmissionsYet from '~/components/teach/NoSubmissionsYet/NoSubmissionsYet';
import SubmissionModel from '~/server/model/submissions.model';
import SEOTags from '~/components/SEOTags';
import { connectToDb } from '~/server/database';
import { withClientMonitoring } from '~/services/Hooks';

function TeachPage({ hasSubmissions }: {hasSubmissions: boolean}) {
  withClientMonitoring();

  return (
    <>
      <SEOTags
        title="Exerciții Rezolvate | FrontEnd.ro"
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
