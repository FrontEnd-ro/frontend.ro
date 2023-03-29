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

// Trully public things about a user, that can be shown
// to everyone.
export interface PublicUserI {
  avatar: string;
  name?: string;
  username: string;
  description?: string;
}

// FIXME: https://github.com/FrontEnd-ro/frontend.ro/issues/443
export type WIPSanitizedUser = Pick<
  UserI,
  | 'avatar'
  | 'name'
  | 'email'
  | 'username'
  | 'description'
  | 'role'
  | 'tutorials'
>;
