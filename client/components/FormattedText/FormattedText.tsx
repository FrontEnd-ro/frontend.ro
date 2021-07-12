import React from 'react';
import styles from './FormattedText.module.scss';

type FormattedTextProps = {
  as?: React.ComponentType | keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
} & React.AllHTMLAttributes<HTMLOrSVGElement>;

const FormattedText: React.FC<FormattedTextProps> = ({
  as: Wrapper = 'div',
  children,
  ...props
}) => {
  return (
    <Wrapper {...props} className={styles.formatted}>
      {children}
    </Wrapper>
  );
};

export default FormattedText;
