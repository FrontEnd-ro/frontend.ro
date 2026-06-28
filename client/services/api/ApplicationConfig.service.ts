import HttpService from './Http.service';

class ApplicationConfigService {
  static get() {
    return HttpService
      .get('/api/application-config', undefined, true)
      .then((resp) => resp.json());
  }
}

export default ApplicationConfigService;
