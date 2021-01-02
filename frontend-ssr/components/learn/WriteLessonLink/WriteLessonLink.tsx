import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import styles from './WriteLessonLink.module.scss';

function WriteLessonLink() {
  return (
    <Link href="/intro/how-to-help">
      <a className={`${styles['write-lesson-link']} d-flex justify-content-center align-items-center no-underline`}>
        <FontAwesomeIcon icon={faPlus} width="32" height="32" />
        <p>Contribuie și tu cu o lecție</p>
      </a>
    </Link>
  );
}

export default WriteLessonLink;
