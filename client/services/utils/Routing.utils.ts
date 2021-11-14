import { UrlObject } from 'url';
import { NextRouter } from 'next/router';

class RoutingUtils {
  static isRouteActive(router: NextRouter, url: UrlObject) {
    // This is a naive implementation based on what we need right now.
    // In other words, we found out that only those 2 checks get the job done.
    // We may need to add additional checks, depending on future usecases.
    if (url.pathname !== undefined && router.pathname !== url.pathname) {
      return false;
    }

    if (
      url.query !== undefined
      && Object.keys(url.query).some((key) => url.query[key] !== router.query[key])
    ) {
      return false;
    }

    return true;
  }

  static removeQuery(router: NextRouter, query: string) {
    const newQuery = { ...router.query };

    delete newQuery[query];

    router.replace({
      query: newQuery,
    });
  }

  static getQueryString(router: NextRouter, name: string) {
    const value = router.query[name];

    if (Array.isArray(value)) {
      return value[0];
    }

    return value;
  }
}

export default RoutingUtils;
