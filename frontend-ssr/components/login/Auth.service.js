import HttpService from './Http.service';
import AppConstants from '~/App.constants';

class AuthService {
  ping() {
    return HttpService.get(`${AppConstants.ENDPOINT}/auth/ping`).then((resp) => resp.json());
  }

  checkUsernameAvailability(username) {
    return HttpService.get(`${AppConstants.ENDPOINT}/auth/username/${username}`);
  }

  login({ email, password }) {
    return HttpService.post(`${AppConstants.ENDPOINT}/auth/login`, {
      emailOrUsername: email,
      password,
    }).then((resp) => resp.json());
  }

  logout() {
    return HttpService.post(`${AppConstants.ENDPOINT}/auth/logout`);
  }

  register({ username, email, password }) {
    return HttpService.post(`${AppConstants.ENDPOINT}/auth/register`, {
      username,
      email,
      password,
    }).then((resp) => resp.json());
  }

  changeAvatar(type) {
    return HttpService.post(`${AppConstants.ENDPOINT}/auth/update-avatar`, {
      type,
    }).then((resp) => resp.json());
  }

  firstSetName({ name }) {
    return HttpService.post(`${AppConstants.ENDPOINT}/auth/set-name`, {
      name,
    }).then((resp) => resp.json());
  }

  changeName({ name, password }) {
    return HttpService.post(`${AppConstants.ENDPOINT}/auth/update-name`, {
      name,
      password,
    }).then((resp) => resp.json());
  }

  changeUsername({ username, password }) {
    return HttpService.post(`${AppConstants.ENDPOINT}/auth/update-username`, {
      username,
      password,
    }).then((resp) => resp.json());
  }

  changeEmail({ email, password }) {
    return HttpService.post(`${AppConstants.ENDPOINT}/auth/update-email`, {
      email,
      password,
    }).then((resp) => resp.json());
  }

  changePassword({ newPassword, oldPassword }) {
    return HttpService.post(`${AppConstants.ENDPOINT}/auth/update-password`, {
      newPassword,
      oldPassword,
    }).then((resp) => resp.json());
  }

  changeSubscription({ hasFullSubscription }) {
    return HttpService.post(`${AppConstants.ENDPOINT}/auth/update-subscription`, {
      hasFullSubscription,
    }).then((resp) => resp.json());
  }

  deleteAccount(password) {
    return HttpService.delete(`${AppConstants.ENDPOINT}/auth/delete`, {
      password,
    });
  }
}

export default new AuthService();
