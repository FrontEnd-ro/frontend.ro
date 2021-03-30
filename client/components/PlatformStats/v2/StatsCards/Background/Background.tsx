import React, { PropsWithChildren } from 'react';
import styles from './Background.module.scss';

interface Props {
  background: 'image' | 'linear-gradient' | 'image & linear-gradient';
  position?: 'top' | 'left' | 'bottom' | 'right' | 'center';
  size?: 'contain' | 'cover';
  src?: string;
  direction?: 'to left' | 'to right' | 'to top left' | 'to top right';
  colorGradient1?: string;
  colorGradient2?: string;
  className?: string;
}

function Background({
  background = 'image',
  position = 'top',
  size = 'cover',
  src,
  direction = 'to right',
  colorGradient1 = '',
  colorGradient2 = '',
  className,
  children,
}: PropsWithChildren<Props>) {
  let style = { background: '' };
  if (background === 'image & linear-gradient') {
    style.background = `url(${src}) no-repeat ${position}/${size}, #${colorGradient1} linear-gradient(${direction}, #${colorGradient1}, #${colorGradient2})`;
  } else if (background === 'image') {
    style.background = `url(${src}) no-repeat ${position}/${size}`;
  } else {
    style.background = `#${colorGradient1} linear-gradient(${direction}, #${colorGradient1}, #${colorGradient2})`;
  }
  return (
    <div className={`${className}  ${styles['background-wrapper']}`} style={style}>
      {children}
    </div>
  );
}

export default Background;
