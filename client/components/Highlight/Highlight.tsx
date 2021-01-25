import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef } from 'react';
import { useClipboard } from '~/services/Hooks';
import styles from './Highlight.module.scss';

type Language = 'html' | 'css' | 'json' | 'javascript';

interface Props {
  code: string,
  language: Language,
  className?: string;
}

export default function Highlight({ language, code, className }: Props) {
  const [preRef, btnRef] = [useRef(null), useRef(null)];

  useEffect(() => {
    import('~/services/highlight').then((module) => {
      const highlight = module.default;
      highlight.highlightBlock(preRef.current);
    });
  }, []);

  useClipboard(btnRef);

  return (
    <div className={`${styles.highlight} ${className}`}>
      <pre ref={preRef} className={language}>
        <code>
          {code}
        </code>
      </pre>
      <button type="button" className="btn--transparent" data-clipboard-text={code} ref={btnRef}>
        <FontAwesomeIcon className="text-silver" icon={faCopy} width="32" />
        <span className="d-block"> Copy </span>
      </button>
    </div>
  );
}
