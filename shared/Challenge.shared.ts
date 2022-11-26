import { ChallengeI, ParsedChallengeI } from './types/challenge.types';

// eslint-disable-next-line import/prefer-default-export
export const parseChallenge = (challenge: ChallengeI) : ParsedChallengeI => {
  const stringifiedTypeDefinitions = challenge.typeDefinitions;
  return {
    ...challenge,
    typeDefinitions: (stringifiedTypeDefinitions !== undefined && stringifiedTypeDefinitions !== '')
      ? JSON.parse(challenge.typeDefinitions)
      : [],
  };
};
