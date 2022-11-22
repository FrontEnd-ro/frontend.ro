import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

import styles from './Markdown.module.scss';

interface Props {
  markdownString: string;
  // TODO: refactor these. The component should have
  // no styles of it's own
  variant?: 'default' | 'transparent' | 'none';
  className?: string;
}

function Markdown({ markdownString, className = '', variant = 'default' }: Props) {
  const markdownRef = useRef(null);

  // Whether or not we successfully lazy-loaded
  // the modules needed for this component (this happens)
  // in the `useEfffect` below
  const [didLoadModules, setDidLoadModules] = useState(undefined);

  useEffect(() => {
    Promise.all([
      import('marked'),
      import('dompurify'),
    ]).then(([markedModule, dompurifyModule]) => {
      const { marked } = markedModule;
      const dompurify = dompurifyModule.default;

      setDidLoadModules(true);
      markdownRef.current.innerHTML = dompurify.sanitize(marked.parse(markdownString));
    }).catch((err) => {
      setDidLoadModules(false);
      console.error('[Markdown.useEffect]', err);
    });
  }, [markdownString]);

  return (
    <div
      className={`
      ${styles.markdown}
      ${styles[variant]}
      ${className}
    `}
      ref={markdownRef}
    >
      {didLoadModules === false && (
        <p className="font-light text-2xl">
          <FontAwesomeIcon
            size="2x"
            width="32"
            className="mr-2"
            icon={faExclamationTriangle}
          />
          Nu am putut încărca conținutul de tip Markdown. Încearcă
          să re-încarci pagina.
        </p>
      )}
    </div>
  );
}

export default Markdown;
