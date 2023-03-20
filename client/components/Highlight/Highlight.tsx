import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef } from 'react';
import { HLJSApi } from 'highlight.js';
import { noop, escape } from 'lodash';
import { copyToClipboard } from '~/services/Utils';
import Button from '~/components/Button';

import styles from './Highlight.module.scss';

export type Language = 'html' | 'css' | 'json' | 'javascript';

interface Props {
  code: string,
  language: Language,
  className?: string;
  withCopy?: boolean;
  variant?: 'default' | 'minimalist';
  textWrap?: 'wrap' | 'scroll';
  onHighlight?: () => void;
}

export default function Highlight({
  language, code, withCopy = true, className, onHighlight = noop, variant = 'default', textWrap = 'scroll',
}: Props) {
  const highlightModule = useRef<HLJSApi>(null);
  const codeRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    import('~/services/highlight').then((module) => {
      highlightModule.current = module.default;
      highlightCode();
    });
  }, []);

  useEffect(() => {
    if (!highlightModule.current) {
      // This should only happen once, until the above
      // `useEffect` finishes to load the Highlight library.
      return;
    }

    highlightCode();
  }, [code, language]);

  const highlightCode = () => {
    if (!codeRef.current) {
      console.warn('Highlight.highlightCode: expected `codeRef.current` to be populated.');
      return;
    }

    highlightModule.current.highlightElement(codeRef.current);
    onHighlight();
  };

  return (
    <div className={`${styles.highlight} ${styles[variant]} ${className}`}>
      <pre className={textWrap === 'wrap' ? styles['pre--wrap'] : ''}>
        <code
          ref={codeRef}
          className={`
          ${language}
        `}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: escape(code) }}
        />
      </pre>
      {withCopy && <CopyButton code={code} />}
    </div>
  );
}

const CopyButton = ({ code }: { code: string }) => {
  return (
    <Button onClick={() => copyToClipboard(code)}>
      <FontAwesomeIcon className="text-silver" icon={faCopy} width={20} />
      <span className="d-block"> Copy </span>
    </Button>
  );
};
