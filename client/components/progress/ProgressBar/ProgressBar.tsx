import React from 'react';
import { ProgressItemI } from '../types';

import styles from './ProgressBar.module.scss';

interface Props {
  count: number;
  items: ProgressItemI[];
  className?: string;
  direction?: Direction;
}

type Direction = 'horizontal' | 'vertical';

const ProgressBar = ({
  direction = 'horizontal', count, items, className = '',
}: Props) => {
  const totalItemsCount = items.reduce((acc, cur) => cur.count + acc, 0);

  return (
    <div
      // A11y: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_progressbar_role„
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={(totalItemsCount / count) * 100}
      className={`
        ${className}
        ${styles.ProgressBar}
        ${styles[`ProgressBar-${direction}`]}
        ${totalItemsCount === count ? styles['ProgressBar-full'] : ''}
      `}
    >
      {items.map((item, index) => (
        <ProgressItem
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          color={item.color}
          direction={direction}
          percentage={(item.count * 100) / count}
        />
      ))}
    </div>
  );
};

const ProgressItem = ({
  direction,
  color,
  percentage,
}: { direction: Direction, color: string, percentage: number }) => {
  const style = direction === 'horizontal' ? {
    background: color,
    width: `${percentage}%`,
  } : {
    background: color,
    height: `${percentage}%`,
  };

  return (
    <div className={styles.ProgressItem} style={style} />
  );
};

export default ProgressBar;
