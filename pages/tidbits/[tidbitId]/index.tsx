import React from 'react';
import NotFoundPage from '~/components/404/NotFound';
import { TidbitI } from '../../../shared/types/tidbit.types';

interface Props {
  tidbit: TidbitI;
}

const TidbitPage = ({ tidbit }: Props) => {
  if (tidbit === null) {
    return <NotFoundPage />;
  }

  // No need to return anything because we either
  // throw a 404/Not Found or we redirect.
  return null;
};

// We don't want this to be a `getStaticProps` because we don't
// trigger a rebuild when this DB collection changes.
export async function getServerSideProps({ res, params }) {
  const { default: fetch } = await import('node-fetch');
  const resp = await fetch(`${process.env.ENDPOINT}/tidbits/${params.tidbitId}`);

  if (!resp.ok) {
    res.statusCode = 404;

    return {
      props: {
        tidbit: null,
      },
    };
  }

  return {
    props: {
      tidbit: null,
    },
    redirect: {
      // We want all Tidbit URLs to be in this pattern
      // `/tidbits/despre-html/1`
      destination: `/tidbits/${params.tidbitId}/1`,
      permanent: false,
    },
  };
}

export default TidbitPage;
