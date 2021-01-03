import React, { PropsWithChildren } from 'react';
import styles from './SideBySide.module.scss';

interface Props {
  direction?: 'row' | 'column',
}

const SideBySide = ({ direction, children } : PropsWithChildren<Props>) => (
  <div
    className={`${styles['side-by-side']} ${direction === 'column' && styles['side-by-side--column']} d-flex justify-content-between my-5`}
  >
    {children}
  </div>
);

export default SideBySide;
