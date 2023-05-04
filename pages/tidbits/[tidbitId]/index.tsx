import React from 'react';
import NotFoundPage from '~/components/NotFound/NotFound';
import { API_TidbitI } from '../../../shared/types/tidbit.types';
import TidbitService from '~/services/api/Tidbit.service';

interface Props {
  tidbit: API_TidbitI;
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
  try {
    const tidbit = await TidbitService.getById(params.tidbitId);
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
  } catch(err) {
    res.statusCode = err.code === 404 ? 404 : 500;

    return {
      props: {
        tidbit: null,
      },
    };
  }
}

export default TidbitPage;
