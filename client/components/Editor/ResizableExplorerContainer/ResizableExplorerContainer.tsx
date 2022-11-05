import React, { PropsWithChildren } from 'react';
import HResizable from '../HResizable/HResizable';

import styles from './ResizableExplorerContainer.module.scss';

const ResizableExplorerContainer = ({
  initialWidth,
  containerRef,
  onResize,
  children,
}: PropsWithChildren<{
  initialWidth: number;
  containerRef: React.RefObject<HTMLDivElement>;
  onResize: ({ dx }: { dx: number }) => void
}>) => (
  <div
    ref={containerRef}
    className={`relative ${styles.ResizableExplorerContainer}`}
    style={{ width: `${initialWidth}px` }}
  >
    {children}
    <HResizable
      className={styles.HResizable}
      onResize={onResize}
    />
  </div>
);

export default ResizableExplorerContainer;