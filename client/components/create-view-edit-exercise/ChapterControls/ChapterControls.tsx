import React from 'react';
import { Checkbox } from '~/components/Form';
import { ChapterType } from '~/redux/exercise-submissions/types';

import styles from './ChapterControls.module.scss';

function ChapterControls({ form, defaultValue }: {form?: string, defaultValue?: ChapterType}) {
  defaultValue = defaultValue || ChapterType.HTML;

  return (
    <div className={`${styles['chapter-controls']} d-flex`}>
      <Checkbox
        form={form}
        className="d-block"
        type="radio"
        name="type"
        value={ChapterType.HTML}
        defaultChecked={defaultValue === ChapterType.HTML}
      >
        HTML
      </Checkbox>
      <Checkbox
        form={form}
        className="d-block"
        type="radio"
        name="type"
        value={ChapterType.CSS}
        defaultChecked={defaultValue === ChapterType.CSS}
      >
        CSS
      </Checkbox>
      <Checkbox
        form={form}
        className="d-block"
        type="radio"
        name="type"
        value={ChapterType.JS}
        defaultChecked={defaultValue === ChapterType.JS}
      >
        JS
      </Checkbox>
    </div>
  );
}

export default ChapterControls;
