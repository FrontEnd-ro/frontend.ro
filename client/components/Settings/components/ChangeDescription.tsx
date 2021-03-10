import React, { useState } from 'react';
import Button from '~/components/Button';
import Form, { FormGroup, PasswordReveal } from '~/components/Form';
import SweetAlertService from '~/services/sweet-alert/SweetAlert.service';
import UserService from '~/services/User.service';

interface Props {
  onSuccess: (user: any) => void;
}

function ChangeDescription({ onSuccess }: Props) {
  const [error, setError] = useState(null);
  const [isChanging, setIsChanging] = useState(false);

  const onSubmit = async (form) => {
    const { newDescription, passwordConfirm } = form;

    setIsChanging(true);
    let shouldResetForm = true;

    try {
      const updatedUser = await UserService.updateDescription({
        description: newDescription,
        password: passwordConfirm,
      });

      SweetAlertService.toast({
        type: 'success',
        text: 'Descrierea a fost schimbată cu succes!',
      });

      onSuccess(updatedUser);
    } catch (err) {
      shouldResetForm = false;
      setError(err.message || 'Nu am putut să-ți schimbăm descrierea. Încearcă din nou!');
    } finally {
      setIsChanging(false);
    }

    return shouldResetForm;
  };

  return (
    <Form onInput={() => setError(null)} autoComplete="off" onSubmit={onSubmit}>
      <h3 className="mt-0">Schimbă descrierea</h3>
      <div className="d-flex justify-content-between align-items-center">
        <div id="change-description">
          <FormGroup className="mb-4">
            <label>
              <span className="label">
                Noua descriere*
              </span>
              <textarea cols={40} rows={5} name="newDescription" required />
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
        <Button
          type="submit"
          variant="blue"
          loading={isChanging}
        >
          Schimbă descrierea
        </Button>
      </div>
    </Form>
  );
}

export default ChangeDescription;
