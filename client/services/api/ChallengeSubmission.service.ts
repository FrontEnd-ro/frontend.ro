import HttpService from './Http.service';
import { parseChallengeSubmission } from '~/../shared/Challenge.shared';
import { ChallengeSubmissionI, ParsedChallengeSubmissionI } from '~/../shared/types/challengeSubmissions.types';

class ChallengeSubmissionService {
  static async get(challengeId: string): Promise<ParsedChallengeSubmissionI> {
    const challenge: ChallengeSubmissionI = await HttpService
      .get(`${process.env.ENDPOINT}/challenge-submissions/${challengeId}`)
      .then((resp) => resp.json());

    return parseChallengeSubmission(challenge);
  }

  static async updateCode(
    challengeId: string,
    taskId: string,
    code: string,
  ): Promise<ParsedChallengeSubmissionI> {
    const challenge: ChallengeSubmissionI = await HttpService
      .put(
        `${process.env.ENDPOINT}/challenge-submissions/${challengeId}/task/${taskId}`,
        { code },
      )
      .then((resp) => resp.json());

    return parseChallengeSubmission(challenge);
  }

  static async submitSolution(
    challengeId: string,
    taskId: string,
    code: string,
  ): Promise<ParsedChallengeSubmissionI> {
    const challenge: ChallengeSubmissionI = await HttpService
      .post(
        `${process.env.ENDPOINT}/challenge-submissions/${challengeId}/task/${taskId}/status`,
        { code },
      )
      .then((resp) => resp.json());

    return parseChallengeSubmission(challenge);
  }
}

export default ChallengeSubmissionService;
