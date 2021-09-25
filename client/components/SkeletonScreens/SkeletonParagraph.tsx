import React from 'react';
import SkeletonWord from './SkeletonWord';
import styles from './SkeletonScreens.module.scss';

interface Props {
  text: string;
  className?: string;
}

const SkeletonParagraph = ({ text, className = '' }: Props) => {
  return (
    <p className={`${styles.paragraph} ${className}`}>
      {text.split(' ').map((word, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <SkeletonWord key={index} text={word} />
      ))}
    </p>
  );
};

export default SkeletonParagraph;
