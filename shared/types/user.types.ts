// eslint-disable-next-line import/prefer-default-export
export enum UserRole {
  ADMIN = 'admin',
  TEACHER = 'teacher',
  STUDENT = 'student',
}

export interface UserI {
  _id?: string;

  avatar: string;

  name?: string;

  email: string;

  username: string;

  description?: string;

  password: string;

  lastLogin: Date;

  // Deprecated
  // eslint-disable-next-line camelcase
  github_access_token?: string;

  role: UserRole;

  tutorials: string[];
}
