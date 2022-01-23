import React from 'react';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import SEOTags from '~/components/SEOTags';
import PresentationGallery from '~/components/PresentationGallery';
import { PresentationI } from '~/components/PresentationPreview';

function Slides({ presentations }: {presentations: PresentationI[]}) {
  return (
    <>
      <SEOTags
        title="Slide-uri | FrontEnd.ro"
        shareImage={`${process.env.CLOUDFRONT_PUBLIC}/seo/events-page.jpg`}
        description="Slide-urile folosite la evenimentele comunității FrontEnd.ro"
        url="https://FrontEnd.ro/slides"
      />
      <Header withNavMenu />
      <PresentationGallery presentations={presentations} />
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const { default: appConfig } = await import('../../server/config');
  const { default: fetch } = await import('node-fetch');

  try {
    const resp = await fetch(`${appConfig.APP.endpoint}/presentations`);
    const presentations = await resp.json();

    return {
      props: {
        presentations,
      },
    };
  } catch (err) {
    console.error('[slides.getServerSideProps] got while fetching presentations', err);
    return {
      props: {
        presentations: undefined,
      },
    };
  }
}

export default Slides;
