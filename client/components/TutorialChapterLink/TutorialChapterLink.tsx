import React from 'react';
import Link from 'next/link';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProgressDonut } from '~/components/progress';
import TableOfContents, { Chapter } from '~/components/TableOfContents';

import styles from './TutorialChapterLink.module.scss';

interface Props {
  href: string;
  title: string;
  // A number between [0, 100]
  completePercentage: number;

  // Optional
  active?: boolean;
  className?: string;
  chapters?: Chapter[];
  showChapters?: boolean;
}

const TutorialChapterLink = ({
  href,
  title,
  completePercentage,
  chapters = [],
  showChapters = false,
  active = false,
  className = '',
}: Props) => {
  return (
    <div className={`
      ${styles.TutorialChapterLink}
      ${showChapters ? styles['show-chapters'] : ''}
      ${className}
      relative
      overflow-hidden
      rounded-md
    `}
    >
      <Link href={href}>
        <a className={`
          ${styles.link}
          ${active === true ? styles.active : ''}
          d-flex
          align-items-center
          no-underline
        `}
        >
          {(completePercentage > 0) && (
            <ProgressIndicator completePercentage={completePercentage} />
          )}
          <span className={styles.title}>
            {title}
          </span>
        </a>
      </Link>
      {showChapters && (
        <div className={styles.chapters}>
          <TableOfContents chapters={chapters} />
        </div>
      )}
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

export default TutorialChapterLink;
