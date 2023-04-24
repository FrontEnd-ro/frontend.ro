import HttpService from './Http.service';
import { Submission } from '~/redux/exercise-submissions/types';
import { SubmissionStatus } from '~/../shared/types/submission.types';

class AdminSubmissionService {
  static searchSubmissions(page = 0, query = '', statuses = [SubmissionStatus.AWAITING_REVIEW]) {
    const base = `${process.env.ENDPOINT}/admin-submissions`;
    const statusParams = statuses.map((status) => `status=${status}`).join('&');

    return HttpService.get(`${base}?page=${page}&query=${query}&${statusParams}`)
      .then((response) => response.json()) as unknown as Promise<Submission[]>;
  }

  static getUserSubmission(username: string, exerciseId: string) {
    return HttpService
      .get(`${process.env.ENDPOINT}/admin-submissions/${username}/${exerciseId}`)
      .then((resp) => resp.json());
  }

  static approveSubmission(submissionId: string, feedbacks: any[]) {
    return HttpService
      .post(`${process.env.ENDPOINT}/admin-submissions/${submissionId}/approve`, {
        feedbacks,
      });
  }

  static sendFeedback(submissionId: string, feedbacks: any[]) {
    return HttpService
      .post(`${process.env.ENDPOINT}/admin-submissions/${submissionId}/feedback`, {
        feedbacks,
      });
  }
}

export default AdminSubmissionService;
