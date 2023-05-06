import React from 'react';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactSelect from 'react-select';
import { getLessons } from '~/curriculum/Curriculum';
import { useTranslation } from '~/services/typesafeNextTranslate';

import styles from './LessonSelect.module.scss';

interface Props {
  selectedId?: string,
  onChange: (value: string | null) => void
}

function LessonSelect({ selectedId, onChange } : Props) {
  const { lang } = useTranslation('common');
  const chapterLessonPairs = getLessons(lang)
    .filter((lesson) => lesson.written)
    .map((lesson) => ({
      value: {
        chapter: lesson.type,
        id: lesson.id,
      },
      label: `${lesson.type}/${lesson.title}`,
    }));

  const defaultValue = chapterLessonPairs.find((pair) => pair.value.id === selectedId);

  return (
    <div className={styles['lesson-select']}>
      <p>
        <FontAwesomeIcon width="16" height="16" icon={faInfoCircle} />
        Dacă vrei să sugerezi acest exercițiu pentru una din lecțiile existente,
        alege de mai jos:
      </p>
      <ReactSelect
        isSearchable
        isClearable
        placeholder=""
        isMulti={false}
        onChange={(pair) => {
          if (pair === null) {
            onChange(null);
          } else {
            onChange(pair.value.id)
          }
        }}
        className={styles.select}
        defaultValue={defaultValue}
        options={chapterLessonPairs}
      />
    </div>
  );
}

export default LessonSelect;
