import React, { ReactNode } from 'react';
import SubscribeForm from './SubscribeForm';

import styles from './SubscribeForm.module.scss';

function SubscribeFormWithText(
  { children, className = '' }: { children: ReactNode, className?: string },
) {
  return (
    <div className={`${styles['subscribe-form--with-text']} ${className} d-flex justify-content-between`}>
      <div>
        {children}
      </div>
      <SubscribeForm />
    </div>
  );
}

export default SubscribeFormWithText;
