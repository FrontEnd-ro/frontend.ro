import HttpService from './Http.service';

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
}
export default LessonExerciseService;
