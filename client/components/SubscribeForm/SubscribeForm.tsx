import React, { useState } from 'react';
import UserService from '~/services/api/User.service';
import Button from '~/components/Button';
import styles from './SubscribeForm.module.scss';
import { Trans, useTranslation } from '~/services/typesafeNextTranslate';

function SubscribeForm({ className = '' }: { className?: string }) {
  const { t } = useTranslation('common');
  const [didSubscribe, setDidSubscribe] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [error, setError] = useState(null);

  const ROBOT_STRING = 'frontend';

  const submit = (e) => {
    e.preventDefault();
    e.persist();

    const formEl = e.target;

    if (!formEl.checkValidity()) {
      return;
    }

    if (formEl['robot-check'].value !== ROBOT_STRING) {
      setError(t('SubscribeForm.confirmationError'));
      return;
    }

    setError(null);
    setIsSubscribing(true);

    let body = {
      name: formEl.name.value,
      email: formEl.email.value,
    };

    /** Subscribing in a different database until we set ours up */
    UserService.subscribe(body)
      .then(() => {
        setDidSubscribe(true);
      })
      .catch((err) => {
        setIsSubscribing(false);
        setError(err.message || t('SubscribeForm.genericError'));
      });
  };

  return (
    <form onSubmit={submit} className={`${styles.SubscribeForm} ${className}`}>
      <label className="d-block mb-4">
        <span className="m-0 d-block">{t('SubscribeForm.What\'s your name?')}</span>
        <input className="w-100" disabled={isSubscribing} type="text" name="name" required />
      </label>
      <label className="d-block mb-4">
        <span className="m-0 d-block">Email</span>
        <input className="w-100" disabled={isSubscribing} type="email" name="email" required />
      </label>
      <label className="d-block mb-4">
        <span className="mb-2 d-block">
          <Trans i18nKey='common:SubscribeForm.confirmation' components={[
            <br key='0'/>,
            <strong key='1'/>,
          ]} values={{ ROBOT_STRING }} />
        </span>
        <input className="w-100" disabled={isSubscribing} type="text" name="robot-check" required />
      </label>
      {error && (
        <p>
          {' '}
          ❌
          {error}
        </p>
      )}
      {didSubscribe
        ? <p> ✔ Bine ai venit în comunitate!</p>
        : (
          <Button
            variant="default"
            type="submit"
            loading={isSubscribing}
            className="w-100"
          >
            {t('Subscribe')}!
          </Button>
        )}

    </form>
  );
}

export default SubscribeForm;
