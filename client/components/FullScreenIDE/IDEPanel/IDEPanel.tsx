import { HTMLAttributes, PropsWithChildren } from 'react';
import styles from './IDEPanel.module.scss';

interface Props {
  vertical?: boolean;
  className?: string;
}

const IDEPanel = ({ vertical = false, className = '', children }: PropsWithChildren<Props>) => {
  return (
    <div className={`
      d-flex
      ${className}
      ${styles.IDEPanel}
      ${vertical === true ? styles.vertical : ''}
    `}
    >
      {children}
    </div>
  );
};

IDEPanel.Button = ({ children, className = '', ...rest }: PropsWithChildren<HTMLAttributes<HTMLButtonElement>>) => (
  <button
    {...rest}
    type="button"
    className={`${styles.Button} ${className ?? ''} btn--transparent`}
  >
    {children}
  </button>
);

export default IDEPanel;
