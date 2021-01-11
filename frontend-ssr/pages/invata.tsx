import React from 'react';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import Learn from '~/components/learn';
import SEOTags from '~/components/SEOTags';
import { withClientMonitoring } from '~/services/Hooks';

function TeachPage() {
  withClientMonitoring();
  return (
    <>
      <SEOTags
        title="Lecții | FrontEnd.ro"
        shareImage="https://frontend.ro/learn-seo-image.jpg"
        description="Lecții gratuite despre HTML, CSS și JavaScript!"
        url="https://FrontEnd.ro/invata"
      />
      <Header />
      <Learn />
      <Footer />
    </>
  );
}

export default TeachPage;
