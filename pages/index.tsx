import LandingPage from '~/components/Landing';

export default LandingPage;

// We don't want this to be a `getStaticProps` because we don't
// trigger a rebuild when this DB collection changes.
export async function getServerSideProps(ctx) {
  const { token } = ctx.req?.cookies ?? {};
  const { default: fetch } = await import('node-fetch');
  const SPAN = '[pages/index.tsx, getServerSideProps]';

  const resp = await fetch(`${process.env.ENDPOINT}/tidbits?field=title&field=textColor&field=backgroundColor&field=tidbitId&field=items[1].imageSrc`);
  const tidbits = await resp.json();

  const pageProps = {
    props: {
      tidbits,
      htmlTutorialProgress: null,
    },
  };

  if (!token) {
    return pageProps;
  }

  try {
    const { default: fetch } = await import('node-fetch');

    // Accessing the DB code directly fails (cannot find module 'fs').
    // It happened after adding the `node-config` package. Thus, to fix
    // it we refactored this code to use `fetch`.
    const resp = await fetch(`${process.env.ENDPOINT}/tutorials/html/progress`, {
      headers: {
        cookie: `token=${token}`,
      },
    });

    if (!resp.ok) {
      return pageProps;
    }

    const tutorialProgress = await resp.json();
    pageProps.props.htmlTutorialProgress = tutorialProgress;
  } catch (err) {
    console.error(`${SPAN}`, err);
  }

  return pageProps;
}
