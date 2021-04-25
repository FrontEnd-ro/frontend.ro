import React, { ReactNode, useEffect, useState } from 'react';
import { includeScript, removeScript } from '~/services/Utils';

import styles from './CodePenEmbed.module.scss';

interface Props {
  user: string;
  slug: string;
  defaultTab: 'html' | 'css' | 'js';
  editable?: boolean;
  theme?: 'dark' | 'light';
  useClickToLoad?: boolean;
  className?: string;
}

type Variant = 'default' | 'iframe';

const CodePenEmbed = ({ variant, ...rest }: Props & { variant?: Variant }) => {
  if (variant === 'default') {
    return <HTMLEmbed {...rest} />;
  }

  return <IframeEmbed {...rest} />;
};

const HTMLEmbed = ({
  user,
  slug,
  defaultTab,
  editable = true,
  useClickToLoad = false,
  theme = 'light',
  className = '',
}: Props) => {
  const url = `https://codepen.io/${user}/pen/${slug}`;
  const [loaded, setLoaded] = useState<boolean>(undefined);

  useEffect(() => {
    const embedScript = 'https://cpwebassets.codepen.io/assets/embed/ei.js';

    includeScript(embedScript)
      .then(() => setLoaded(true))
      .catch(() => setLoaded(false));

    return () => removeScript(embedScript);
  }, []);

  return (
    <div className={`
      ${className}
      ${styles['codepen-embed']}
      ${loaded === true && styles['codepen-embed--loaded']}`}
    >
      {loaded === undefined && (
        <Centered>
          <p className="text-2xl font-light"> Se încarcă... </p>
        </Centered>
      )}
      {loaded === false && (
        <Centered>
          <p className="text-red text-bold text-2xl font-light">
            Oops... Nu am putut încărca codul.
          </p>
          <p className="text-2xl font-light">
            Dar, îl poți vedea direct în
            {' '}
            <a target="_blank" href={url} rel="noreferrer">
              CodePen
            </a>
          </p>
        </Centered>
      )}
      <p
        className="codepen"
        data-user={user}
        data-theme-id={theme}
        data-slug-hash={slug}
        data-editable={editable}
        data-preview={useClickToLoad}
        data-default-tab={`${defaultTab},result`}
      />
    </div>
  );
};

const IframeEmbed = ({
  user,
  slug,
  defaultTab,
  editable = true,
  useClickToLoad = false,
  theme = 'light',
  className = '',
}: Props) => {
  let iframeSrc = `https://codepen.io/${user}/embed/${useClickToLoad ? 'preview/' : ''}${slug}?default-tab=${defaultTab}%2Cresult&theme-id=${theme}`;

  if (editable) {
    iframeSrc += '&editable=true';
  }

  return (
    <iframe
      loading="lazy"
      src={iframeSrc}
      allowFullScreen
      className={`
        ${className}
        ${styles['codepen-embed']}
      `}
      title="CodePen Embed"
    />
  );
};

const Centered = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`absolute ${styles.centered}`}>
      {children}
    </div>
  );
};

export default CodePenEmbed;
