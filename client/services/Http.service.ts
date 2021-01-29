import SweetAlertService from './sweet-alert/SweetAlert.service';

class Http {
  get(url: string, options = {}) {
    return this.httpGeneric(url, { ...options, method: 'GET' });
  }

  post(url: string, body = {}, options = {}) {
    return this.httpGeneric(url, {
      ...options,
      method: 'POST',
      body,
    });
  }

  put(url: string, body = {}, options = {}) {
    return this.httpGeneric(url, {
      ...options,
      method: 'PUT',
      body,
    });
  }

  patch(url: string, body = {}, options = {}) {
    return this.httpGeneric(url, {
      ...options,
      method: 'PATCH',
      body,
    });
  }

  delete(url: string, body = {}, options = {}) {
    return this.httpGeneric(url, {
      ...options,
      method: 'DELETE',
      body,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  private httpGeneric(url: string, options: Record<string, any> = {}) {
    const headersInit: HeadersInit = {
      'content-type': 'application/json',
    };

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
        if (!err || !err.code || err.code === 500) {
          SweetAlertService.error({
            text: err.reason || 'Refresh-uiește pagina și încearcă din nou.',
            buttonText: 'Ok1',
          });
        }
        throw err;
      });
  }
}

export default new Http();
