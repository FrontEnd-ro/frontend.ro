import HttpService from './Http.service';
import { ChallengeSubmissionI } from '~/../shared/types/challengeSubmissions.types';

class ChallengeSubmissionService {
  static async get(challengeId: string, options?: RequestInit): Promise<ChallengeSubmissionI> {
    const challenge: ChallengeSubmissionI = await HttpService
      .get(`${process.env.ENDPOINT}/challenge-submissions/${challengeId}`, options)
      .then((resp) => resp.json());

    return challenge;
  }

  static async updateCode(
    challengeId: string,
    taskId: string,
    code: string,
  ): Promise<ChallengeSubmissionI> {
    const challenge: ChallengeSubmissionI = await HttpService
      .put(
        `${process.env.ENDPOINT}/challenge-submissions/${challengeId}/task/${taskId}`,
        { code },
      )
      .then((resp) => resp.json());

    return challenge;
  }

  static async submitSolution(
    challengeId: string,
    taskId: string,
    code: string,
  ): Promise<ChallengeSubmissionI> {
    const challenge: ChallengeSubmissionI = await HttpService
      .post(
        `${process.env.ENDPOINT}/challenge-submissions/${challengeId}/task/${taskId}/status`,
        { code },
      )
      .then((resp) => resp.json());

    return challenge;
  }
}

export default ChallengeSubmissionService;
