import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, PropsWithChildren, useRef } from 'react';
import { useOutsideClick } from '~/services/Hooks';

import styles from './AsideMenu.module.scss';

interface Props {
  title: string;
  isOpen: boolean;
  close: () => void;
  className?: string;
  hideScrollOnBody?: boolean;
}

function AsideMenu({
  title,
  isOpen,
  close,
  children,
  className = '',
  hideScrollOnBody = false,
}: PropsWithChildren<Props>) {
  const ref = useRef(null);
  useOutsideClick(ref, close);

  useEffect(() => {
    if (!hideScrollOnBody) {
      return;
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }
  }, [isOpen]);

  return (
    <aside ref={ref} className={`${styles['aside-menu']}${isOpen ? ` ${styles['aside-menu--open']}` : ''} ${className} bg-black text-white`}>
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
