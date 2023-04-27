import HttpService from './Http.service';
import { WIPPopulatedTutorialI, TutorialProgressI } from '~/../shared/types/tutorial.types';

class TutorialService {
  static getAll(): Promise<WIPPopulatedTutorialI[]> {
    return HttpService
      .get(`${process.env.ENDPOINT}/tutorials`)
      .then((resp) => resp.json());
  }

  static getInfo(tutorialId: string): Promise<WIPPopulatedTutorialI> {
    return HttpService
      .get(`${process.env.ENDPOINT}/tutorials/${tutorialId}`)
      .then((resp) => resp.json());
  }

  static getProgress(tutorialId: string): Promise<TutorialProgressI> {
    return HttpService
      .get(`${process.env.ENDPOINT}/tutorials/${tutorialId}/progress`)
      .then((resp) => resp.json());
  }

  static async startTutorial(tutorialId: string): Promise<void> {
    await HttpService
      .post(`${process.env.ENDPOINT}/tutorials/${tutorialId}/start`);
  }

  static async getTutorialStatus(tutorialId: string, options?: RequestInit): Promise<{ status: 'not_started' | 'started' | 'completed'}> {
    return HttpService
      .get(`${process.env.ENDPOINT}/tutorials/${tutorialId}/status`, options)
      .then((resp) => resp.json());
  }
}

export default TutorialService;
