import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef } from 'react';
import { HLJSApi } from 'highlight.js';
import { noop } from 'lodash';
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
  const preRef = useRef<HTMLPreElement>(null);

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

    // After each highlight the <code> element is deleted
    // and replaced with styled <span> elements. We have to
    // re-create it.
    const codeEl = document.createElement('code');

    // Using `document.createTextNode` to correctly escape HTML code
    codeEl.appendChild(document.createTextNode(code));
    preRef.current.innerHTML = null;
    preRef.current.appendChild(codeEl);

    highlightCode();
  }, [code]);

  const highlightCode = () => {
    if (!preRef.current) {
      console.warn('Highlight.highlightCode: expected `preRef.current` to be populated.');
      return;
    }

    highlightModule.current.highlightElement(preRef.current);
    onHighlight();
  };

  return (
    <div className={`${styles.highlight} ${styles[variant]} ${className}`}>
      <pre
        ref={preRef}
        className={`
          ${language}
          ${textWrap === 'wrap' ? styles['pre--wrap'] : ''}
        `}
      >
        <code>
          {code}
        </code>
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
