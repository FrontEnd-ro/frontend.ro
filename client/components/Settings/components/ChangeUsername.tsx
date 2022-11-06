import React, { useId, useState } from 'react';
import Button from '~/components/Button';
import Form, { FormGroup, PasswordReveal } from '~/components/Form';
import UsernameInput from '~/components/Form/UsernameInput/UsernameInput';
import SweetAlertService from '~/services/sweet-alert/SweetAlert.service';
import UserService from '~/services/api/User.service';

interface Props {
  onSuccess: (updatedUser: any) => void;
}

function ChangeUsername({ onSuccess }: Props) {
  const inputId = useId();
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
            <label htmlFor={inputId} className="label">
              Noul username*
            </label>
            <UsernameInput id={inputId} name="newUsername" />
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
        <Button
          type="submit"
          variant="blue"
          loading={isChanging}
        >
          Schimbă username-ul
        </Button>
      </div>
    </Form>
  );
}

export default ChangeUsername;
