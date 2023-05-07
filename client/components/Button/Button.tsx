import React, { HTMLAttributes, PropsWithChildren } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type Variant = 'light' | 'blue' | 'success' | 'danger' | 'transparent' |
  'yellow' | 'grey' | 'link' | 'gradient' | 'default';

type Props = {
  loading?: boolean;
  // We define here the form property because
  // even if it's a valid attribute on buttons, React or TS complain about it.
  form?: string;
  icon?: IconProp;
  outline?: boolean;
  bouncy?: boolean;
} & ({
  variant: "gradient";
  gradient: {
    angle: number;
    colors: string[];
  }
} | {
  variant?: Omit<Variant, 'gradient'>;
  gradient?: undefined;
});

export type Ref = HTMLButtonElement;
const Button = React.forwardRef<
  Ref,
  PropsWithChildren<Props> & React.ButtonHTMLAttributes<HTMLButtonElement>
>(
  (
    {
      icon,
      children,
      loading = false,
      className,
      disabled,
      variant = 'transparent',
      outline = false,
      bouncy = false,
      gradient,
      style = {},
      ...props
    }: PropsWithChildren<Props> & React.ButtonHTMLAttributes<HTMLButtonElement>,
    forwardRef,
  ) => {
    if (variant === 'gradient' && (gradient === undefined || gradient.colors === undefined || gradient.colors.length === 0)) {
      console.error('<Button> with `gradient` variant expected to have an array of `gradient.colors`. Defaulting to primary.');
      variant = 'blue';
    }

    let updatedClassName = className || '';

    if (loading) {
      updatedClassName += ' btn--loading';
    }
    if (icon !== undefined) {
      updatedClassName += ' btn--with-icon';
    }
    if (outline) {
      updatedClassName += ' btn--outline';
    }
    if (bouncy) {
      updatedClassName += ' btn--bouncy';
    }

    const inlineCssStyles = {
      ...style
    }
    if (variant == 'gradient' && gradient !== undefined) {
      inlineCssStyles.backgroundImage = `linear-gradient(${gradient.angle ?? 90}deg, ${gradient.colors.map((color, index, arr) => `${color} ${index * 100 / arr.length}%`).join(',')})`;
    }

    return (
      <button
        // eslint-disable-next-line react/button-has-type
        type={props.type || 'button'}
        className={`
          btn 
          ${variant === `${variant}` ? `btn--${variant}` : 'btn--transparent'} 
          ${updatedClassName}
        `}
        disabled={loading || disabled}
        ref={forwardRef}
        style={inlineCssStyles}
        {...props}
      >
        {icon !== undefined && (
          <FontAwesomeIcon icon={icon} height="24" className="mr-2" />
        )}
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
