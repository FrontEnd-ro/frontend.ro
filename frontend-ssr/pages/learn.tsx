import React from 'react';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import Learn from '~/components/learn';
import SEOTags from '~/components/SEOTags';

function TeachPage() {
  return (
    <>
      <SEOTags
        title="Lecții | FrontEnd.ro"
        shareImage="https://frontend.ro/learn-seo-image.jpg"
        description="Lecții gratuite despre HTML, CSS și JavaScript!"
        url="https://FrontEnd.ro/learn"
      />
      <Header />
      <Learn />
      <Footer />
    </>
  );
}

export default TeachPage;
