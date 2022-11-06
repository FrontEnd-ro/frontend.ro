import HttpService from './Http.service';

class ChallengesService {
  static startTask(challengeId: string) {
    return HttpService
      .post(`${process.env.ENDPOINT}/challenges/${challengeId}/start`)
      .then((resp) => resp.json());
  }

  static getLastDoneTask(challengeId: string) {
    return HttpService
      .get(`${process.env.ENDPOINT}/challenges/${challengeId}`)
      .then((resp) => resp.json());
  }

  static putLastDoneTask(challengeId: string, lastDoneTask: string, meta?: Record<string, any>) {
    return HttpService
      .put(`${process.env.ENDPOINT}/challenges/${challengeId}/lastDoneTask/${lastDoneTask}`, {
        meta,
      })
      .then((resp) => resp.json());
  }
}

export default ChallengesService;
