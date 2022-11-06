import HttpService from './Http.service';

class LessonService {
  static get(lessonId: string) {
    return HttpService
      .get(`${process.env.ENDPOINT}/lessons/${lessonId}`)
      .then((resp) => resp.json());
  }

  static increaseViews(lessonId: string) {
    return HttpService
      .post(`${process.env.ENDPOINT}/lessons/${lessonId}/views`)
      .then((resp) => resp.json());
  }
}

export default LessonService;
