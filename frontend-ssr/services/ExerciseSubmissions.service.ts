import { Submission } from '~/redux/exercise-submissions/types';
import HttpService from './Http.service';

// FIXME ---> we need to do a little more research to find a better solution

class ExerciseService {
  static getSubmissions(page = 0, query = '') : Promise<Submission[]> {
    return HttpService.get(`${process.env.ENDPOINT}/exercises/submissions?page=${page}&query=${query}`)
      .then((response) => response.json()) as unknown as Promise<Submission[]>;
  }
}
export default ExerciseService;
