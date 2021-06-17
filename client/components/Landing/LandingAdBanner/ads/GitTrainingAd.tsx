import React from 'react';
import Link from 'next/link';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function GitTrainingAd({ href, didVisit }: { href: string, didVisit: () => void }) {
  return (
    <>
      <FontAwesomeIcon className="mr-2" icon={faBell} width={24} height={24} />
      <p className="mr-2">
        În weekend organizăm din nou trainingul despre Git & GitHub.
      </p>
      <Link href={href}>
        <a onClick={didVisit}>
          Vrei să participi?
        </a>
      </Link>
    </>
  );
}

export default GitTrainingAd;
