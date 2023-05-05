import HttpService from './Http.service';

class SubscribeService {
  static subscribe({ name, email }) {
    return HttpService.post(`${process.env.ENDPOINT}/subscribe`, {
      name,
      email,
    }).then((resp) => resp.json());
  }
}

export default SubscribeService;
