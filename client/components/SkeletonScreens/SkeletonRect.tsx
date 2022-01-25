import React from 'react';
import styles from './SkeletonScreens.module.scss';

interface Props {
  width?: string;
  height?: string
  className?: string;
  withAnimation?: boolean;
}

const SkeletonRect = ({ width, height, withAnimation = true, className = '' }: Props) => {
  const style: React.CSSProperties = {};
  if (width !== undefined) {
    style.width = width;
  }

  if (height !== undefined) {
    style.height = height;
  }

  return (
    <div
      style={style}
      className={`
        ${styles.rect}
        ${withAnimation ? styles['with-animation'] : ''}
        ${className}
      `}
    />
  );
};

export default SkeletonRect;
