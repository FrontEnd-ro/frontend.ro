import React, { PropsWithChildren } from 'react';
import styles from './List.module.scss';

interface Props {
  variant?: 'none' | 'bullets' | 'checkmark' | 'count';
  as?: 'ul' | 'ol';
  className?: string;
}

const List = React.forwardRef<
  HTMLUListElement | HTMLOListElement,
  PropsWithChildren<Props> &
    React.OlHTMLAttributes<HTMLOListElement | HTMLUListElement>
>(
  (
    {
      variant = 'none',
      as = 'ul',
      className = '',
      children,
      ...props
    }: PropsWithChildren<Props> &
      React.HTMLAttributes<HTMLUListElement | HTMLOListElement>,
    forwardRef,
  ) => {
    if (as === 'ul') {
      return (
        <ul ref={forwardRef} className={`${styles[variant]} ${className}`} {...props}>
          {children}
        </ul>
      );
    }
    return (
      <ol
        ref={forwardRef as React.ForwardedRef<HTMLOListElement>}
        className={`${styles[variant]} ${className}`}
        {...props}
      >
        {children}
      </ol>
    );
  },
);

export default List;
