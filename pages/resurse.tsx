import React from 'react';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import Resources from '~/components/learn/Resources';
import SEOTags from '~/components/SEOTags';

function ResourcesPage() {
  return (
    <>
      <SEOTags
        title="Resurse pentru fiecare FrontEnd developer | FrontEnd.ro"
        shareImage={`${process.env.CLOUDFRONT_PUBLIC}/public/seo/resources.jpg`}
        description="Am pornit de la site-urile ce ne ajută zilnic în joburile nostre de FrontEnd developeri, le-am păstrat doar pe cele mai utile și am creat cu ele lista de aici."
        url="https://FrontEnd.ro/resurse"
      />
      <Header withNavMenu />
      <Resources />
      <Footer />
    </>
  );
}

export default ResourcesPage;
