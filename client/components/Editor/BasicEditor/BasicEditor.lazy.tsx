import React, { useEffect, useState } from 'react';
import loadMonaco from '../loadMonaco';

import styles from '../Editor.module.scss';

const BasicEditorLazy = React.forwardRef(({ folderStructure, ...rest }: any, forwardRef) => {
  const [BasicEditor, setBasicEditor] = useState(null);

  useEffect(() => {
    loadMonaco()
      .then(() => import('./BasicEditor'))
      .then((module) => {
        setBasicEditor(() => module.default as any);
      });
  }, []);

  if (!BasicEditor) {
    return <Placeholder />;
  }

  return (
    <BasicEditor
      ref={forwardRef}
      folderStructure={folderStructure || {}}
      {...rest}
    />
  );
});

function Placeholder() {
  return (
    <div className={`
      ${styles['editor-wrapper']} 
      ${styles['editor-wrapper--loading']}
    `}
    >
      <p>Loading editor...</p>
    </div>
  );
}

export default BasicEditorLazy;
