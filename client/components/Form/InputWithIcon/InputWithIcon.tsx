import React, { PropsWithChildren } from 'react';
import styles from './InputWithIcon.module.scss';

type Props = PropsWithChildren<React.InputHTMLAttributes<HTMLInputElement>>

const InputWithIcon = React.forwardRef((
  {
    children,
    ...rest
  }: Props,
  ref: React.RefObject<HTMLInputElement>,
) => {
  return (
    <div className={`${styles['input-with-icon']} relative`}>
      <input ref={ref} {...rest} />
      <span className="absolute">
        {children}
      </span>
    </div>
  );
});

export default InputWithIcon;
