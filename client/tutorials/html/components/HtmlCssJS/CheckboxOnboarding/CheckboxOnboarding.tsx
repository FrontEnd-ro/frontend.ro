import React from 'react';
import styles from './CheckboxOnboarding.module.scss';
import { useTranslation } from '~/services/typesafeNextTranslate';

const CheckboxOnboarding = ({ className = '' }: { className?: string }) => {
  const { t } = useTranslation('common');
  return (
    <p className={`${styles.CheckboxOnboarding} ${className}`}>
      {t('CheckboxOnboarding.description')}
    </p>
  );
};

export default CheckboxOnboarding;
