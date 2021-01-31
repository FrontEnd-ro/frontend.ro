import React, { useState } from 'react';
import Form, { FormGroup, PasswordReveal } from '~/components/Form';
import SweetAlertService from '~/services/sweet-alert/SweetAlert.service';
import UserService from '~/services/User.service';

interface Props {
  onSuccess: (user: any) => void;
}

function ChangeName({ onSuccess }: Props) {
  const [error, setError] = useState(null);
  const [isChanging, setIsChanging] = useState(false);

  const onSubmit = async (form) => {
    const { newName, passwordConfirm } = form;

    setIsChanging(true);
    let shouldResetForm = true;

    try {
      const updatedUser = await UserService.updateName({
        name: newName,
        password: passwordConfirm,
      });

      SweetAlertService.toast({
        type: 'success',
        text: 'Numele a fost schimbat cu succes!',
      });

      onSuccess(updatedUser);
    } catch (err) {
      shouldResetForm = false;
      setError(err.message || 'Nu am putut să-ți schimbăm numele. Încearcă din nou!');
    } finally {
      setIsChanging(false);
    }

    return shouldResetForm;
  };

  return (
    <Form onInput={() => setError(null)} autoComplete="off" onSubmit={onSubmit}>
      <h3 className="mt-0">Schimbă numele</h3>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <FormGroup className="mb-4">
            <label>
              <span className="label">
                Noul nume*
              </span>
              <input type="text" name="newName" required />
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
          Schimbă numele
        </button>
      </div>
    </Form>
  );
}

export default ChangeName;
