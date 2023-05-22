import HttpService from './Http.service';
import { API_TidbitI } from '~/../shared/types/tidbit.types';

class TidbitService {
  static getAll(fields: string[] = []): Promise<Partial<API_TidbitI>[]> {
    let baseUrl = `${process.env.ENDPOINT}/tidbits`;
    if (fields.length > 0) {
      baseUrl=`${baseUrl}?${fields.map((f) => `field=${f}`).join('&')}`;
    }

    return HttpService.get(baseUrl).then((resp) => resp.json());
  }

  static getById(tidbitId: string): Promise<API_TidbitI> {
    return HttpService
      .get(`${process.env.ENDPOINT}/tidbits/${tidbitId}`)
      .then((resp) => resp.json());
  }

  static getPreviousAndNextTidbit(currentTidbitId: string): Promise<{
    previous: API_TidbitI;
    next: API_TidbitI;
  }> {
    return HttpService.get(
      `${process.env.ENDPOINT}/tidbits/${currentTidbitId}/sides`,
    ).then((resp) => resp.json());
  }

  static increaseTidbitView(tidbitId: string): Promise<Response> {
    return HttpService.post(`${process.env.ENDPOINT}/tidbits/${tidbitId}/views`);
  }
}

export default TidbitService;
