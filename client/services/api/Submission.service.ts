import HttpService from './Http.service';
import { SubmissionStatus, API_SubmissionI } from '~/../shared/types/submission.types';

class SubmissionService {
  static getOwnSubmissions() {
    return HttpService.get(`${process.env.ENDPOINT}/submissions/`)
      .then((response) => response.json());
  }

  static getOwnSubmission(exerciseId: string) {
    return HttpService
      .get(`${process.env.ENDPOINT}/submissions/exercise/${exerciseId}`)
      .then((resp) => resp.json());
  }

  static getAllSubmissionsFromLesson(lessonId: string): Promise<(API_SubmissionI | null)[]> {
    return HttpService
      .get(`${process.env.ENDPOINT}/submissions/lesson/${lessonId}`)
      .then((resp) => resp.json());
  }

  static getSubmissionVersions(submissionId: string) {
    return HttpService
      .get(`${process.env.ENDPOINT}/submissions/versions/${submissionId}`, undefined, true)
      .then((resp) => resp.json());
  }

  static createSubmission(
    exerciseId: string,
    code: string,
    status = SubmissionStatus.AWAITING_REVIEW,
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

  static markFeedbackAsDone(feedbackId: string) {
    return HttpService
      .delete(`${process.env.ENDPOINT}/submissions/feedback/${feedbackId}`);
  }
}

export default SubmissionService;
