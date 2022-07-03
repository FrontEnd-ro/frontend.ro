import React, { ReactNode } from 'react';
import SubscribeForm from './SubscribeForm';

import styles from './SubscribeForm.module.scss';

function SubscribeFormWithText(
  { children, className = '' }: { children: ReactNode, className?: string },
) {
  return (
    <div className={`${styles.SubscribeFormWithText} ${className} d-flex justify-content-between`}>
      <div>
        {children}
      </div>
      <SubscribeForm className="my-5" />
    </div>
  );
}

export default SubscribeFormWithText;
