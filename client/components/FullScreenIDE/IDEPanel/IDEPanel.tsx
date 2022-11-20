import { HTMLAttributes, PropsWithChildren } from 'react';
import styles from './IDEPanel.module.scss';

interface Props {
  vertical?: boolean;
  className?: string;
}

const IDEPanel = ({ vertical = false, className = '', children }: PropsWithChildren<Props>) => {
  return (
    <div className={`
      ${className}
      ${styles.IDEPanel}
      ${vertical === true ? styles.vertical : ''}
    `}
    >
      {children}
    </div>
  );
};

IDEPanel.Button = ({
  children,
  className = '',
  active = false,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLButtonElement>> & { active?: boolean; }) => (
  <button
    {...rest}
    type="button"
    className={`
      ${styles.Button}
      ${className ?? ''}
      ${active === true ? styles.active : ''} btn--transparent
    `}
  >
    {children}
  </button>
);

export default IDEPanel;
