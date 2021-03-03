import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import ReactSelect from 'react-select';

import EventService from '~/services/Event.service';
import Form, { FormGroup } from '~/components/Form';
import { ShareButton } from '~/components/SocialMediaButtons';
import SweetAlertService from '~/services/sweet-alert/SweetAlert.service';
import WaitlistConfirmation from '../WaitListConfirmation/WaitListConfirmation';

import styles from './RegisterEventCard.module.scss';

export interface EventDate {
  label: string;
  timestamp: number;
}

interface Props {
  duration: string;
  location: string;
  eventDates: EventDate[];
  title?: string;
  description?: string;
  url?: string;
  cover?: string;
  className?: string;
}

function EventCard({
  title,
  cover,
  url,
  duration,
  description,
  location,
  eventDates,
  className,
}: Props) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [urlToShare, setUrlToShare] = useState(url);

  useEffect(() => {
    // If we have the `url` prop then let's use that
    // as the share url. Otherwise default to the current page.
    if (url) {
      setUrlToShare(`${window.location.origin}${url}`);
    } else {
      setUrlToShare(`${window.location.origin}${window.location.pathname}`);
    }
  }, []);

  const onSubmit = async (formData: {
    name: string;
    email: string;
    tel: string;
    timestamp: number;
  }) => {
    setIsLoading(true);
    let shouldResetForm = true;

    if (!formData.timestamp) {
      formData.timestamp = formData.timestamp || eventDates[0].timestamp;
    }

    try {
      const status = await EventService.registerToEvent(formData);

      if (status === 201) {
        SweetAlertService.toast({
          type: 'success',
          text: 'Felicitări! Înregistrarea la eveniment a avut loc cu succes!',
        });
      } else {
        SweetAlertService.content(
          WaitlistConfirmation,
          'Listă de așteptare',
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
    <div className={`${styles['register-event-card']} ${className || ''} d-flex justify-content-between align-items-center`}>
      {cover && <img className={styles['cover--row']} src={cover} alt={`${title} cover`} />}
      <Form onSubmit={onSubmit} onInput={() => setError(null)}>
        {title && (
        <h2 className={styles.title}>
          {title}
        </h2>
        )}
        {cover && <img className={styles['cover--column']} src={cover} alt={`${title} cover`} />}
        <div className="d-flex justify-content-between flex-wrap">
          <div>
            <p className="m-0">
              Durată:
              {' '}
              <strong>
                {duration}
              </strong>
            </p>
            {eventDates.length === 1 && (
            <p className="m-0">
              Dată:
              {' '}
              <strong>
                <time dateTime={format(eventDates[0].timestamp, 'yyyy-MM-dd')}>{eventDates[0].label}</time>
              </strong>
            </p>
            )}

          </div>
          <div>
            <p className="m-0">
              Preț:
              {' '}
              <span className="text-blue text-bold">
                Gratuit
              </span>
            </p>
            <p className="m-0">
              Locație:
              {' '}
              <span className="text-blue text-bold">
                {location}
              </span>
            </p>
          </div>
        </div>
        <p className="my-5">{description}</p>
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

        <FormGroup>
          <label>
            <span className="label text-bold mb-2">
              Număr de telefon
            </span>
            <span className="text-xs text-grey d-flex align-items-center">
              Te vom contacta cu o zi înainte de eveniment a confirma participarea
            </span>
            <input type="tel" name="tel" required />
          </label>
        </FormGroup>

        {eventDates.length > 1 && (
        <ReactSelect
          isSearchable
          placeholder="Alege data si ora la care vrei sa participi"
          className={styles.select}
          options={eventDates}
          name="timestamp"
        />
        )}

        {error && (
        <p className="text-red text-bold">
          {error}
        </p>
        )}
        <footer className="d-flex my-5 justify-content-between flex-wrap">
          <button
            type="submit"
            disabled={isLoading}
            className={`btn btn--blue ${isLoading ? 'btn--loading' : ''}`}
          >
            Înscrie-te
          </button>
          <ShareButton
            variant="light"
            url={urlToShare}
            config={{
              copy: true,
              facebook: true,
              whatsapp: true,
              linkedin: true,
            }}
          />
        </footer>
        {url && (
        <div className="text-right my-5">
          <Link href={url}>
            <a>
              Află mai multe
            </a>
          </Link>
        </div>
        )}
      </Form>
    </div>
  );
}

export default EventCard;
