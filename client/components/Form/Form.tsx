import React, { FormHTMLAttributes, PropsWithChildren } from 'react';
import noop from 'lodash/noop';

import styles from './Form.module.scss';

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  onSubmit: (data: any) => void | Promise<boolean>;

  withStyles?: boolean;
  className?: string;
  autoComplete?: string;
}

const Form = React.forwardRef(({
  onSubmit,
  withStyles = true,
  onInput = noop,
  className = '',
  autoComplete = 'on',
  children,
  ...rest
}: PropsWithChildren<Props>, forwardRef: React.RefObject<HTMLFormElement>) => {
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
          if (el.tagName === 'INPUT' && el.type === 'file') {
            data[el.name] = el.files;
          } else if (el.hasOwnProperty('checked')) {
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

      let submitResult = onSubmit(data);
      if (submitResult instanceof Promise) {
        submitResult.then((shouldReset) => {
          if (shouldReset) {
            e.target.reset();
          }
        });
      }
    }
  };

  return (
    <form
      className={withStyles ? `${styles.form} ${className}` : className}
      spellCheck="false"
      onSubmit={submit}
      onInput={onInput}
      autoComplete={autoComplete}
      {...rest}
      ref={forwardRef}
    >
      {children}
    </form>
  );
});
// export default function Form({
//   onSubmit,
//   withStyles = true,
//   onInput = noop,
//   className = '',
//   autoComplete = 'on',
//   children,
//   ...rest
// }: PropsWithChildren<Props>) {
//   const submit = (e) => {
//     e.persist();
//     e.preventDefault();

//     if (e.target.checkValidity()) {
//       let data = {};
//       let elements = [];

//       try {
//         elements = [...e.target.elements];
//       } catch (err) {
//         // MSEdge fix
//         for (let i = 0; i < e.target.elements.length; i += 1) {
//           elements.push(e.target.elements[i]);
//         }
//       }

//       elements
//         .filter((el) => el.name)
//         .forEach((el) => {
//           if (el.hasOwnProperty('checked')) {
//             if (el.type === 'checkbox') {
//               data[el.name] = el.checked;
//             }
//             if (el.type === 'radio' && el.checked) {
//               data[el.name] = el.value;
//             }
//           } else {
//             data[el.name] = el.value;
//           }
//         });

//       let submitResult = onSubmit(data);
//       if (submitResult instanceof Promise) {
//         submitResult.then((shouldReset) => {
//           if (shouldReset) {
//             e.target.reset();
//           }
//         });
//       }
//     }
//   };

//   return (
//     <form
//       className={withStyles ? `${styles.form} ${className}` : className}
//       spellCheck="false"
//       onSubmit={submit}
//       onInput={onInput}
//       autoCorrect="off"
//       autoComplete={autoComplete}
//       {...rest}
//     >
//       {children}
//     </form>
//   );
// }

Form.displayName = 'Form';

export default Form;
