import HttpService from './Http.service';
import { Submission } from '~/redux/exercise-submissions/types';
import { SUBMISSION_STATUS } from '~/../shared/SharedConstants';

class SubmissionService {
  static searchSubmissions(page = 0, query = '') {
    return HttpService.get(`${process.env.ENDPOINT}/submissions?page=${page}&query=${query}`)
      .then((response) => response.json()) as unknown as Promise<Submission[]>;
  }

  static getOwnSubmission(exerciseId: string) {
    return HttpService
      .get(`${process.env.ENDPOINT}/submissions/exercise/${exerciseId}`)
      .then((resp) => resp.json());
  }

  static getUserSubmission(username: string, exerciseId: string) {
    return HttpService
      .get(`${process.env.ENDPOINT}/submissions/${username}/${exerciseId}`)
      .then((resp) => resp.json());
  }

  static createSubmission(
    exerciseId: string,
    code: string,
    status = SUBMISSION_STATUS.AWAITING_REVIEW,
  ) {
    return HttpService
      .post(`${process.env.ENDPOINT}/submissions/exercise/${exerciseId}`, { code, status })
      .then((resp) => resp.json());
  }

  // payload is an object with a Submission props
  static updateSubmission(submissionId: string, payload: any) {
    return HttpService
      .put(`${process.env.ENDPOINT}/submissions/${submissionId}`, {
        payload,
      })
      .then((resp) => resp.json());
  }

  static approveSubmission(submissionId: string, feedbacks: any[]) {
    return HttpService
      .post(`${process.env.ENDPOINT}/submissions/${submissionId}/approve`, {
        feedbacks,
      });
  }

  static sendFeedback(submissionId: string, feedbacks: any[]) {
    return HttpService
      .post(`${process.env.ENDPOINT}/submissions/${submissionId}/feedback`, {
        feedbacks,
      });
  }

  static markFeedbackAsDone(feedbackId: string) {
    return HttpService
      .delete(`${process.env.ENDPOINT}/submissions/feedback/${feedbackId}`);
  }
}

export default SubmissionService;
