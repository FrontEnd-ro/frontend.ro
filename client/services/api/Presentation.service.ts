import HttpService from './Http.service';

class PresentationService {
  static getAll() {
    return HttpService
      .get(`${process.env.ENDPOINT}/presentations`)
      .then((resp) => resp.json());
  }

  static get(presentationId: string) {
    return HttpService
      .get(`${process.env.ENDPOINT}/presentations/${presentationId}`)
      .then((resp) => resp.json());
  }

  static increaseViews(presentationId: string) {
    return HttpService
      .post(`${process.env.ENDPOINT}/presentations/${presentationId}/views`)
      .then((resp) => resp.json());
  }
}

export default PresentationService;
