import React from 'react';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactSelect from 'react-select';
import { LESSONS } from '~/services/Constants';

import styles from './LessonSelect.module.scss';

interface LessonOption {
  value: {
    chapter: string;
    id: string;
  },
  label: string;
}

interface Props {
  selectedId?: string,
  onChange: (value: LessonOption) => void
}

function LessonSelect({ selectedId, onChange } : Props) {
  const chapterLessonPairs = LESSONS
    .filter((lesson) => lesson.written)
    .map((lesson) => ({
      value: {
        chapter: lesson.type,
        // FIXME
        id: lesson.url.split('/').pop(),
      },
      label: `${lesson.type}/${lesson.title}`,
    }));

  const defaultValue = chapterLessonPairs.find((pair) => pair.label === selectedId);

  return (
    <div className={styles['lesson-select']}>
      <p>
        <FontAwesomeIcon width="16" height="16" icon={faInfoCircle} />
        Dacă vrei să sugerezi acest exercițiu pentru una din lecțiile existente,
        alege de mai jos:
      </p>
      <ReactSelect
        isSearchable
        placeholder=""
        onChange={onChange}
        className={styles.select}
        defaultValue={defaultValue}
        options={chapterLessonPairs}
      />
    </div>
  );
}

export default LessonSelect;
