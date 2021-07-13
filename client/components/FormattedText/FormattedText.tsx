import React from 'react';
import styles from './FormattedText.module.scss';

type FormattedTextProps = {
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLOrSVGElement>;

const FormattedText = ({
  as: Wrapper = 'div',
  children,
  ...props
}: FormattedTextProps) => {
  return (
    <Wrapper {...props} className={styles.formatted}>
      {children}
    </Wrapper>
  );
};

export default FormattedText;
