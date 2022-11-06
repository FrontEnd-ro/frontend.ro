import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Button from '~/components/Button';
import Form, { FormGroup, PasswordReveal } from '~/components/Form';
import SweetAlertService from '~/services/sweet-alert/SweetAlert.service';
import UserService from '~/services/api/User.service';

interface Props {
  onSuccess: () => void;
}

function DeleteAccount({ onSuccess }: Props) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (formData) => {
    const { passwordConfirm } = formData;

    const { isConfirmed } = await SweetAlertService.confirm({
      title: 'Șterge contul',
      text: 'Ești sigur? Această decizie e permanentă.',
      confirmButtonText: 'Da, șterge contul',
    });

    if (!isConfirmed) {
      // Reset form and exit
      return true;
    }

    setIsDeleting(true);
    let shouldResetForm = true;

    try {
      await UserService.delete(passwordConfirm);
      onSuccess();
    } catch (err) {
      shouldResetForm = false;
      setError(err.message || 'Nu am putut să-ți schimbăm numele. Încearcă din nou!');
    } finally {
      setIsDeleting(false);
    }

    return shouldResetForm;
  };

  return (
    <Form onInput={() => setError(null)} onSubmit={onSubmit}>
      <h3 className="mt-0">Șterge contul și toate informațiile asociate</h3>
      <div className="d-flex justify-content-between align-items-center">
        <FormGroup>
          <p className="mt-0"> Această decizie e una finală, nu te poți răzgândi. Te rugăm să fii sigur!</p>
          <label className="d-inline-block">
            <span className="label">
              Parola*
            </span>
            <PasswordReveal required autoComplete="new-password" name="passwordConfirm" />
          </label>
          {error && (
            <p className="text-red text-bold">
              ❌
              {' '}
              {error}
            </p>
          )}
        </FormGroup>
        <Button
          variant="danger"
          type="submit"
          loading={isDeleting}
        >
          Șterge contul
        </Button>
      </div>
    </Form>
  );
}

export default DeleteAccount;
