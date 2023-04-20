import React from 'react';
import SubscribeForm from '~/components/SubscribeForm';
import SVGArrow from '~/components/SVGArrow/SVGArrow';
import { useTranslation } from '~/services/typesafeNextTranslate';

import styles from './LandingSubscribe.module.scss';

export default function LandingSubscribe({ className = '' }: { className?: string }) {
  const { t } = useTranslation('common');
  return (
    <div id="subscribe" className={`${styles.LandingSubscribe} ${className} relative`}>
      <section>
        <div className="relative">
          <h2 className="mb-0"> {t('LandingSubscribe.title')} </h2>
          <p className="text-xl mt-4">
            {t('LandingSubscribe.description')}
          </p>
          <SVGArrow className={`${styles.SVGArrow} absolute`} />
        </div>
        <SubscribeForm className={styles.SubscribeForm} />
      </section>
    </div>
  );
}
