import React, { useState } from 'react';
import UserService from '~/services/User.service';
import Button from '~/components/Button';
import styles from './SubscribeForm.module.scss';

function SubscribeForm() {
  const [didSubscribe, setDidSubscribe] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [error, setError] = useState(null);

  const ROBOT_STRING = 'frontend.ro';

  const submit = (e) => {
    e.preventDefault();
    e.persist();

    const formEl = e.target;

    if (!formEl.checkValidity()) {
      return;
    }

    if (formEl['robot-check'].value !== ROBOT_STRING) {
      setError('Hmm...ești robot cumva? 🤔');
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
        setError(err.message || 'Oups, ceva a mers greșit. Dă-mi un semn ca să pot rezolva problema :)');
      });
  };

  return (
    <form onSubmit={submit} className={`${styles.form} my-5 text-center`}>
      <label>
        <span className="m-0">Cum să-ți spunem?</span>
        <input disabled={isSubscribing} type="text" name="name" required />
      </label>
      <label>
        <span className="m-0">Email</span>
        <input disabled={isSubscribing} type="email" name="email" required />
      </label>
      <label>
        <span className="mb-2">
          Ca să ne asigurăm că nu ești robot,
          {' '}
          <br />
          {' '}
          scrie mai jos
          {' '}
          <strong>{ROBOT_STRING}</strong>
        </span>
        <input disabled={isSubscribing} type="text" name="robot-check" required />
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
            variant="light"
            type="submit"
            loading={isSubscribing}
            className="w-100"
          >
            Abonează-te!
          </Button>
        )}

    </form>
  );
}

export default SubscribeForm;
