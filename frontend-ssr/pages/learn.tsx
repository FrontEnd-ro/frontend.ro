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
