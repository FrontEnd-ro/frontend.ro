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
      <a className={`
        ${styles['resource-preview']} 
        w-100 no-underline d-inline-block relative
      `}
      >
        <div
          className={`${styles.cover} text-black d-flex align-items-center justify-content-center`}
          style={{
            backgroundImage: `url(${cover})`,
          }}
        />
        <div className={styles.container}>
          <h3 className="text-center">
            {title}
          </h3>
        </div>
      </a>
    </Link>
  );
}

export default ResourcePreview;
