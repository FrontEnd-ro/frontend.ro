import React from 'react';
import { UrlObject } from 'url';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import Link from '~/components/generic/Link';

import List from '../List';
import { timeAgo } from '~/services/Utils';
import RoutingUtils from '~/services/utils/Routing.utils';
import { API_SubmissionVersionI } from '~/../shared/types/submission.types';

import styles from './ExerciseVersionHistory.module.scss';

interface ExerciseVersionHistoryProps {
  versions: API_SubmissionVersionI[];
  hrefBuilder: (v: API_SubmissionVersionI) => UrlObject;
}

const ExerciseVersionHistory = ({ versions, hrefBuilder }: ExerciseVersionHistoryProps) => {
  const router = useRouter();

  if (!versions.length) {
    return null;
  }

  return (
    <details className="pb-5">
      <summary className="text-xl cursor-pointer">
        Istoricul exercițiului
      </summary>
      <nav>
        <List>
          {versions.map((v, index) => (
            <li className="my-5" key={v._id}>
              <ExerciseVersion
                version={v}
                href={hrefBuilder(v)}
                index={versions.length - index}
                isActive={RoutingUtils.isRouteActive(router, hrefBuilder(v))}
              />
            </li>
          ))}
        </List>
      </nav>
    </details>
  );
};

interface ExerciseVersionProps {
  index: number;
  href: string | UrlObject;
  version: API_SubmissionVersionI;
  isActive: boolean;
  className?: string;
}

const ExerciseVersion = ({
  index,
  href,
  version,
  isActive,
  className = '',
}: ExerciseVersionProps) => {
  const dateTime = format(new Date(version.createdAt).getTime(), 'yyyy-MM-dd');

  return (
    <Link
      replace
      href={href}
      passHref
      prefetch={false}
      className={`
      ${className}
      ${styles.ExerciseVersion} 
      ${isActive ? styles['ExerciseVersion--active'] : ''}
      d-flex no-underline
      `}
    >
      <div className={`${styles.index} d-flex p-3 align-items-center text-2xl`}>
        {index}
      </div>
      <div className="p-3">
        <p className="text-bold m-0 d-flex align-items-center">
          {version.approved ? (
            <>
              <span className="mr-2"> Soluție corectă </span>
              <FontAwesomeIcon width="16" icon={faCheck} />
            </>
          ) : (
            <>
              <span className="mr-2"> Soluție respinsă </span>
              <FontAwesomeIcon width="16" icon={faTimes} />
            </>
          )}
        </p>
        <time title={dateTime} className="d-block mt-4 mb-2" dateTime={dateTime}>
          <FontAwesomeIcon width="16" className="text-silver" icon={faCalendarAlt} />
          {' '}
          {timeAgo(new Date(version.createdAt))}
        </time>
      </div>
    </Link>
  );
};

export default ExerciseVersionHistory;
export { ExerciseVersion };
