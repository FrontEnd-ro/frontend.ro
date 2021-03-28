import React, { HTMLAttributes, PropsWithChildren } from 'react';

interface Props {
  loading?: boolean;
  variant?:
    | 'light'
    | 'blue'
    | 'success'
    | 'danger'
    | 'transparent'
    | 'yellow'
    | 'grey'
    | 'bouncy'
    | 'with--icon'
    | 'outline';
  // We define here the form property because
  // even if it's a valid attribute on buttons, React or TS complain about it.
  form?: string;
}
export type Ref = HTMLButtonElement;
const Button = React.forwardRef<
  Ref,
  PropsWithChildren<Props> & React.ButtonHTMLAttributes<HTMLButtonElement>
>(
  (
    {
      children,
      loading = false,
      className,
      disabled,
      variant = 'transparent',
      ...props
    }: PropsWithChildren<Props> & React.ButtonHTMLAttributes<HTMLButtonElement>,
    forwardRef,
  ) => {
    let updatedClassName = className || '';
    if (loading) {
      updatedClassName += ' btn--loading';
    }

    return (
      <button
        // eslint-disable-next-line react/button-has-type
        type={props.type || 'button'}
        className={`btn ${
          variant === `${variant}` ? `btn--${variant}` : 'btn--transparent'
        } ${updatedClassName}`}
        disabled={loading || disabled}
        ref={forwardRef}
        {...props}
      >
        {children}
      </button>
    );
  },
);
export default Button;
