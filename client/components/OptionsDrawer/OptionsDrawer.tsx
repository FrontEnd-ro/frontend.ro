import React, {
  useRef,
  useState,
  ReactNode,
  PropsWithChildren,
} from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import List from '../List';
import { useOutsideClick } from '~/services/Hooks';
import Button, { Variant as ButtonVariant } from '../Button';

import styles from './OptionsDrawer.module.scss';

interface Props {
  trigger: {
    text: string;
    icon?: IconProp
  }
  className?: string;
  variant?: ButtonVariant;
  direction?: 'up' | 'down',
}

const OptionsDrawer = ({
  children, trigger, className = '', direction = 'down', variant = 'blue',
}: PropsWithChildren<Props>) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useOutsideClick(ref, () => setIsOpen(false));

  const toggle = () => { setIsOpen(!isOpen); };

  return (
    <div
      ref={ref}
      className={`
        relative
        ${className}
        ${styles['options-drawer']}
        ${styles[`options-drawer--${direction}`]}
        ${isOpen ? styles['options-drawer--open'] : ''}
      `}
    >
      <Button className="w-100" variant={variant} onClick={toggle}>
        {trigger.icon && (
          <FontAwesomeIcon icon={trigger.icon} height="24" className="mr-2" />
        )}
        {trigger.text}
      </Button>
      <List className={`${styles.list} w-100 d-flex absolute text-center`}>
        {children}
      </List>
    </div>
  );
};

OptionsDrawer.Element = ({ children }: { children: ReactNode }) => {
  return (
    <li className={`${styles.Element} w-100 bg-white`}>
      {children}
    </li>
  );
};

export default OptionsDrawer;
