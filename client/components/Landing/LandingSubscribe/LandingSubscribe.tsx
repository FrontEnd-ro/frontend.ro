import React from 'react';
import SubscribeForm from '~/components/SubscribeForm';
import styles from './LandingSubscribe.module.scss';

export default function LandingSubscribe() {
  return (
    <div id="subscribe" className={`${styles['landing-subscribe']} bg-white text-center`}>
      <section>
        <h2>Rămâi conectat la noutăți</h2>
        <p>
          Dacă nu te-am convins încă să începi un tutorial,
          dar ai vrea să te ținem la curent
          cu noutățile (no spam, promitem) -
          lasă-ți email-ul aici și hai în comunitate.
        </p>
        <SubscribeForm />
      </section>
    </div>
  );
}
