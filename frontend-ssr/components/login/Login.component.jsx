import React from 'react';

import store from 'Redux/store';
import { loginUserSuccess } from 'Redux/user/user.actions';
import AuthService from 'Services/Auth.service';

import Form from '../Form';
import PasswordReveal from '../PasswordReveal.component';

import './Login.style.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      register: false,
      loading: false,
      username: '',
      usernameAvailability: undefined,
    };

    this.formRef = React.createRef();

    this.clearServerError = this.clearServerError.bind(this);
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }

  clearServerError() {
    this.setState({
      reason: null,
    });
  }

  login(data) {
    if ('preventDefault' in data) {
      data.preventDefault();
    }

    if (this.state.register) {
      this.setState({ register: false, reason: null });
    } else {
      this.sendRequest('LOGIN', data);
    }
  }

  register(data) {
    if ('preventDefault' in data) {
      data.preventDefault();
    }

    if (!this.state.register) {
      this.setState({ register: true, reason: null });
    } else {
      this.sendRequest('REGISTER', data);
    }
  }

  sendRequest(type, data) {
    if (this.state.register && this.state.usernameAvailability !== true) {
      return;
    }
    const API_TO_CALL = type === 'LOGIN' ? AuthService.login : AuthService.register;

    this.setState({ loading: true });

    API_TO_CALL(data)
      .then((resp) => {
        this.setState({ loading: false });
        store.dispatch(loginUserSuccess(resp));

        if (this.props.onSuccess) {
          this.props.onSuccess(type, resp);
        }
        if (this.props.closeModal) {
          this.props.closeModal(type, resp);
        }
      })
      .catch((err) => {
        this.setState({
          reason: err.reason,
          loading: false,
        });
      });
  }

  onUsernameChange(e) {
    const username = e.target.value;
    clearTimeout(this.timeoutId);

    this.setState({
      username,
      usernameAvailability: null,
    });

    if (username) {
      this.timeoutId = setTimeout(() => {
        this.setState({
          usernameAvailability: 'LOADING',
        });
        AuthService.checkUsernameAvailability(encodeURI(username))
          .then((resp) => {
            this.setState({
              usernameAvailability: false,
              usernameError: 'The username is so cool that somebody else took it!',
            });
          })
          .catch((err) => {
            this.setState({
              usernameAvailability: err.status === 404,
              usernameError: err.status === 404 ? '' : err.reason,
            });
          });
      }, 300);
    }
  }

  render() {
    const {
      loading, register, reason, usernameAvailability, usernameError,
    } = this.state;
    return (
      <Form
        ref={this.formRef}
        className={`${this.props.className || ''} login-form ${register ? 'login-form--register' : ''}`}
        onSubmit={register ? this.register : this.login}
        onInput={this.clearServerError}
      >
        <label className="form-control--text">
          <span className="label">
            {register && 'Email address'}
            {!register && 'Email address or username'}
          </span>
          <input autoCapitalize="none" type="text" required name="email" />
          <span className="error">
            {register && '🧙‍ You shall not pass without an email!'}
            {!register && '🧙‍ You shall not pass without a username or email!'}
          </span>
        </label>
        <div className="form__group show-on-register">
          <label className="form-control--text">
            <span className="label"> Username </span>
            <input
              tabIndex={register ? 0 : -1}
              className="form__input"
              type="text"
              required={register}
              onInput={this.onUsernameChange}
              name="username"
            />
            {usernameAvailability !== 'LOADING' && usernameError && <span className="error error--custom">{usernameError}</span>}

            {usernameAvailability === 'LOADING' && (
            <div className="input-icon loading-icon">
              <i className="icon-spinner" />
            </div>
            )}
            {usernameAvailability === true && (
            <div className="input-icon ok-icon">
              <i className="icon-check" />
            </div>
            )}
            <span className="error">🧙‍ You shall not pass without a username!</span>
          </label>
        </div>
        <div className="form__group">
          <label className="form-control--text">
            <span className="label"> Password </span>
            <PasswordReveal />
          </label>
        </div>
        <label className="form-control--checkbox show-on-register block">
          <input type="checkbox" required={register} />
          <span className="control-indicator" />
          <span className="control-message">
            I have read and agree to the
            {' '}
            {' '}
            <a href="/privacy" className="link">
              Terms & Conditions
            </a>
          </span>
        </label>
        <p className="error error--custom">{reason}</p>
        <div className="form__controls form__group">
          <button
            type={register ? 'button' : 'submit'}
            className={`login-btn btn  ${register ? 'btn--light' : 'btn--success'} ${loading && !register ? 'btn--loading' : ''}`}
            disabled={loading}
            onClick={register ? this.login : () => {}}
          >
            Sign in
          </button>
          <p className="form__separator"> or </p>
          <button
            type={register ? 'submit' : 'button'}
            className={`register-btn btn ${register ? 'btn--success' : 'btn--light'} ${loading && register ? 'btn--loading' : ''}`}
            disabled={loading}
            onClick={register ? () => {} : this.register}
          >
            Register for free
          </button>
        </div>
      </Form>
    );
  }
}

export default Login;
