import React, { PropsWithChildren } from 'react';
import noop from 'lodash/noop';

import styles from './Form.module.scss';

interface Props {
  onSubmit: (data: any) => void;

  className?: string;
  autoComplete?: string;
  onInput?: (target?: EventTarget) => void;
}

export default function Form({
  onSubmit,
  onInput = noop,
  className = '',
  autoComplete = 'on',
  children,
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
            data[el.name] = el.checked;
          } else {
            data[el.name] = el.value;
          }
        });

      onSubmit(data);
    }
  };

  return (
    <form
      className={`${styles.form} ${className}`}
      spellCheck="false"
      onSubmit={submit}
      onInput={(e) => onInput(e.target)}
      autoCorrect="off"
      autoComplete={autoComplete}
    >
      {children}
    </form>
  );
}
