export enum UserRole {
  ADMIN = 'admin',
  TEACHER = 'teacher',
  STUDENT = 'student',
}

// We respond with this object on all user-related requests/fields.
// NOTE: depending on the rights/permissions of the API caller,
// we will return only a subset of those fields, or none at all.
export interface API_UserI {
  avatar: string;

  name?: string;

  email?: string;

  username: string;

  description?: string;

  role?: UserRole;

  tutorials?: string[];
}
