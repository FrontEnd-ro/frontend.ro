import HttpService from '../Http.service';
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
}

export default TidbitService;
