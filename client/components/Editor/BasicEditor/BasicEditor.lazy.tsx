import React, { useEffect, useState } from 'react';
import loadMonaco from '../loadMonaco';
import EditorPlaceholder from '../EditorPlaceholder/EditorPlaceholder';

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
    return <EditorPlaceholder />;
  }

  return (
    <BasicEditor
      ref={forwardRef}
        // FIXME
        // https://github.com/FrontEnd-ro/frontend.ro/issues/111
      key={folderStructure}
      folderStructure={folderStructure || {}}
      {...rest}
    />
  );
});

export default BasicEditorLazy;
