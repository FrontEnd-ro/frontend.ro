import HttpService from './Http.service';

class UserService {
  static ping() {
    return HttpService.get(`${process.env.ENDPOINT}/auth/ping`).then((resp) => resp.json());
  }

  static subscribe({ name, email }) {
    return HttpService.post(`${process.env.ENDPOINT}/auth/subscribe`, {
      name,
      email,
    }).then((resp) => resp.json());
  }

  static login({
    emailOrUsername,
    password,
  }: {
    emailOrUsername: string;
    password: string;
  }) {
    return HttpService.post(`${process.env.ENDPOINT}/auth/login`, {
      emailOrUsername,
      password,
    }).then((resp) => resp.json());
  }

  static logout() {
    return HttpService.post(`${process.env.ENDPOINT}/auth/logout`);
  }

  static checkUsername(username: string) {
    return HttpService.get(
      `${process.env.ENDPOINT}/auth/check-username/${username}`,
    );
  }

  static register({
    email,
    username,
    password,
  }: {
    email: string;
    username: string;
    password: string;
  }) {
    return HttpService.post(`${process.env.ENDPOINT}/auth/register`, {
      email,
      username,
      password,
    }).then((resp) => resp.json());
  }

  static updateName(payload: { name: string, password: string }) {
    return HttpService
      .post(`${process.env.ENDPOINT}/auth/name`, payload)
      .then((resp) => resp.json());
  }

  static updateDescription(payload: { description: string, password: string }) {
    return HttpService
      .post(`${process.env.ENDPOINT}/auth/description`, payload)
      .then((resp) => resp.json());
  }

  static updateUsername(payload: { username: string, password: string }) {
    return HttpService
      .post(`${process.env.ENDPOINT}/auth/username`, payload)
      .then((resp) => resp.json());
  }

  static updateEmail(payload: { email: string, password: string }) {
    return HttpService
      .post(`${process.env.ENDPOINT}/auth/email`, payload)
      .then((resp) => resp.json());
  }

  static updatePassword(payload: { newPassword: string, password: string }) {
    return HttpService
      .post(`${process.env.ENDPOINT}/auth/password`, payload)
      .then((resp) => resp.json());
  }

  static resetPassword(payload: { newPassword: string, emailOrUsername: string, code: string }) {
    return HttpService
      .post(`${process.env.ENDPOINT}/auth/password/reset`, payload)
      .then((resp) => resp.json());
  }

  static uploadAvatar(file: Blob): Promise<any> {
    const formData = new FormData();
    formData.append('file', file);

    return HttpService
      .post(`${process.env.ENDPOINT}/auth/avatar`, formData)
      .then((resp) => resp.json());
  }

  static delete(password: string) {
    return HttpService
      .delete(`${process.env.ENDPOINT}/auth`, { password });
  }

  static getGithubAccount() {
    return HttpService
      .get(`${process.env.ENDPOINT}/github/user`)
      .then((resp) => resp.json());
  }

  static wait(mili) {
    return new Promise((resolve) => setTimeout(resolve, mili));
  }
}

export default UserService;
