import React, { useEffect, useState } from 'react';
import loadMonaco from '../loadMonaco';
import { ExerciseFolder } from '~/services/utils/FolderStructure';
import EditorPlaceholder from '../EditorPlaceholder/EditorPlaceholder';

const DiffEditorLazy = React.forwardRef((
  {
    originalFolderStructure,
    modifiedFolderStructure,
  }: {
    originalFolderStructure: Pick<ExerciseFolder, 'files' | 'folders'>,
    modifiedFolderStructure: Pick<ExerciseFolder, 'files' | 'folders'>,
  }, forwardRef,
) => {
  const [DiffEditor, setDiffEditor] = useState(null);

  useEffect(() => {
    loadMonaco()
      .then(() => import('./DiffEditor'))
      .then((module) => {
        setDiffEditor(() => module.default as any);
      });
  }, []);

  if (!DiffEditor) {
    return <EditorPlaceholder />;
  }

  return (
    <DiffEditor
      ref={forwardRef}
      // FIXME
      // https://github.com/FrontEnd-ro/frontend.ro/issues/111
      key={`${JSON.stringify(modifiedFolderStructure)}_${JSON.stringify(originalFolderStructure)}`}
      originalFolderStructure={originalFolderStructure || {}}
      modifiedFolderStructure={modifiedFolderStructure || {}}
    />
  );
});

export default DiffEditorLazy;
