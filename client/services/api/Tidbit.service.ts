import HttpService from './Http.service';
import { API_TidbitI } from '~/../shared/types/tidbit.types';

class TidbitService {
  static getPreviousAndNextTidbit(currentTidbitId: string): Promise<{
    previous: API_TidbitI;
    next: API_TidbitI;
  }> {
    return HttpService.get(
      `/api/tidbits/${currentTidbitId}/sides`,
    ).then((resp) => resp.json());
  }
}

export default TidbitService;
