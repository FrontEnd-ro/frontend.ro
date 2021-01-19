import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import { DebouncedFunc } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons';

import UserService from '~/services/User.service';
import LoginButtons from './LoginButtons/LoginButtons';
import Form, {
  FormGroup,
  Checkbox,
  InputWithIcon,
  PasswordReveal,
} from '~/components/Form';
import { loadInfo } from '~/redux/user/user.actions';
import { UserState } from '~/redux/user/types';
import { getStore } from '~/redux/store';

import styles from './Login.module.scss';

interface MyProps {
  className?: string;
  onSuccess?: () => void
}

interface MyState {
  mode: 'login' | 'register',
  loading: boolean;
  username: string;
  serverError: string;
  usernameExists: boolean;
}

class Login extends Component<MyProps, MyState> {
  private checkUsernameDebouncedFn: DebouncedFunc<() => void>;

  constructor(props: MyProps) {
    super(props);

    this.state = {
      mode: 'login',
      loading: false,
      serverError: null,
      username: '',
      usernameExists: undefined,
    };
  }

  componentWillUnmount() {
    this.checkUsernameDebouncedFn?.cancel();
  }

  onUsernameChange = (e) => {
    let value: string = e.target.value ?? '';
    value = value.trim();

    this.setState({
      username: value,
      usernameExists: undefined,
    });

    if (!value) {
      return;
    }

    if (this.checkUsernameDebouncedFn) {
      // Cancel previous call
      this.checkUsernameDebouncedFn.cancel();
    }

    // Start a new one so we don't overload server with requests
    this.checkUsernameDebouncedFn = debounce(() => {
      UserService.checkUsername(value)
        .then(() => this.setState({ usernameExists: true }))
        .catch(() => this.setState({ usernameExists: false }));
    }, 250);

    this.checkUsernameDebouncedFn();
  }

  changeMode = (newMode: 'login' | 'register') => {
    const { mode } = this.state;

    if (newMode === mode) {
      // Do nothing since we handle the submit separately
      return;
    }

    // FIXME
    // Without applying the delay, the form will also get
    // get submitted. Maybe there's a better solution?
    setTimeout(() => this.setState({ mode: newMode }), 0);
  }

  submit = (props) => {
    const { mode } = this.state;
    const { onSuccess } = this.props;
    const apiToCall = mode === 'register' ? UserService.register : UserService.login;

    this.setState({ loading: true });

    apiToCall(props)
      .then((user: UserState['info']) => {
        getStore().dispatch(loadInfo(user));
        if (onSuccess) {
          onSuccess();
        }
      })
      .catch((error) => this.setState({ serverError: error.message }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const {
      mode,
      loading,
      serverError,
      usernameExists,
      username,
    } = this.state;

    return (
      <div className={styles['login-form']}>
        <Form onSubmit={this.submit} onInput={() => this.setState({ serverError: null })}>
          <FormGroup className="mb-4">
            <label>
              <span className="label">
                {mode === 'register'
                  ? 'Email'
                  : 'Email sau username'}
              </span>
              <input
                required
                type="text"
                autoCapitalize="none"
                name={mode === 'register' ? 'email' : 'emailOrUsername'}
              />
            </label>
          </FormGroup>

          {mode === 'register' && (
            <FormGroup className="mb-4">
              <label>
                <span className="label"> Username </span>
                <InputWithIcon
                  required
                  type="text"
                  name="username"
                  onChange={this.onUsernameChange}
                >
                  {usernameExists && <FontAwesomeIcon className="text-red" icon={faTimes} />}
                  {usernameExists === false && <FontAwesomeIcon className="text-green" icon={faCheck} />}
                  {usernameExists === undefined && username && <FontAwesomeIcon className="rotate" icon={faSpinner} />}
                </InputWithIcon>
              </label>
            </FormGroup>
          )}

          <FormGroup className="mb-4">
            <label>
              <span className="label"> Parola </span>
              <PasswordReveal />
            </label>
          </FormGroup>

          {(mode === 'register') && (
            <Checkbox
              required
              name="confirm"
              className="d-flex mb-4"
            >
              <span style={{ fontSize: '0.85em' }}>
                Am citit și sunt de acord cu
                {' '}
                <a href="/privacy" className="link">
                  Termenii și Condițiile
                </a>
                {' '}
                de utilizare.
              </span>
            </Checkbox>
          )}

          {serverError && <p className={`${styles['server-error']} text-red text-bold`}>{serverError}</p>}

          <LoginButtons
            mode={mode}
            loading={loading}
            onLogin={() => this.changeMode('login')}
            onRegister={() => this.changeMode('register')}
          />
        </Form>
      </div>
    );
  }
}

export default Login;
