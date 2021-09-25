import React from 'react';
import styles from './SkeletonScreens.module.scss';

interface Props {
  text: string;
  className?: string;
}

const SkeletonWord = ({ text, className = '' }: Props) => {
  return (
    <span className={`${styles.word} ${className}`}>
      <span>
        {text}
      </span>
    </span>
  );
};

export default SkeletonWord;
