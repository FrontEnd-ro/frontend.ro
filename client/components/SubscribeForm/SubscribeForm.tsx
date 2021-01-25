import React, { useState } from 'react';
import styles from './SubscribeForm.module.scss';

function SubscribeForm() {
  const [didSubscribe, setDidSubscribe] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [error, setError] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    e.persist();

    const formEl = e.target;

    if (!formEl.checkValidity()) {
      return;
    }

    setError(null);
    setIsSubscribing(true);

    let body = {
      name: formEl.name.value,
      email: formEl.email.value,
    };

    /** Subscribing in a different database until we set ours up */
    fetch('https://steallikeadev.com/api/subscribe-frontend', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: new Headers({
        'Content-type': 'application/json',
      }),
    })
      .then((resp) => {
        if (!resp.ok) {
          return resp.json().then((jsonResp) => {
            throw jsonResp;
          });
        }

        return resp.json();
      })
      .then(() => setDidSubscribe(true))
      .catch((err) => {
        setIsSubscribing(false);
        setError(err.reason || 'Oups, ceva a mers greșit. Dă-mi un semn ca să pot rezolva problema :)');
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
          <button
            type="submit"
            disabled={isSubscribing}
            className={`btn btn--light w-100${isSubscribing ? ' btn--loading' : ''}`}
          >
            Abonează-te!
          </button>
        )}

    </form>
  );
}

export default SubscribeForm;
