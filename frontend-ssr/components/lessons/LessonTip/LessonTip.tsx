import React, { PropsWithChildren } from 'react';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import styles from './LessonTip.module.scss';

interface Props {
  icon?: IconProp
}

export default function LessonTip({ icon, children } : PropsWithChildren<Props>) {
  return (
    <p className={`${styles['lesson-tip']} d-flex align-items-center`}>
      {
        // Using icon={icon || faLightbulb} throws the following
        // TypeScript error: Expression produces a union type that is too complex to represent.
        icon
          ? <FontAwesomeIcon icon={icon} />
          : <FontAwesomeIcon icon={faLightbulb} />
      }
      <span>
        {children}
      </span>
    </p>
  );
}
