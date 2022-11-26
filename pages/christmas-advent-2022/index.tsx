import SEOTags from '~/components/SEOTags';
import NotFoundPage from '~/components/404/NotFound';
import { parseChallenge } from '~/../shared/Challenge.shared';
import { ChallengeI, ParsedChallengeI } from '~/../shared/types/challenge.types';
import { FullScreenIDE } from '~/components/FullScreenIDE/FullScreenIDE';

export default ({ challenge } : { challenge: ParsedChallengeI }) => {
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
        const challenge: ChallengeI = await resp.json();
        const parsedChallenge = parseChallenge(challenge);
        return {
          props: { challenge: parsedChallenge },
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
