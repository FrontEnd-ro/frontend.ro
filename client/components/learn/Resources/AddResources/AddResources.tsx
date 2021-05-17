import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import ResourceService from '~/services/Resource.service';
import Form, { FormGroup } from '~/components/Form';
import Button from '~/components/Button';
import SweetAlertService from '~/services/sweet-alert/SweetAlert.service';

import { RootState } from '~/redux/root.reducer';

import styles from './AddResources.module.scss';

interface Props {
  title: string;
  cover: string;
  className?: string;
}
function AddResources({
  userInfo,
  title,
  cover,
  className,
}: ConnectedProps<typeof connector> & Props) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (formData: {
    id: string;
    name: string;
    email: string;
    title: string;
    description: string;
    url: string;
    type: string;
    cover?: string;
  }) => {
    setIsLoading(true);
    let shouldResetForm = true;

    try {
      const newResource = await ResourceService.addResource(formData);
      console.log(newResource);

      SweetAlertService.toast({
        type: 'success',
        text: 'Super! Tocmai ai contribuit cu o nouă resursă! ♥',
      });
    } catch (err) {
      shouldResetForm = false;
      setError(
        err.message || 'Nu am putut să adăugăm resursa. Încearcă din nou!',
      );
    } finally {
      setIsLoading(false);
    }
    return shouldResetForm;
  };

  return (
    <div
      className={`${styles['add-resources']} ${
        className || ''
      } d-flex justify-content-between align-items-center`}
    >
      {cover && (
        <img
          className={styles['cover--row']}
          src={cover}
          alt={`${title} cover`}
        />
      )}
      <Form onSubmit={onSubmit} onInput={() => setError(null)}>
        {title && <h2 className={styles.title}>{title}</h2>}
        {cover && (
          <img
            className={styles['cover--column']}
            src={cover}
            alt={`${title} cover`}
          />
        )}
        <>
          <FormGroup className="mb-4">
            <label>
              <span className="label text-bold mb-2">Nume si prenume</span>
              {userInfo ? (
                <input
                  type="text"
                  name="name"
                  defaultValue={userInfo.name}
                  required
                />
              ) : (
                <input type="text" name="name" required />
              )}
            </label>
          </FormGroup>

          <FormGroup className="mb-4">
            <label>
              <span className="label text-bold mb-2">Adresa de email</span>
              {userInfo ? (
                <input
                  type="email"
                  defaultValue={userInfo.email}
                  name="email"
                  required
                />
              ) : (
                <input type="email" name="email" required />
              )}
            </label>
          </FormGroup>

          <FormGroup>
            <label>
              <span className="label text-bold mb-2">Tipul/Categoria</span>

              <input type="text" name="type" required />
            </label>
          </FormGroup>

          <FormGroup>
            <label>
              <span className="label text-bold mb-2">Titlu</span>

              <input type="text" name="title" required />
            </label>
          </FormGroup>

          <FormGroup>
            <label>
              <span className="label text-bold mb-2">Descriere</span>

              <textarea name="description" />
            </label>
          </FormGroup>

          <FormGroup>
            <label>
              <span className="label text-bold mb-2">URL</span>

              <input
                type="url"
                name="url"
                placeholder="https://example.com"
                pattern="https://.*"
                required
              />
            </label>
          </FormGroup>
        </>

        {error && <p className="text-red text-bold">{error}</p>}

        <Button
          type="submit"
          variant="blue"
          loading={isLoading}
          className="my-5"
        >
          Adaugă
        </Button>
      </Form>
    </div>
  );
}

function mapStateToProps(state: RootState) {
  return {
    userInfo: state.user.info,
  };
}
const connector = connect(mapStateToProps);

export default connector(AddResources);
