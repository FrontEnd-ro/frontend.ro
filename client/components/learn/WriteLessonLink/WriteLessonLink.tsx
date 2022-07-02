import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Link from '~/components/generic/Link';

import styles from './WriteLessonLink.module.scss';

function WriteLessonLink() {
  return (
    <Link href="/intro/despre-noi#cum-pot-sa-ajut" className={`${styles['write-lesson-link']} d-flex justify-content-center align-items-center no-underline`}>
      <FontAwesomeIcon icon={faPlus} width="32" height="32" />
      <p>Contribuie și tu cu o lecție</p>
    </Link>
  );
}

export default WriteLessonLink;
