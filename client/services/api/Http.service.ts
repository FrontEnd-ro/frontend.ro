import cookie from 'cookie';
import SweetAlertService from '../sweet-alert/SweetAlert.service';


/**
 * VERY IMPORTANT
 * This needs to contain code that can be called from both
 * client side (browser) and server. This is because we're
 * calling some APIs when Server Side Rendeing via Next.
 */
class Http {
  head(url: string, options: RequestInit = {}, preventErrorAlert = false) {
    return this.httpGeneric(url, { ...options, method: 'HEAD' }, preventErrorAlert);
  }

  get(url: string, options: RequestInit = {}, preventErrorAlert = false) {
    return this.httpGeneric(url, { ...options, method: 'GET' }, preventErrorAlert);
  }

  post(url: string, body = {}, options: RequestInit = {}, preventErrorAlert = false) {
    return this.httpGeneric(url, {
      ...options,
      method: 'POST',
      body,
    }, preventErrorAlert);
  }

  put(url: string, body = {}, options: RequestInit = {}, preventErrorAlert = false) {
    return this.httpGeneric(url, {
      ...options,
      method: 'PUT',
      body,
    }, preventErrorAlert);
  }

  patch(url: string, body = {}, options: RequestInit = {}, preventErrorAlert = false) {
    return this.httpGeneric(url, {
      ...options,
      method: 'PATCH',
      body,
    }, preventErrorAlert);
  }

  delete(url: string, body = {}, options: RequestInit = {}, preventErrorAlert = false) {
    return this.httpGeneric(url, {
      ...options,
      method: 'DELETE',
      body,
    }, preventErrorAlert);
  }

  // eslint-disable-next-line class-methods-use-this
  private httpGeneric(
    url: string,
    options: Record<string, any> = {},
    preventErrorAlert = false,
  ) {
    const headersInit: HeadersInit = {
      'content-type': 'application/json',
      // We might need to serve different content based on language
      // For example the Tidbits
      'accept-language': process.env.LANGUAGE,
    };
    let cookies: Record<string, string> = {};

    if (globalThis.document) {
      cookies = cookie.parse(document.cookie);

      // https://github.com/FrontEnd-ro/frontend.ro/issues/505
      if (cookies.token) {
        headersInit.Authorization = `Bearer ${cookies.token}`;
      }
    }

    if (options.body && !(options.body instanceof FormData)) {
      // eslint-disable-next-line no-param-reassign
      options.body = JSON.stringify(options.body);
    } else {
      delete headersInit['content-type'];
    }

    return fetch(url, {
      headers: new Headers(headersInit),
      credentials: 'include',
      ...options,
    })
      .then((resp) => {
        if (resp.ok) {
          return resp;
        }
        return resp.json().then((jsonResp) => {
          throw jsonResp;
        });
      })
      .catch((err) => {
        const isOnClientSide = globalThis.document !== undefined;
        if ((!err || !err.code || err.code === 500) && !preventErrorAlert && isOnClientSide) {
          SweetAlertService.error({
            text: err.message || 'Refresh-uiește pagina și încearcă din nou.',
            buttonText: 'Ok!',
          });
        }
        throw err;
      });
  }
}

export default new Http();
