class Http {
  get(url: string, options = {}) {
    return this.httpGeneric(url, { ...options, method: 'GET' });
  }

  post(url: string, body = {}, options = {}) {
    return this.httpGeneric(url, {
      ...options,
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  put(url: string, body = {}, options = {}) {
    return this.httpGeneric(url, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(body),
    });
  }

  patch(url: string, body = {}, options = {}) {
    return this.httpGeneric(url, {
      ...options,
      method: 'PATCH',
      body: JSON.stringify(body),
    });
  }

  delete(url: string, body = {}, options = {}) {
    return this.httpGeneric(url, {
      ...options,
      method: 'DELETE',
      body: JSON.stringify(body),
    });
  }

  // eslint-disable-next-line class-methods-use-this
  private httpGeneric(url: string, options = {}) {
    return fetch(url, {
      headers: new Headers({
        'content-type': 'application/json',
      }),
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
        if (!err || !err.status || err.status === 500) {
          alert('Oops! Something went wrong. Refresh and try again!');
        }
        throw err;
      });
  }
}

export default new Http();
