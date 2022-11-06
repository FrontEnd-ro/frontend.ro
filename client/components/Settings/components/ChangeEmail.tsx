import React, { useState } from 'react';
import Button from '~/components/Button';
import Form, { FormGroup, PasswordReveal } from '~/components/Form';
import SweetAlertService from '~/services/sweet-alert/SweetAlert.service';
import UserService from '~/services/api/User.service';

interface Props {
  onSuccess: (updatedUser: any) => void;
}

function ChangeEmail({ onSuccess }: Props) {
  const [error, setError] = useState(null);
  const [isChanging, setIsChanging] = useState(false);

  const onSubmit = async (form) => {
    const { newEmail, passwordConfirm } = form;

    setIsChanging(true);
    let shouldResetForm = true;

    try {
      const updatedUser = await UserService.updateEmail({
        email: newEmail,
        password: passwordConfirm,
      });

      SweetAlertService.toast({
        type: 'success',
        text: 'Email-ul a fost schimbat cu succes!',
      });

      onSuccess(updatedUser);
    } catch (err) {
      shouldResetForm = false;
      setError(err.message || 'Nu am putut să-ți schimbăm email-ul. Încearcă din nou!');
    } finally {
      setIsChanging(false);
    }

    return shouldResetForm;
  };

  return (
    <Form onInput={() => setError(null)} onSubmit={onSubmit}>
      <h3 className="mt-0">Schimbă email-ul</h3>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <FormGroup className="mb-4">
            <label>
              <span className="label">
                Noul email*
              </span>
              <input type="email" name="newEmail" required />
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
              {error}
            </p>
          )}
        </div>
        <Button
          type="submit"
          variant="blue"
          loading={isChanging}
        >
          Schimbă email-ul
        </Button>
      </div>
    </Form>
  );
}

export default ChangeEmail;
