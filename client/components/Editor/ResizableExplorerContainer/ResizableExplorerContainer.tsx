import React, { PropsWithChildren } from 'react';
import HResizable from '../HResizable/HResizable';

import styles from './ResizableExplorerContainer.module.scss';

const ResizableExplorerContainer = ({
  initialWidth,
  containerRef,
  onResize,
  children,
  classNameHResizable = '',
}: PropsWithChildren<{
  initialWidth: string;
  containerRef: React.RefObject<HTMLDivElement>;
  onResize: ({ dx }: { dx: number }) => void;
  classNameHResizable?: string;
}>) => (
  <div
    ref={containerRef}
    className={`relative ${styles.ResizableExplorerContainer}`}
    style={{ width: initialWidth }}
  >
    {children}
    <HResizable
      onResize={onResize}
      className={`${styles.HResizable} ${classNameHResizable}`}
    />
  </div>
);

export default ResizableExplorerContainer;
