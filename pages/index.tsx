import LandingPage from '~/components/Landing';
import { getTidbits } from '../lib/content';

export default LandingPage;

// Read-only archive: tidbits are read straight from MongoDB at request time.
// The HTML tutorial progress was per-user; with auth removed it is always
// shown in its "not started" state.
export async function getServerSideProps() {
  const SPAN = '[pages/index.tsx, getServerSideProps]';

  const pageProps = {
    props: {
      tidbits: [],
      htmlTutorialState: 'not_started',
    },
  };

  try {
    pageProps.props.tidbits = await getTidbits([
      'title', 'textColor', 'backgroundColor', 'tidbitId', 'items[1].imageSrc',
    ]);
  } catch (err) {
    console.error(`${SPAN}`, err);
  }

  return pageProps;
}
