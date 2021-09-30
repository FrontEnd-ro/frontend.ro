import HttpService from '../Http.service';

class PasswordResetService {
  static generateResetCode(email: string) {
    return HttpService.post(`${process.env.ENDPOINT}/password-reset`, {
      email,
    });
  }
}

export default PasswordResetService;
