import HttpService from '../Http.service';

class PresentationService {
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
