import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { PropsWithChildren, useRef } from 'react';
import { useOutsideClick } from '~/services/Hooks';

import styles from './AsideMenu.module.scss';

interface Props {
  title: string;
  isOpen: boolean;
  close: () => void;
}

function AsideMenu({
  title,
  isOpen,
  close,
  children,
}: PropsWithChildren<Props>) {
  const ref = useRef(null);
  useOutsideClick(ref, close);

  return (
    <aside ref={ref} className={`${styles['aside-menu']}${isOpen ? ` ${styles['aside-menu--open']}` : ''} bg-black text-white`}>
      <header className="aside-menu__header d-flex justify-content-between align-items-center">
        <h2>
          {title}
        </h2>
        {isOpen && (
        <button type="button" onClick={close} className="btn--transparent text-white">
          <FontAwesomeIcon icon={faTimes} />
        </button>
        )}
      </header>
      {children}
    </aside>
  );
}

export default AsideMenu;
