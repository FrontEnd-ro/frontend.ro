import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faExclamationTriangle, faHourglass } from '@fortawesome/free-solid-svg-icons';
import Link from '~/components/generic/Link';
import { ProgressDonut } from '~/components/progress';

import styles from './ProgressLink.module.scss';

interface Props {
  href: string;
  title: string;
  // A number between [0, 100]
  completePercentage: number;

  // Optional
  active?: boolean;
  className?: string;
  htmlTitle?: string;
  variant?: 'default' | 'waiting' | 'error';
}

const ProgressLink = ({
  href,
  title,
  completePercentage,
  active = false,
  className = '',
  variant = 'default',
  htmlTitle,
}: Props) => {
  return (
    <div
      className={`
        ${styles.ProgressLink}
        ${styles[variant]}
        ${active ? styles.active : ''}
        ${className}
        relative
        overflow-hidden
        rounded-md
      `}
      title={htmlTitle}
    >
      <Link href={href} className="d-flex align-items-center no-underline">
        {variant === 'default' && completePercentage > 0 && (
          <ProgressIndicator completePercentage={completePercentage} />
        )}
        {variant === 'waiting' && (
          <WaitingIndicator />
        )}
        {variant === 'error' && (
          <ErrorIndicator />
        )}
        <span className={styles.title}>
          {title}
        </span>
      </Link>
    </div>
  );
};

const ProgressIndicator = ({
  completePercentage,
}: {
  completePercentage: number
}) => {
  const donutItems = (completePercentage < 100)
    ? [{
      count: completePercentage,
      color: 'var(--green)',
    }, {
      count: 100 - completePercentage,
      color: 'var(--silver)',
    }]
    : [{ count: 100, color: 'var(--green) ' }];

  return (
    <div className={`${styles['progress-wrapper']} relative`}>
      <ProgressDonut
        size="2em"
        count={100}
        strokeWidth={3}
        items={donutItems}
      />
      {completePercentage === 100 && (
        <FontAwesomeIcon
          width={14}
          icon={faCheck}
          className={`absolute text-green ${styles['check-icon']}`}
        />
      )}
    </div>
  );
};

const WaitingIndicator = () => (
  <div className={`${styles['progress-wrapper']} relative`}>
    <ProgressDonut
      size="2em"
      count={100}
      strokeWidth={3}
      items={[{ color: 'var(--orange)', count: 100 }]}
    />
    <FontAwesomeIcon
      width={14}
      icon={faHourglass}
      className={`absolute text-orange ${styles['check-icon']}`}
    />
  </div>
);

const ErrorIndicator = () => (
  <div className={`${styles['progress-wrapper']} relative`}>
    <ProgressDonut
      size="2em"
      count={100}
      strokeWidth={3}
      items={[{ color: 'var(--red)', count: 100 }]}
    />
    <FontAwesomeIcon
      width={14}
      icon={faExclamationTriangle}
      className={`absolute text-red ${styles['check-icon']}`}
    />
  </div>
);

export default ProgressLink;
