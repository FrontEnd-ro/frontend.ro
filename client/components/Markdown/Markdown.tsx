import React, { useEffect, useRef } from 'react';
import styles from './Markdown.module.scss';

interface Props {
  markdownString: string;
  variant?: 'none' | 'transparent';
  className?: string;
}

function Markdown({ markdownString, className = '', variant = 'none' }: Props) {
  const markdownRef = useRef(null);

  useEffect(() => {
    import('marked').then((module) => {
      const marked = module.default;

      marked.setOptions({
        sanitize: true,
      });

      markdownRef.current.innerHTML = marked(markdownString);
    });
  }, [markdownString]);

  return (
    <div className={`${styles.markdown} ${variant === 'transparent' && styles['is--transparent']} ${className}`} ref={markdownRef} />
  );
}

export default Markdown;
