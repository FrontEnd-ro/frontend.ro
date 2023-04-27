import HttpService from './Http.service';
import { TidbitI } from '~/../shared/types/tidbit.types';

class TidbitService {
  static getAll(fields: string[] = []) {
    let baseUrl = `${process.env.ENDPOINT}/tidbits`;
    if (fields.length > 0) {
      baseUrl=`${baseUrl}?${fields.map((f) => `field=${f}`).join('&')}`;
    }

    return HttpService.get(baseUrl).then((resp) => resp.json());
  }

  static getById(tidbitId: string) {
    return HttpService
      .get(`${process.env.ENDPOINT}/tidbits/${tidbitId}`)
      .then((resp) => resp.json());
  }

  static getPreviousAndNextTidbit(currentTidbitId: string): Promise<{
    previous: TidbitI;
    next: TidbitI;
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
