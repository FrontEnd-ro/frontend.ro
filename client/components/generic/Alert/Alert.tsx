import { PropsWithChildren } from 'react';
import {
  faCheck,
  faInfo,
  faTimes,
  faWarning,
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Alert.module.scss';

interface Props {
  severity: 'error' | 'warning' | 'info' | 'success';
  withIcon?: boolean;
  className?: string;
}

const Alert = ({
  severity,
  children,
  withIcon = true,
  className = '',
} : PropsWithChildren<Props>) => {
  const iconMap: Record<Props['severity'], IconDefinition> = {
    error: faTimes,
    warning: faWarning,
    info: faInfo,
    success: faCheck,
  };
  return (
    <div className={`d-flex ${styles.Alert} ${styles[severity]} ${className}`}>
      {withIcon && (
        <FontAwesomeIcon className={styles.icon} icon={iconMap[severity]} />
      )}
      <div>
        {children}
      </div>
    </div>
  );
};

export default Alert;
