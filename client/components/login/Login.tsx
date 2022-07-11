import React, { Component, PropsWithChildren } from 'react';
import debounce from 'lodash/debounce';
import { DebouncedFunc } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons';

import UserService from '~/services/User.service';
import PasswordResetService from '~/services/api/PasswordReset.service';
import SweetAlertService from '~/services/sweet-alert/SweetAlert.service';
import LoginButtons from './LoginButtons/LoginButtons';
import Form, {
  FormGroup,
  Checkbox,
  InputWithIcon,
  PasswordReveal,
} from '~/components/Form';
import Button from '../Button';
import HorizontalSeparator from '../HorizontalSeparator';
import PasswordReset from './PasswordReset/PasswordReset';
import { loadInfo } from '~/redux/user/user.actions';
import { UserState } from '~/redux/user/types';
import { getStore } from '~/redux/store';

import styles from './Login.module.scss';

interface MyProps {
  mode?: Mode;
  className?: string;
  onSuccess?: (user?: UserState['info']) => void;

  // In case we want to add optional Checkbox items
  // that need to be accepted by the user
  optionalTerms?: {
    name: string;
    description: string | JSX.Element;
    defaultChecked?: boolean;
  }[];
}

type Mode = 'login' | 'register' | 'getResetCode' | 'resetPassword'

interface MyState {
  mode: Mode,
  loading: boolean;
  username: string;
  serverError: string;
  emailToReset: string | null;
  usernameExists: boolean;
}

class Login extends Component<PropsWithChildren<MyProps>, MyState> {
  private checkUsernameDebouncedFn: DebouncedFunc<() => void>;

  constructor(props: MyProps) {
    super(props);

    this.state = {
      mode: props.mode ?? 'login',
      loading: false,
      serverError: null,
      username: '',
      emailToReset: null,
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

  changeMode = (newMode: Mode) => {
    const { mode } = this.state;

    this.setState({
      serverError: null,
      emailToReset: null,
    });
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
          onSuccess(user);
        }
      })
      .catch((error) => this.setState({ serverError: error.message }))
      .finally(() => this.setState({ loading: false }));
  }

  generateResetCode = ({ email }: { email: string }) => {
    this.setState({ loading: true });

    PasswordResetService.generateResetCode(email)
      .then(() => {
        this.setState({
          mode: 'resetPassword',
          emailToReset: email,
        });
        SweetAlertService.toast({
          text: 'Codul pentru resetarea parolei a fost trimis prin email!',
          timer: 5000,
        });
      })
      .catch((error) => this.setState({ serverError: error.message }))
      .finally(() => this.setState({ loading: false }));
  }

  resetPassword = (code: string, newPassword: string) => {
    const { onSuccess } = this.props;
    const { emailToReset } = this.state;
    this.setState({ loading: true });

    return UserService.resetPassword({
      code,
      newPassword,
      emailOrUsername: emailToReset,
    })
      .then((user: UserState['info']) => {
        getStore().dispatch(loadInfo(user));

        if (onSuccess) {
          onSuccess(user);
        }
      })
      .catch((error) => {
        this.setState({ loading: false });
        throw error.message;
      });
  }

  render() {
    const {
      mode,
      loading,
      serverError,
      usernameExists,
      username,
    } = this.state;
    const { className, optionalTerms = [] } = this.props;

    return (
      <div className={`${styles['login-form']} ${className || ''}`}>
        {(mode === 'login' || mode === 'register') && (
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
                <label className="label">
                  Username
                </label>
                <InputWithIcon
                  required
                  type="text"
                  name="username"
                  // TODO: migrate component to Hooks so we can use `useId`
                  id="loginUsername"
                  onChange={this.onUsernameChange}
                >
                  {usernameExists && <FontAwesomeIcon width="1em" className="text-red" icon={faTimes} />}
                  {usernameExists === false && <FontAwesomeIcon width="1em" className="text-green" icon={faCheck} />}
                  {usernameExists === undefined && username && <FontAwesomeIcon width="1em" className="rotate" icon={faSpinner} />}
                </InputWithIcon>
              </FormGroup>
            )}

            <FormGroup className="mb-4">
              <label htmlFor="loginPassword" className="label">
                Parola
              </label>
              {/* TODO: migrate component to Hooks so we can use `useId` */}
              <PasswordReveal inputId="loginPassword" />
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
                  <a href="/termeni-si-conditii" className="link">
                    Termenii și Condițiile
                  </a>
                  {' '}
                  de utilizare.
                </span>
              </Checkbox>
            )}
            {optionalTerms.map((term) => (
              <Checkbox
                required
                key={term.name}
                name={term.name}
                className="d-flex mb-4"
              >
                <span style={{ fontSize: '0.85em' }}>
                  {term.description}
                </span>
              </Checkbox>
            ))}

            {serverError && <p className={`${styles['server-error']} text-red text-bold`}>{serverError}</p>}

            <LoginButtons
              mode={mode}
              loading={loading}
              onLogin={() => this.changeMode('login')}
              onRegister={() => this.changeMode('register')}
              onResetPassword={() => this.changeMode('getResetCode')}
            />
          </Form>
        )}
        {(mode === 'getResetCode' || mode === 'resetPassword') && (
          <>
            <Form
              onSubmit={this.generateResetCode}
              onInput={() => this.setState({ serverError: null })}
            >
              <FormGroup className="mb-4">
                <label>
                  <span className="label">
                    Email
                  </span>
                  <input
                    required
                    type="email"
                    name="email"
                    autoCapitalize="none"
                  />
                </label>
              </FormGroup>
              {serverError && (
                <p className={`${styles['server-error']} text-red text-bold`}>
                  {serverError}
                </p>
              )}
              <Button
                type="submit"
                className="w-100"
                variant={mode === 'getResetCode' ? 'blue' : 'light'}
                loading={mode === 'getResetCode' && loading}
                disabled={mode === 'resetPassword' || loading}
              >
                Generează cod de resetare
              </Button>
            </Form>
            <HorizontalSeparator className="my-5" />
            <PasswordReset
              buttonVariant={mode === 'getResetCode' ? 'light' : 'blue'}
              onReset={this.resetPassword}
              loading={mode === 'resetPassword' && loading}
              disabled={mode === 'getResetCode' || loading}
              characterCount={+process.env.RESET_CODE_LENGTH}
            />
            <div className="text-right mt-4 text-xs">
              <Button variant="link" type="button" onClick={() => this.changeMode('login')}>
                Login/Register?
              </Button>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Login;
