import LandingPage from '~/components/Landing';
import TidbitService from '~/services/api/Tidbit.service';
import TutorialService from '~/services/api/Tutorial.service';

export default LandingPage;

// We don't want this to be a `getStaticProps` because we don't
// trigger a rebuild when this DB collection changes.
export async function getServerSideProps(ctx) {
  const { token } = ctx.req?.cookies ?? {};
  const SPAN = '[pages/index.tsx, getServerSideProps]';

  const pageProps = {
    props: {
      tidbits: [],
      htmlTutorialState: 'not_started',
    },
  };

  try {
    const [tidbits, htmlTutorialState] = await Promise.all([
      TidbitService.getAll(['title', 'textColor', 'backgroundColor', 'tidbitId', 'items[1].imageSrc']),
      !token
        ? Promise.resolve({ status: 'not_started' })
        : TutorialService.getTutorialStatus('html', {
          headers: {
            cookie: `token=${token}`,
          }
        })
    ]);

    pageProps.props.tidbits = tidbits;
    pageProps.props.htmlTutorialState = htmlTutorialState.status;
  } catch (err) {
    console.error(`${SPAN}`, err);
  }

  return pageProps;
}
