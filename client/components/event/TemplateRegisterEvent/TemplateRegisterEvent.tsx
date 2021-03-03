import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import ReactSelect from 'react-select';
import { EventDescription } from '~/services/Constants';
import { ShareButton } from '~/components/SocialMediaButtons';

import SweetAlertService from '~/services/sweet-alert/SweetAlert.service';
import WaitlistConfirmation from '../WaitListConfirmation/WaitListConfirmation';
import EventService from '~/services/Event.service';
import Form, { FormGroup } from '~/components/Form';

import styles from './TemplateRegisterEvent.module.scss';

export default function Event({
  title, cover, description, url, date, optionsDateAndHour,
} : EventDescription) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const [urlToShare, setUrlToShare] = useState(router.pathname);

  useEffect(() => {
    setUrlToShare(`${window.location.origin}${router.pathname}`);
  }, []);

  const onSubmit = async (e) => {
    const {
      name, email, tel, dateAndHour,
    } = e;
    let userData = {
      name,
      email,
      tel,
      dateAndHour,
    };

    setIsLoading(true);
    let shouldResetForm = true;

    try {
      const status = await EventService.registerToEvent(userData);

      if (status === 201) {
        SweetAlertService.toast({
          type: 'success',
          text: 'Felicitări! Înregistrarea la eveniment a avut loc cu succes!',
        });
      } else {
        SweetAlertService.content(
          WaitlistConfirmation,
          'Lista de așteptare',
          {
            onSuccess() {
              SweetAlertService.closePopup();
            },
          },
        );
      }
    } catch (err) {
      shouldResetForm = false;
      setError(err.message || 'Nu am putut să te înregistrăm. Încearcă din nou!');
    } finally {
      setIsLoading(false);
    }
    return shouldResetForm;
  };

  return (
    <section className={`${styles['template-event']} d-flex justify-content-between align-items-center`}>
      <div
        className={`${styles.cover}`}
        style={{
          backgroundImage: `url(${cover})`,
        }}
      />
      <div className={styles['event-details']}>
        <div>
          <h2 className={styles.title}>
            {title}
          </h2>
          <div className="d-flex justify-content-between flex-wrap">
            <span>
              Dată:
              {' '}
              <strong>
                <time>{date}</time>
              </strong>
            </span>
            <span>
              Locație:
              {' '}
              <Link href="#">
                <a className={`${styles['event-location']} text-bold no-underline d-inline-block relative`}>
                  {url}
                </a>
              </Link>
            </span>
          </div>
          <p className="my-5">{description}</p>
        </div>
        <Form onSubmit={onSubmit} onInput={() => setError(null)}>
          <FormGroup className="mb-4">
            <label>
              <span className="label text-bold mb-2">
                Nume si prenume
              </span>
              <input type="text" name="name" required />
            </label>
          </FormGroup>

          <FormGroup className="mb-4">
            <label>
              <span className="label text-bold mb-2">
                Adresa de email
              </span>
              <input type="email" name="email" required />
            </label>
          </FormGroup>

          <FormGroup className="mb-4">
            <label>
              <span className="label text-bold mb-2">
                Număr de telefon (te vom contacta cu o zi înainte de eveniment pentru confirmare)
              </span>
              <input type="text" name="tel" required />
            </label>
          </FormGroup>

          <ReactSelect
            isSearchable
            placeholder="Alege data si ora la care vrei sa participi"
            className={styles.select}
            options={optionsDateAndHour}
            name="dateAndHour"
          />

          {error && (
          <p className="text-red text-bold">
            {error}
          </p>
          )}
          <div className="d-flex justify-content-between flex-wrap my-5">
            <button
              type="submit"
              disabled={isLoading}
              className={`btn btn--blue mb-2 ${isLoading ? 'btn--loading' : ''}`}
            >
              Înscrie-te
            </button>
            <ShareButton
              url={urlToShare}
              config={{
                copy: true,
                facebook: true,
                whatsapp: true,
                linkedin: true,
              }}
            />
          </div>
        </Form>
        <Link href="/detaliu-eveniment">
          <a href="/detaliu-eveniment" className={`${styles['tell-me-more']} d-block my-5`}>
            Spune-mi mai multe
          </a>
        </Link>
      </div>
    </section>
  );
}
