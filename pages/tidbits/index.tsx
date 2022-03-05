import React from 'react';
import { TidbitGallery } from '~/tidbits';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import SEOTags from '~/components/SEOTags';
import { TidbitI } from '~/../shared/types/tidbit.types';

const TidbitGalleryPage = ({ tidbits }: {tidbits: TidbitI[]}) => {
  return (
    <>
      <SEOTags
        url="https://FrontEnd.ro/tidbits"
        title="Tidbits | FrontEnd.ro"
        description="Tips & tricks vizuale despre FrontEnd development."
      />
      <Header withNavMenu />
      <TidbitGallery tidbits={tidbits} />
      <Footer />
    </>
  );
};

// We don't want this to be a `getStaticProps` because we don't
// trigger a rebuild when this DB collection changes.
export async function getServerSideProps() {
  const { default: fetch } = await import('node-fetch');

  const resp = await fetch(`${process.env.ENDPOINT}/tidbits`);
  const tidbits: TidbitI[] = await resp.json();

  return {
    props: {
      tidbits,
    },
  };
}

export default TidbitGalleryPage;
