import React, { useRef } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TableOfContents, { Chapters } from '~/components/TableOfContents';
import { useOutsideClick } from '~/services/Hooks';

import styles from './LessonMenu.module.scss';

interface Props {
  isOpen: boolean,
  close: () => void,
  title: string,
  chapters: Chapters[]
}

export default function LessonMenu({
  isOpen,
  close,
  chapters,
  title,
} : Props) {
  const ref = useRef(null);
  useOutsideClick(ref, close);

  return (
    <aside ref={ref} className={`${styles['lesson-menu']}${isOpen ? ` ${styles['lesson-menu--open']}` : ''} bg-black text-white`}>
      <header className="lesson-menu__header d-flex justify-content-between align-items-center">
        <h2>
          {title}
        </h2>
        <button type="button" onClick={close} className="btn--transparent text-white">
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </header>
      <TableOfContents chapters={chapters} />
    </aside>
  );
}
