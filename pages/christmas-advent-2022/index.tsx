import SEOTags from '~/components/SEOTags';
import NotFoundPage from '~/components/404/NotFound';
import { ChallengeI } from '~/../shared/types/challenge.types';
import { FullScreenIDE } from '~/components/FullScreenIDE/FullScreenIDE';

export default ({ challenge } : { challenge: ChallengeI }) => {
  if (challenge === undefined) {
    return <NotFoundPage />;
  }
  return (
    <>
      <SEOTags
        title="Full Screen Editor | TODO"
        url="TODO"
        description="TODO"
      />
      <FullScreenIDE challenge={challenge} />
    </>
  );
};

export async function getServerSideProps({ res }) {
  const CHALLENGE_ID = 'christmas-advent-2022';
  const SPAN = `[${CHALLENGE_ID}, getServerSideProps]`;

  const { default: fetch } = await import('node-fetch');
  const { default: appConfig } = await import('../../server/config');

  try {
    const resp = await fetch(`${appConfig.APP.endpoint}/challenges/${CHALLENGE_ID}`);
    switch (resp.status) {
      case 200: {
        const challenge = await resp.json();
        return {
          props: { challenge },
        };
      }
      case 404:
        return redirect404(res);
      default:
        throw resp;
    }
  } catch (err) {
    console.error(`${SPAN} got while fetching challenge.`, err);
    return redirect404(res);
  }

  function redirect404(res) {
    res.statusCode = 404;
    return {
      props: {},
    };
  }
}
