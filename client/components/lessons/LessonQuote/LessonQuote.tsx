import React from 'react';
import styles from './LessonQuote.module.scss';

type Props = {
  variant?: 'default' | 'centered';
} & React.HTMLAttributes<HTMLElement>;

const LessonQuote = React.forwardRef<
  HTMLElement,
  Props
>(({
  variant = 'default', children, className = '', ...rest
}: Props) => (
  <blockquote
    {...rest}
    className={`
      ${className}
      ${styles['lesson-quote']}
      ${variant === 'centered' ? styles['lesson-quote--centered'] : ''}
    `}
  >
    {children}
  </blockquote>
));

export default LessonQuote;
