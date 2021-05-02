import React from 'react';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import SEOTags from '~/components/SEOTags';
import SlidesPreview from '~/components/SlidesPreview';

function GitBeginners() {
  return (
    <>
      <SEOTags
        title="Git & GitHub începători | Slides"
        shareImage={`${process.env.CLOUDFRONT_PUBLIC}/seo/git-incepatori-slides.png`}
        description="Hai să descoperim și să punem în practică cele mai importante concepte și comenzi din Git & GitHub."
        url="https://FrontEnd.ro/slides/git-incepatori"
      />
      <Header withNavMenu />
      <SlidesPreview info={{
        id: 'git-incepatori',
        title: 'Git & GitHub începători',
        thumb: `${process.env.CLOUDFRONT_PUBLIC}/slides/git-incepatori/cover.png`,
        description: 'Hai să descoperim și să punem în practică cele mai importante concepte și comenzi din Git & GitHub.',
        created: 1618825556676,
      }}
      />
      <Footer />
    </>
  );
}

export default GitBeginners;
