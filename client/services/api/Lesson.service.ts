import HttpService from './Http.service';
import { env } from '~/services/env';

class LessonService {
  static get(lessonId: string) {
    return HttpService
      .get(`${env.ENDPOINT}/lessons/${lessonId}`)
      .then((resp) => resp.json());
  }

  static increaseViews(lessonId: string) {
    return HttpService
      .post(`${env.ENDPOINT}/lessons/${lessonId}/views`)
      .then((resp) => resp.json());
  }
}

export default LessonService;
