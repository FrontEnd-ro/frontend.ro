import React from 'react';
import { ExerciseType } from '~/../shared/types/exercise.types';
import { Checkbox } from '~/components/Form';

import styles from './ChapterControls.module.scss';

function ChapterControls({ form, defaultValue }: {form?: string, defaultValue?: ExerciseType}) {
  defaultValue = defaultValue || ExerciseType.HTML;

  return (
    <div className={`${styles['chapter-controls']} d-flex`}>
      <Checkbox
        form={form}
        className="d-block"
        type="radio"
        name="type"
        value={ExerciseType.HTML}
        defaultChecked={defaultValue === ExerciseType.HTML}
      >
        HTML
      </Checkbox>
      <Checkbox
        form={form}
        className="d-block"
        type="radio"
        name="type"
        value={ExerciseType.CSS}
        defaultChecked={defaultValue === ExerciseType.CSS}
      >
        CSS
      </Checkbox>
      <Checkbox
        form={form}
        className="d-block"
        type="radio"
        name="type"
        value={ExerciseType.JS}
        defaultChecked={defaultValue === ExerciseType.JS}
      >
        JS
      </Checkbox>
    </div>
  );
}

export default ChapterControls;
