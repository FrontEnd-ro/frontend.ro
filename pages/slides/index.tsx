import React from 'react';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import SEOTags from '~/components/SEOTags';
import PresentationGallery from '~/components/PresentationGallery';
import PresentationService from '~/services/api/Presentation.service';
import { PresentationI } from '~/../shared/types/presentation.types';

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
  try {
    const presentations = await PresentationService.getAll()

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
