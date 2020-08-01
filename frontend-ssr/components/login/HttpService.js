import Login from '~/common-components/login/Login.component';
import SwalService from './swal/Swal.service';

class Http {
  get(url, options = {}, prevent500Popup) {
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
        return resp;
      }
      return resp.json().then((jsonResp) => {
        throw jsonResp;
      });
    })
    .catch((err) => {
      if (!prevent500Popup && (!err || !err.status || err.status === 500)) {
        SwalService.error({
          title: 'Oups!',
          text: err.reason || 'Refresh the page and try again!',
          buttonText: 'Got it!',
        });
      } else if (err.status === 401 && options.method !== 'GET' && options.catch401 !== false) {
        return new Promise((resolve) => {
          SwalService.content(Login, 'Oups, your session has expired', {
            onSuccess: () => resolve(httpGeneric(url, options)),
          });
        });
      }
      throw err;
    });
}

export default new Http();
