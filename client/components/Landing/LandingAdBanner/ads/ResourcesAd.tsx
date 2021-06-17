import React from 'react';
import Link from 'next/link';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ResourcesAd({ href, didVisit }: { href: string, didVisit: () => void }) {
  return (
    <>
      <FontAwesomeIcon className="mr-2" icon={faLightbulb} width={24} height={24} />
      <p className="mr-2">
        Am creat o nouă pagină cu cele mai bune resurse de FrontEnd
        pe care le știm!
      </p>
      <Link href={href}>
        <a onClick={didVisit}>
          Vrei să o vezi?
        </a>
      </Link>
    </>
  );
}

export default ResourcesAd;
