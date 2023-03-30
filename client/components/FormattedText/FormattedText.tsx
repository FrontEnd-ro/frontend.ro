import React from 'react';
import styles from './FormattedText.module.scss';

type FormattedTextProps = {
  as?: 'span' | 'strong';
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

const FormattedText = ({
  as: Wrapper = 'span',
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
