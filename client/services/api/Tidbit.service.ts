import HttpService from './Http.service';
import { TidbitI } from '~/../shared/types/tidbit.types';

class TidbitService {
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
