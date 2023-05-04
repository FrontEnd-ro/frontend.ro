import HttpService from './Http.service';
import { API_LessonExerciseI } from '~/../shared/types/lesson-exercise.types';

interface NewExercisePayload {
  body: string;
  type: string;
  lesson: string;
  example?: string;
  suggestion?: string;
  solution: string;
}

class LessonExerciseService {
  static getAllLessonExercises() {
    return HttpService
      .get(`${process.env.ENDPOINT}/lesson-exercises`)
      .then((resp) => resp.json());
  }

  static getLessonExercise(exerciseId: string, options?: RequestInit) {
    return HttpService
      .get(`${process.env.ENDPOINT}/lesson-exercises/${exerciseId}`, options)
      .then((resp) => resp.json());
  }

  static getAllExercisesForLessons(lessonId: string) {
    return HttpService
      .get(`${process.env.ENDPOINT}/lesson-exercises/lesson/${lessonId}`)
      .then((resp) => resp.json());
  }

  static async getCountOfExercisesForLesson(lessonId: string) {
    const resp = await HttpService.head(`${process.env.ENDPOINT}/lesson-exercises/lesson/${lessonId}/count`);
    const header = resp.headers.get('X-Exercise-Count');

    const count = Number(header);
    if (Number.isNaN(count)) {
      return 0;
    }
    return count;
  }

  static uploadMedia(name: string, file: File): Promise<any> {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('file', file);

    return HttpService
      .post(`${process.env.ENDPOINT}/lesson-exercises/media`, formData)
      .then((resp) => resp.json());
  }

  static createExercise(payload: Omit<API_LessonExerciseI, '_id' | 'user'>): Promise<any> {
    return HttpService
      .post(`${process.env.ENDPOINT}/lesson-exercises`, payload)
      .then((resp) => resp.json());
  }

  static updateExercise(id: string, payload: NewExercisePayload): Promise<any> {
    return HttpService
      .put(`${process.env.ENDPOINT}/lesson-exercises/${id}`, payload)
      .then((resp) => resp.json());
  }

  static delete(id: string) {
    return HttpService.delete(`${process.env.ENDPOINT}/lesson-exercises/${id}`);
  }
}
export default LessonExerciseService;
