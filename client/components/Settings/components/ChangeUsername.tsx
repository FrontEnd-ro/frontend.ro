import React, { useState } from 'react';
import Form, { FormGroup, PasswordReveal } from '~/components/Form';
import UsernameInput from '~/components/Form/UsernameInput/UsernameInput';
import SweetAlertService from '~/services/sweet-alert/SweetAlert.service';
import UserService from '~/services/User.service';

interface Props {
  onSuccess: (updatedUser: any) => void;
}

function ChangeUsername({ onSuccess }: Props) {
  const [error, setError] = useState(null);
  const [isChanging, setIsChanging] = useState(false);

  const onSubmit = async (formData) => {
    const { newUsername, passwordConfirm } = formData;

    setIsChanging(true);
    let shouldResetForm = true;

    try {
      const updatedUser = await UserService.updateUsername({
        username: newUsername,
        password: passwordConfirm,
      });

      SweetAlertService.toast({
        type: 'success',
        text: 'Username-ul a fost schimbat cu succes!',
      });

      onSuccess(updatedUser);
    } catch (err) {
      shouldResetForm = false;
      setError(err.message || 'Nu am putut să-ți schimbăm username-ul. Încearcă din nou!');
    } finally {
      setIsChanging(false);
    }

    return shouldResetForm;
  };

  return (
    <Form onInput={() => setError(null)} onSubmit={onSubmit}>
      <h3 className="mt-0">Schimbă username-ul</h3>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <FormGroup className="mb-4">
            <label>
              <span className="label">
                Noul username*
              </span>
              <UsernameInput name="newUsername" />
            </label>
          </FormGroup>

          <FormGroup>
            <label>
              <span className="label">
                Parola*
              </span>
              <PasswordReveal required autoComplete="new-password" name="passwordConfirm" />
            </label>
          </FormGroup>
          {error && (
            <p className="text-red text-bold">
              ❌
              {' '}
              {error}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={isChanging}
          className={`btn btn--blue ${isChanging ? 'btn--loading' : ''}`}
        >
          Schimbă username-ul
        </button>
      </div>
    </Form>
  );
}

export default ChangeUsername;
