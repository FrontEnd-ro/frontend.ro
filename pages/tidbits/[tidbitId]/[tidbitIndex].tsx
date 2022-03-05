import React from 'react';
import { Tidbit } from '~/tidbits';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import SEOTags from '~/components/SEOTags';
import NotFoundPage from '~/components/404/NotFound';
import { TidbitI } from '../../../shared/types/tidbit.types';

interface Props {
  tidbit: TidbitI;
  tidbitIndex: number;
}

const TidbitPage = ({ tidbit, tidbitIndex }: Props) => {
  if (tidbit === null) {
    return <NotFoundPage />;
  }

  // For the URL path, the index starts from 1
  const zeroBasedIndex = tidbitIndex - 1;
  if (zeroBasedIndex < 0 || zeroBasedIndex >= tidbit.items.length) {
    return <NotFoundPage />;
  }

  return (
    <>
      <SEOTags
        url={`https://FrontEnd.ro/tidbits/${tidbit.tidbitId}/${zeroBasedIndex}`}
        title={`${tidbit.title} | FrontEnd.ro`}
        shareImage={tidbit.items[zeroBasedIndex].imageSrc}
        bigShareImage={false}
        description={tidbit.description ?? 'Tips & tricks vizuale despre FrontEnd development.'}
      />
      <Header withNavMenu />
      <Tidbit tidbit={tidbit} index={zeroBasedIndex} />
      <Footer />

    </>
  );
};

// We don't want this to be a `getStaticProps` because we don't
// trigger a rebuild when this DB collection changes.
export async function getServerSideProps({ res, params }) {
  // Tidbit index starts from 1
  const { tidbitId, tidbitIndex } = params;
  const { default: fetch } = await import('node-fetch');
  const resp = await fetch(`${process.env.ENDPOINT}/tidbits/${tidbitId}`);

  let tidbit: TidbitI | null = null;
  if (!resp.ok) {
    res.statusCode = 404;
  } else {
    tidbit = await resp.json();

    if (tidbitIndex - 1 < 0 || tidbitIndex - 1 >= tidbit.items.length) {
      res.statusCode = 404;
    }
  }

  return {
    props: {
      tidbit,
      tidbitIndex,
    },
  };
}

export default TidbitPage;
