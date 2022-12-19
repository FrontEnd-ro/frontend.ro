import { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import SEOTags from '~/components/SEOTags';
import { RootState } from '~/redux/root.reducer';
import NotFoundPage from '~/components/404/NotFound';
import { CHRISTMAS_ADVENT_ID } from '~/services/Constants';
import { useCertification } from '~/services/api/Certification.service';
import { FullScreenIDE } from '~/components/FullScreenIDE/FullScreenIDE';
import { ChallengeSubmissionI } from '~/../shared/types/challengeSubmissions.types';

const ChristmasAdvent2022 = ({
  challengeSubmissionServer,
  isLoggedIn,
}: ConnectedProps<typeof connector> & {
  challengeSubmissionServer: ChallengeSubmissionI;
}) => {
  const [challengeSubmission, setChallengeSubmission] = useState(challengeSubmissionServer);

  // TODO: we're in a hurry because of the Christmas Advent
  // However, after we launch that, let's refactor all this code.
  // It doesn't make a lot of sense to call `isLoggedIn` in this hook.
  const { certification } = useCertification({
    challengeId: challengeSubmission.challengeId,
    isLoggedIn,
  });

  const onChallengeSubmit = (challenge: ChallengeSubmissionI) => {
    setChallengeSubmission(challenge);
  };

  if (challengeSubmission === undefined) {
    return <NotFoundPage />;
  }

  return (
    <>
      <SEOTags
        title="Full Screen Editor | TODO"
        url="TODO"
        description="TODO"
      />
      <FullScreenIDE
        certification={certification}
        onChallengeSubmit={onChallengeSubmit}
        challengeSubmission={challengeSubmission}
        fileNamesToIgnoreFromExplorer={['TestingService.tsx']}
      />
    </>
  );
};

function mapStateToProps(state: RootState) {
  return {
    isLoggedIn: !!state.user.info,
  };
}

const connector = connect(mapStateToProps);

export default connector(ChristmasAdvent2022);

export async function getServerSideProps({ res, req }) {
  const SPAN = `[${CHRISTMAS_ADVENT_ID}, getServerSideProps]`;

  const { default: fetch } = await import('node-fetch');
  const { default: appConfig } = await import('../../server/config');

  try {
    const { token } = req?.cookies ?? {};
    const resp = await fetch(`${appConfig.APP.endpoint}/challenge-submissions/${CHRISTMAS_ADVENT_ID}`, {
      headers: {
        cookie: `token=${token}`,
      },
    });
    switch (resp.status) {
      case 200: {
        const challengeSubmissionServer: ChallengeSubmissionI = await resp.json();
        return {
          props: { challengeSubmissionServer },
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
