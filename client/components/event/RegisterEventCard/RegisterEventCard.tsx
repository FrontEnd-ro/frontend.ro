import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { format } from 'date-fns';
import ReactSelect from 'react-select';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { RootState } from '~/redux/root.reducer';

import Link from '~/components/generic/Link';
import EventService from '~/services/api/Event.service';
import Form, { FormGroup } from '~/components/Form';
import SweetAlertService from '~/services/sweet-alert/SweetAlert.service';
import WaitlistConfirmation from '../WaitListConfirmation/WaitListConfirmation';
import Button from '~/components/Button';
import OptionsDrawer from '~/components/OptionsDrawer/OptionsDrawer';
import {
  CopyLinkButton, FacebookButton, LinkedInButton, WhatsAppButton,
} from '~/components/SocialMediaButtons';

import styles from './RegisterEventCard.module.scss';

export interface EventDate {
  parts: {
    label: string;
    timestamp: number;
  }[]
}

interface Props {
  id: string;
  duration: string;
  location: string;
  eventDates: EventDate[];
  title?: string;
  description?: string;
  url?: string;
  cover?: string;
  className?: string;
}

function RegisterEventCard({
  userInfo,
  id,
  title,
  cover,
  url,
  duration,
  description,
  location,
  eventDates,
  className,
}: ConnectedProps<typeof connector> & Props) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [urlToShare, setUrlToShare] = useState(url);

  const isPastEvent = eventDates.every(({ parts }) => {
    return parts[0].timestamp < Date.now();
  });

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
      formData.timestamp = formData.timestamp || eventDates[0].parts[0].timestamp;
    }

    try {
      const seatsInfo = await EventService.getSeatsInfo(id);

      if (seatsInfo.free > 0) {
        await EventService.register(id, formData);

        SweetAlertService.toast({
          type: 'success',
          text: 'Felicitări! Vei primi un email cu mai multe informații!',
        });
      } else {
        SweetAlertService.content(
          () => <WaitlistConfirmation id={id} userData={formData} />,
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
                {eventDates[0].parts.map((p, index) => (
                  <React.Fragment key={p.timestamp}>
                    <strong>
                      <time dateTime={format(p.timestamp, 'yyyy-MM-dd')}>{p.label}</time>
                    </strong>
                    {index < eventDates[0].parts.length - 1 && <>{' și '}</>}
                  </React.Fragment>
                ))}
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
        {!isPastEvent && (
          <>
            <FormGroup className="mb-4">
              <label>
                <span className="label text-bold mb-2">
                  Nume si prenume
                </span>
                {userInfo && <input type="text" name="name" defaultValue={userInfo.name} required />}

              </label>
            </FormGroup>

            <FormGroup className="mb-4">
              <label>
                <span className="label text-bold mb-2">
                  Adresa de email
                </span>
                {userInfo && <input type="email" defaultValue={userInfo.email} name="email" required />}

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
          </>
        )}

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
        {!isPastEvent && (
          <footer className="d-flex my-5 justify-content-between flex-wrap">
            <Button type="submit" variant="blue" loading={isLoading}>
              Înscrie-te
            </Button>
            <OptionsDrawer variant="light" trigger={{ text: 'Share', icon: faShare }}>
              <OptionsDrawer.Element>
                <CopyLinkButton text={urlToShare} />
              </OptionsDrawer.Element>
              <OptionsDrawer.Element>
                <FacebookButton url={urlToShare} />
              </OptionsDrawer.Element>
              <OptionsDrawer.Element>
                <LinkedInButton url={urlToShare} />
              </OptionsDrawer.Element>
              <OptionsDrawer.Element>
                <WhatsAppButton url={urlToShare} />
              </OptionsDrawer.Element>
            </OptionsDrawer>
          </footer>

        )}
        {url && (
          <div className="text-right my-5">
            <Link href={url}>
              Află mai multe
            </Link>
          </div>
        )}
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

export default connector(RegisterEventCard);
