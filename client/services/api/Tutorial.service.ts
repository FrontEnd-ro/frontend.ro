import HttpService from '../Http.service';
import { WIPPopulatedTutorialI, TutorialProgressI } from '~/../shared/types/tutorial.types';

class TutorialService {
  static getAll(): Promise<WIPPopulatedTutorialI[]> {
    return HttpService
      .get(`${process.env.ENDPOINT}/tutorials`)
      .then((resp) => resp.json());
  }

  static getInfo(tutorialName: string): Promise<WIPPopulatedTutorialI> {
    return HttpService
      .get(`${process.env.ENDPOINT}/tutorials/${tutorialName}`)
      .then((resp) => resp.json());
  }

  static getProgress(tutorialName: string): Promise<TutorialProgressI> {
    return HttpService
      .get(`${process.env.ENDPOINT}/tutorials/${tutorialName}/progress`)
      .then((resp) => resp.json());
  }
}

export default TutorialService;
