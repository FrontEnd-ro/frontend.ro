import { ChallengeI, ParsedChallengeI } from './types/challenge.types';
import { ChallengeSubmissionI, ParsedChallengeSubmissionI } from './types/challengeSubmissions.types';

export const parseChallenge = (challenge: ChallengeI) : ParsedChallengeI => {
  const stringifiedTypeDefinitions = challenge.typeDefinitions;
  return {
    ...challenge,
    typeDefinitions: (stringifiedTypeDefinitions !== undefined && stringifiedTypeDefinitions !== '')
      ? JSON.parse(challenge.typeDefinitions)
      : [],
  };
};

export const parseChallengeSubmission = (
  challenge: ChallengeSubmissionI,
): ParsedChallengeSubmissionI => {
  const stringifiedTypeDefinitions = challenge.typeDefinitions;
  return {
    ...challenge,
    typeDefinitions: (stringifiedTypeDefinitions !== undefined && stringifiedTypeDefinitions !== '')
      ? JSON.parse(challenge.typeDefinitions)
      : [],
  };
};
