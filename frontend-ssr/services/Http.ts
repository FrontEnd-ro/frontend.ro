/* eslint-disable class-methods-use-this */
import SweetAlert from './sweet-alert/SweetAlert.service';

class Http {
  get(url, options = {}, prevent500Popup = false) {
    return httpGeneric(
      url,
      { ...options, method: 'GET' },
      prevent500Popup,
    );
  }

  post(url, body = {}, options = {}) {
    return httpGeneric(
      url,
      {
        ...options,
        method: 'POST',
        body: JSON.stringify(body),
      },
    );
  }

  put(url, body = {}, options = {}) {
    return httpGeneric(
      url,
      {
        ...options,
        method: 'PUT',
        body: JSON.stringify(body),
      },
    );
  }

  patch(url, body = {}, options = {}) {
    return httpGeneric(
      url,
      {
        ...options,
        method: 'PATCH',
        body: JSON.stringify(body),
      },
    );
  }

  delete(url, body = {}, options = {}) {
    return httpGeneric(
      url,
      {
        ...options,
        method: 'DELETE',
        body: JSON.stringify(body),
      },
    );
  }
}

function httpGeneric(url, options = {}, prevent500Popup = false) {
  return fetch(
    url,
    {

      headers: new Headers({
        'content-type': 'application/json',
      }),
      credentials: 'include',
      ...options,
    },
  )
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }

      throw resp;
    })
    .catch((err) => {
      if (!prevent500Popup && (!err || !err.status || err.status === 500)) {
        SweetAlert.toast({
          text: err.reason || 'Something went wrong! Refresh the page and try again!',
          type: 'error',
        });
      }
      throw err;
    });
}

export default new Http();
