import React from 'react';
import styles from './SkeletonScreens.module.scss';

interface Props {
  width: string;
  height: string
  className?: string;
}

const SkeletonRect = ({ width, height, className = '' }: Props) => {
  return (
    <div
      style={{
        width,
        height,
      }}
      className={`${styles.rect} ${className}`}
    />
  );
};

export default SkeletonRect;
