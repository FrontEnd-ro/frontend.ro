import React from 'react';
import Link from '~/components/generic/Link';
import { ResourceDescription } from '../resources-model';

import styles from './ResourcePreview.module.scss';

function ResourcePreview({
  title,
  url,
  cover,
}: ResourceDescription) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noreferrer"
      prefetch={false}
      className={`
      ${styles['resource-preview']} 
      w-100 h-100 d-flex flex-column no-underline
    `}
    >
      <div
        className={`${styles.cover} text-black d-flex align-items-center justify-content-center`}
        style={{
          backgroundImage: `url(${cover})`,
        }}
      />
      <div className="flex-1 d-flex align-items-center justify-content-center">
        <h3 className="text-center">
          {title}
        </h3>
      </div>
    </Link>
  );
}

export default ResourcePreview;
