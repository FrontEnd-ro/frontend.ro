import React, { FormHTMLAttributes, PropsWithChildren } from 'react';
import noop from 'lodash/noop';

import styles from './Form.module.scss';

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  onSubmit: (data: any) => void;

  withStyles?: boolean;
  className?: string;
  autoComplete?: string;
}

export default function Form({
  onSubmit,
  withStyles = true,
  onInput = noop,
  className = '',
  autoComplete = 'on',
  children,
  ...rest
}: PropsWithChildren<Props>) {
  const submit = (e) => {
    e.persist();
    e.preventDefault();

    if (e.target.checkValidity()) {
      let data = {};
      let elements = [];

      try {
        elements = [...e.target.elements];
      } catch (err) {
        // MSEdge fix
        for (let i = 0; i < e.target.elements.length; i += 1) {
          elements.push(e.target.elements[i]);
        }
      }

      elements
        .filter((el) => el.name)
        .forEach((el) => {
          if (el.hasOwnProperty('checked')) {
            if (el.type === 'checkbox') {
              data[el.name] = el.checked;
            }
            if (el.type === 'radio' && el.checked) {
              data[el.name] = el.value;
            }
          } else {
            data[el.name] = el.value;
          }
        });

      onSubmit(data);
    }
  };

  return (
    <form
      className={withStyles ? `${styles.form} ${className}` : className}
      spellCheck="false"
      onSubmit={submit}
      autoCorrect="off"
      autoComplete={autoComplete}
      {...rest}
    >
      {children}
    </form>
  );
}
