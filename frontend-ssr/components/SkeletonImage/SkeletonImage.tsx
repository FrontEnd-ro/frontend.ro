import React from 'react';
import styles from './SkeletonImage.module.scss';

interface Props {
  width: string,
  height: string,
}

const SkeletonImage = ({ width, height } : Props) => (
  <div
    style={{ width, height }}
    className={`${styles.skeleton__image} bg-grey overflow-hidden`}
  />
);

export default SkeletonImage;
