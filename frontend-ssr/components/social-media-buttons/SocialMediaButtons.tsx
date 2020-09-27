import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';

import styles from './SocialMediaButtons.module.scss';
import { useOutsideClick } from '~/services/Hooks';
import CopyToClipboard from '../copy-to-clipboard/CopyToClipboard';

export function ShareButton({ url, config } : {url: string, config: any}) {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useOutsideClick(ref, () => setIsOpen(false));

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={ref} className={`${styles['share-wrapper']} ${isOpen ? styles['share-wrapper--open'] : ''}`}>
      <button className="btn btn--blue" type="button" onClick={toggle}>
        <FontAwesomeIcon icon={faShare} height="24" className="mr-2" />
        Share
      </button>
      <ul>
        {config.copy && (
        <li>
          <CopyToClipboard onCopy={toggle} className="btn btn--light btn--with-icon" text={url} />
        </li>
        )}
        {config.facebook && (
        <li>
          <FacebookButton url={url} />
        </li>
        )}
        {config.twitter && (
        <li>
          <TwitterButton url={url} />
        </li>
        )}
        {config.linkedin && (
          <li>
            <LinkedInButton url={url} />
          </li>
        )}
        {config.whatsapp && (
        <li>
          <WhatsAppButton url={url} />
        </li>
        )}
      </ul>
    </div>

  );
}

export function FacebookButton({ url }: {url: string}) {
  const share = useSocialShare('Facebook');

  return (
    <a
      onClick={share}
      target="_blank"
      rel="noreferrer"
      href={`https://www.facebook.com/sharer/sharer.php?u=${url}%2F&amp;src=sdkpreparse`}
      className="btn btn--light no-underline btn--with-icon"
    >
      <FontAwesomeIcon icon={faFacebook} height="24" className="mr-2" />
      Share on Facebook
    </a>
  );
}

export function TwitterButton({ url, hashtags = 'FrontEndRo' } : {url: string, hashtags?: string}) {
  const share = useSocialShare('Twitter');

  return (
    <a
      target="_blank"
      rel="noreferrer"
      onClick={share}
      href={`https://twitter.com/intent/tweet?hashtags=${hashtags}&url=${url}`}
      className="btn btn--light no-underline btn--with-icon"
    >
      <FontAwesomeIcon icon={faTwitter} height="24" className="mr-2" />
      Share on Twitter
    </a>
  );
}

export function WhatsAppButton({ url } : {url: string}) {
  const share = useSocialShare('WhatsApp');

  return (
    <a
      target="_blank"
      rel="noreferrer"
      onClick={share}
      href={`https://wa.me/?text=${encodeURI(url)}`}
      className="btn btn--light no-underline btn--with-icon"

    >
      <FontAwesomeIcon icon={faWhatsapp} height="24" className="mr-2" />
      Send via WhatsApp
    </a>
  );
}

export function LinkedInButton({ url } : {url: string}) {
  const share = useSocialShare('LinkedIn');

  return (
    <a
      target="_blank"
      rel="noreferrer"
      onClick={share}
      href={`http://www.linkedin.com/shareArticle?mini=true&url=${encodeURI(url)}`}
      className="btn btn--light no-underline btn--with-icon"

    >
      <FontAwesomeIcon icon={faLinkedin} height="24" className="mr-2" />
      Share on LinkedIn
    </a>
  );
}

function useSocialShare(providerName: string) {
  return (e) => {
    e.preventDefault();

    window.open(e.target.href, `${providerName} Share`, 'width=500,height=500');
  };
}
