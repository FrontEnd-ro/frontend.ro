import Link from 'next/link';
import React from 'react';
import { ResourceDescription } from '../resources-model';

import styles from './ResourcePreview.module.scss';

function ResourcePreview({
  title,
  url,
  cover,
}: ResourceDescription) {
  return (
    <Link href={url}>
      <a
        target="_blank"
        rel="noreferrer"
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
      </a>
    </Link>
  );
}

export default ResourcePreview;
