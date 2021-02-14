import HttpService from './Http.service';

interface NewExercisePayload {
  body: string;
  private: boolean;
  type: string;
  solution: string;
  example?: string;
  suggestion?: string;
}

class ExerciseService {
  static getExercise(exerciseId: string) {
    return HttpService
      .get(`${process.env.ENDPOINT}/exercises/${exerciseId}`)
      .then((resp) => resp.json());
  }

  static uploadMedia(name: string, file: File): Promise<any> {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('file', file);

    return HttpService
      .post(`${process.env.ENDPOINT}/exercises/media`, formData)
      .then((resp) => resp.json());
  }

  static createExercise(payload: NewExercisePayload): Promise<any> {
    return HttpService
      .post(`${process.env.ENDPOINT}/exercises`, payload)
      .then((resp) => resp.json());
  }

  static updateExercise(id: string, payload: NewExercisePayload): Promise<any> {
    return HttpService
      .put(`${process.env.ENDPOINT}/exercises/${id}`, payload)
      .then((resp) => resp.json());
  }

  static getExercises() {
    return HttpService.get(`${process.env.ENDPOINT}/exercises`)
      .then((response) => response.json());
  }

  static getPublicExercises(username: string) {
    return HttpService.get(`${process.env.ENDPOINT}/exercises/public/${username}`)
      .then((response) => response.json());
  }

  static delete(id: string) {
    return HttpService.delete(`${process.env.ENDPOINT}/exercises/${id}`);
  }
}
export default ExerciseService;
