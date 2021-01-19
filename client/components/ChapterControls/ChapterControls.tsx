import React from 'react';
import { Checkbox } from '~/components/Form';
import { ChapterType } from '~/redux/exercise-submissions/types';

import styles from './ChapterControls.module.scss';

function ChapterControls({ form }: {form?: string}) {
  return (
    <div className={`${styles['chapter-controls']} d-flex`}>
      <Checkbox
        form={form}
        className="d-block"
        type="radio"
        name="type"
        defaultChecked
        value={ChapterType.HTML}
      >
        HTML
      </Checkbox>
      <Checkbox
        form={form}
        className="d-block"
        type="radio"
        name="type"
        value={ChapterType.CSS}
      >
        CSS
      </Checkbox>
      <Checkbox
        form={form}
        className="d-block"
        type="radio"
        name="type"
        value={ChapterType.JS}
      >
        JS
      </Checkbox>
    </div>
  );
}

export default ChapterControls;
