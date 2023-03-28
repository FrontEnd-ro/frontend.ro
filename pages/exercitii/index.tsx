import React from 'react';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import SEOTags from '~/components/SEOTags';
import ExercisesPage from '~/components/ExercisesPage';

const Page =  () => {
  return (
    <>
      <SEOTags
        title="Exerciții | FrontEnd.ro"
        description="Rezolvă exerciții de FrontEnd și primește feedback pentru soluțiile tale"
        url="https://FrontEnd.ro/exercitii"
      />
      <>
        <Header withNavMenu />
        <ExercisesPage />
        <Footer />
      </>
    </>
  );
}

export default Page;
