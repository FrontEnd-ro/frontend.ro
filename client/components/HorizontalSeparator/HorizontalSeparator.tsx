import React from 'react';
import styles from './HorizontalSeparator.module.scss';

interface Props {
  text?: string;
  className?: string;
}

const HorizontalSeparator = ({ text, className = '' }: Props) => {
  if (!text) {
    return (<hr className={className} />);
  }

  return (
    <div className={`
      ${styles['horizontal-separator']} 
      ${className}
      relative
      text-center
    `}
    >
      <span className="relative">
        {text}
      </span>
    </div>
  );
};

export default HorizontalSeparator;
