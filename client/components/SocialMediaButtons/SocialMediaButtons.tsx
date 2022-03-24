import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import Button, { Variant as ButtonVariant } from '~/components/Button';
import { copyToClipboard } from '~/services/Utils';

export function FacebookButton({ url }: { url: string }) {
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

export function TwitterButton({ url, hashtags = 'FrontEndRo' }: { url: string, hashtags?: string }) {
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

export function WhatsAppButton({ url }: { url: string }) {
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

export function LinkedInButton({ url }: { url: string }) {
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

export function CopyLinkButton({ text, variant = 'blue' }: { text: string, variant?: ButtonVariant }) {
  return (
    <Button onClick={() => copyToClipboard(text)} variant={variant} className="btn--with-icon">
      <FontAwesomeIcon icon={faLink} height="24" className="mr-2" />
      Copy link
    </Button>
  );
}
