import React from 'react';
import SubscribeForm from '~/components/SubscribeForm';

import styles from './LandingSubscribe.module.scss';

export default function LandingSubscribe() {
  return (
    <div id="subscribe" className={`${styles.LandingSubscribe} my-5`}>
      <section>
        <h2 className="text-center"> Rămâi conectat la noutăți </h2>
        <p>
          Dacă nu te-am convins încă să începi un tutorial,
          dar ai vrea să te ținem la curent
          cu noutățile (no spam, promitem) -
          lasă-ți email-ul aici și hai în comunitate.
        </p>
        <SubscribeForm className={styles.SubscribeForm} />
      </section>
    </div>
  );
}
