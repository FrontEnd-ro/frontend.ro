import React, { useRef } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TableOfContents, { Chapter } from '~/components/TableOfContents';
import { useOutsideClick } from '~/services/Hooks';
import Button from '~/components/Button';
import Link from '~/components/generic/Link';

import styles from './LessonMenu.module.scss';

interface Props {
  isOpen: boolean,
  close: () => void,
  title: string,
  chapters: Chapter[],
  url: string,
  onScrollTop: () => void,
  className?: string,
}

export default function
LessonMenu({
  isOpen,
  close,
  chapters,
  title,
  url,
  onScrollTop,
  className = '',
} : Props) {
  const ref = useRef(null);
  useOutsideClick(ref, close);

  return (
    <aside ref={ref} className={`${styles['lesson-menu']}${isOpen ? ` ${styles['lesson-menu--open']}` : ''} ${className} bg-black text-white`}>
      <header className="lesson-menu__header d-flex justify-content-between align-items-center">
        <Link onClick={onScrollTop} href={url}>
          <h2>
            {title}
          </h2>
        </Link>
        <Button onClick={close}>
          <FontAwesomeIcon icon={faTimes} />
        </Button>
      </header>
      <TableOfContents onChapterClick={close} chapters={chapters} />
    </aside>
  );
}
