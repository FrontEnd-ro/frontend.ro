import React from 'react';
import styles from './SkeletonScreens.module.scss';

interface Props {
  text: string;
  className?: string;
  withAnimation?: boolean;
}

const SkeletonWord = ({ text, withAnimation = true, className = '' }: Props) => {
  return (
    <span className={`
      ${styles.word}
      ${withAnimation ? styles['with-animation'] : ''}
      ${className}`}
    >
      <span>
        {text}
      </span>
    </span>
  );
};

export default SkeletonWord;
