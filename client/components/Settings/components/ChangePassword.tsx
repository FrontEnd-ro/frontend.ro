import React, { useState } from 'react';
import Form, { FormGroup, PasswordReveal } from '~/components/Form';
import SweetAlertService from '~/services/sweet-alert/SweetAlert.service';
import UserService from '~/services/User.service';

interface Props {
  onSuccess: (updatedUser: any) => void;
}

function ChangePassword({ onSuccess }: Props) {
  const [error, setError] = useState(null);
  const [isChanging, setIsChanging] = useState(false);

  const onSubmit = async (formData) => {
    const { newPassword, passwordConfirm } = formData;

    setIsChanging(true);
    let shouldResetForm = true;

    try {
      const updatedUser = await UserService.updatePassword({
        newPassword,
        password: passwordConfirm,
      });

      SweetAlertService.toast({
        type: 'success',
        text: 'Parola a fost schimbat cu succes!',
      });

      onSuccess(updatedUser);
    } catch (err) {
      shouldResetForm = false;
      setError(err.message || 'Nu am putut să-ți schimbăm parola. Încearcă din nou!');
    } finally {
      setIsChanging(false);
    }

    return shouldResetForm;
  };

  return (
    <Form onInput={() => setError(null)} onSubmit={onSubmit}>
      <h3 className="mt-0">Schimbă parola</h3>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <FormGroup className="mb-4">
            <label>
              <span className="label">
                Noua parolă*
              </span>
              <PasswordReveal required autoComplete="new-password" name="newPassword" />
            </label>
          </FormGroup>

          <FormGroup>
            <label>
              <span className="label">
                Parola curentă*
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
          Schimbă parola
        </button>
      </div>
    </Form>
  );
}

export default ChangePassword;
