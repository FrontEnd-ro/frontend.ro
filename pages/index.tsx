import { Response } from 'node-fetch';
import LandingPage from '~/components/Landing';

export default LandingPage;

// We don't want this to be a `getStaticProps` because we don't
// trigger a rebuild when this DB collection changes.
export async function getServerSideProps(ctx) {
  const { token } = ctx.req?.cookies ?? {};
  const { default: fetch } = await import('node-fetch');
  const SPAN = '[pages/index.tsx, getServerSideProps]';

  const pageProps = {
    props: {
      tidbits: [],
      htmlTutorialState: 'not_started',
    },
  };

  try {
    const [tidbits, htmlTutorialState] = await Promise.all([
      fetch(`${process.env.ENDPOINT}/tidbits?field=title&field=textColor&field=backgroundColor&field=tidbitId&field=items[1].imageSrc`)
        .then(parseJSONOrThrowIfNot200),
      !token
        ? Promise.resolve({ status: 'not_started' })
        : fetch(`${process.env.ENDPOINT}/tutorials/html/status`, {
          headers: {
            cookie: `token=${token}`,
          },
        }).then(parseJSONOrThrowIfNot200),
    ]);

    pageProps.props.tidbits = tidbits;
    pageProps.props.htmlTutorialState = htmlTutorialState.status;
  } catch (err) {
    console.error(`${SPAN}`, err);
  }

  return pageProps;
}

function parseJSONOrThrowIfNot200(resp: Response) {
  if (!resp.ok) {
    throw new Error(`Unexpected response status: ${resp.status}`);
  }

  return resp.json();
}
