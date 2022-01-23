import React from 'react';
import NotFoundPage from '~/components/404/NotFound';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import SEOTags from '~/components/SEOTags';
import PresentationPreview, { PresentationI } from '~/components/PresentationPreview';

function PresentationPage({ presentation }: { presentation: PresentationI }) {
  if (!presentation) {
    return <NotFoundPage />;
  }

  return (
    <>
      <SEOTags
        title={`${presentation.title} | Slides`}
        shareImage={presentation.thumb}
        description={presentation.description}
        url={`https://FrontEnd.ro/slides/${presentation.presentationId}`}
      />
      <Header withNavMenu />
      <PresentationPreview info={presentation} />
      <Footer />
    </>
  );
}

export async function getServerSideProps({ res, params }) {
  const { default: fetch } = await import('node-fetch');
  const { default: appConfig } = await import('../../server/config');

  try {
    const resp = await fetch(`${appConfig.APP.endpoint}/presentations/${params.presentationId}`);
    const presentation = await resp.json();

    if (!resp.ok) {
      res.statusCode = 404;
      return {
        props: {},
      };
    }

    return {
      props: {
        presentation,
      },
    };
  } catch (err) {
    console.error('[presentationId.getServerSideProps] got while fetching presentation', err);

    res.statusCode = 404;

    return {
      props: {},
    };
  }
}

export default PresentationPage;
