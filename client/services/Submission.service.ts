import HttpService from './Http.service';
import { Submission } from '~/redux/exercise-submissions/types';
import { SubmissionStatus, WIPSanitiedSubmission } from '~/../shared/types/submission.types';

class SubmissionService {
  static searchSubmissions(page = 0, query = '', statuses = [SubmissionStatus.AWAITING_REVIEW]) {
    const base = `${process.env.ENDPOINT}/submissions`;
    const statusParams = statuses.map((status) => `status=${status}`).join('&');

    return HttpService.get(`${base}?page=${page}&query=${query}&${statusParams}`)
      .then((response) => response.json()) as unknown as Promise<Submission[]>;
  }

  static getOwnSubmission(exerciseId: string) {
    return HttpService
      .get(`${process.env.ENDPOINT}/submissions/exercise/${exerciseId}`)
      .then((resp) => resp.json());
  }

  static getAllSubmissionsFromLesson(lessonId: string): Promise<(WIPSanitiedSubmission | null)[]> {
    return HttpService
      .get(`${process.env.ENDPOINT}/submissions/lesson/${lessonId}`)
      .then((resp) => resp.json());
  }

  static getSubmissionVersions(submissionId: string) {
    return HttpService
      .get(`${process.env.ENDPOINT}/submissions/versions/${submissionId}`, undefined, true)
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
