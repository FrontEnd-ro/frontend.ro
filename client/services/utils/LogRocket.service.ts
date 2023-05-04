import * as LogrocketInstance from 'logrocket/dist/types';
import { API_UserI } from '~/../shared/types/user.types';

class LogRocketService {
  private static instance: typeof LogrocketInstance | null = null;

  private static identityData: API_UserI;

  static init() {
    if (LogRocketService.instance) {
      console.info(
        "[LogRocketService] Return early from 'init' because it was previously initialized.",
      );
      return Promise.resolve();
    }

    return import('logrocket')
      .then((module) => {
        LogRocketService.instance = module.default;

        LogRocketService.instance.init('ijivpy/frontendro', {
          dom: {
            textSanitizer: false,
          },
        });
      })
      .catch((err) => {
        console.error('[LogRocket]', err);
      });
  }

  static async identify(data: API_UserI) {
    if (!LogRocketService.instance) {
      await LogRocketService.init();
    }

    LogRocketService.identityData = data;
    LogRocketService.instance.identify(data.username, {
      email: data.email,
      username: data.username,
      name: data.name || 'Unknnown name',
    });
  }

  static async anonymize() {
    if (!LogRocketService.instance) {
      // Not even initialized yet. We can return
      return;
    }

    LogRocketService.identityData = null;
    LogRocketService.instance.identify(null);
  }

  static getIdentityData() {
    return LogRocketService.identityData;
  }
}

export default LogRocketService;
