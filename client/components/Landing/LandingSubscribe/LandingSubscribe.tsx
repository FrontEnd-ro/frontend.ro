import React from 'react';
import SubscribeForm from '~/components/SubscribeForm';
import SVGArrow from '~/components/SVGArrow/SVGArrow';

import styles from './LandingSubscribe.module.scss';

export default function LandingSubscribe({ className = '' }: { className?: string }) {
  return (
    <div id="subscribe" className={`${styles.LandingSubscribe} ${className} relative`}>
      <section>
        <div className="relative">
          <h2 className="mb-0"> Rămâi conectat la noutăți </h2>
          <p className="text-xl mt-4">
            Dacă nu te-am convins încă să începi un tutorial,
            dar ai vrea să te ținem la curent
            cu noutățile (no spam, promitem) -
            lasă-ți email-ul aici și hai în comunitate.
          </p>
          <SVGArrow className={`${styles.SVGArrow} absolute`} />
        </div>
        <SubscribeForm className={styles.SubscribeForm} />
      </section>
    </div>
  );
}
