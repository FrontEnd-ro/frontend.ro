import HttpService from './Http.service';
import { LessonExerciseI } from '~/../shared/types/exercise.types';

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

  static getLessonExercise(exerciseId: string) {
    return HttpService
      .get(`${process.env.ENDPOINT}/lesson-exercises/${exerciseId}`)
      .then((resp) => resp.json());
  }

  static getAllExercisesForLessons(lessonId: string) {
    return HttpService
      .get(`${process.env.ENDPOINT}/lesson-exercises/lesson/${lessonId}`)
      .then((resp) => resp.json());
  }

  static uploadMedia(name: string, file: File): Promise<any> {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('file', file);

    return HttpService
      .post(`${process.env.ENDPOINT}/lesson-exercises/media`, formData)
      .then((resp) => resp.json());
  }

  static createExercise(payload: Omit<LessonExerciseI, '_id' | 'user'>): Promise<any> {
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
