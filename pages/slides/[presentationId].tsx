import React from 'react';
import NotFoundPage from '~/components/NotFound/NotFound';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import SEOTags from '~/components/SEOTags';
import PresentationPreview, { PresentationI } from '~/components/PresentationPreview';
import PresentationService from '~/services/api/Presentation.service';

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
  try {
    const presentation = await PresentationService.get(params.presentationId);
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
