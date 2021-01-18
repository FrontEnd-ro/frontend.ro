import React from 'react';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import SEOTags from '~/components/SEOTags';
import NewExercise from '~/components/NewExercise';

export default function NewExercisePage() {
  return (
    <>
      <SEOTags
        title="Creează un exercițiu | FrontEnd.ro"
        description="FIXME"
        bigShareImage={false}
        url="https://FrontEnd.ro/exercitii/new"
      />
      <>
        <Header />
        <NewExercise />
        <Footer />
      </>
    </>
  );
}
