const EMAIL_USERNAME_DOES_NOT_EXISTS_ERROR = {
  status: "fail",
  message: "Email or Username does not exists",
};

const BAD_FORM_SUBMITION_ERROR = {
  status: "fail",
  message: "Invalid form submision",
};

const BAD_PASSWORD_ERROR = {
  status: "fail",
  message: "Incorect password ",
};

const UPDATE_LAST_LOGIN_ERROR = {
  status: "fail",
  message: "Something went wrong. Please try again",
};

const EMAIL_EXISTS_ERROR = { email: "Email already exists" };
const USERNAME_EXISTS_ERROR = { username: "Username already exists" };
const BASIC_AVATAR_URL = "https://link-to-avatar.com";

module.exports = {
  EMAIL_USERNAME_DOES_NOT_EXISTS_ERROR,
  BAD_FORM_SUBMITION_ERROR,
  BAD_PASSWORD_ERROR,
  UPDATE_LAST_LOGIN_ERROR,
  EMAIL_EXISTS_ERROR,
  USERNAME_EXISTS_ERROR,
  BASIC_AVATAR_URL,
};
