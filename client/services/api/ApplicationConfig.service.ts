import HttpService from './Http.service';

class ApplicationConfigService {
  static get() {
    return HttpService
      .get(`${process.env.ENDPOINT}/application-config`, undefined, true)
      .then((resp) => resp.json());
  }
}

export default ApplicationConfigService;
