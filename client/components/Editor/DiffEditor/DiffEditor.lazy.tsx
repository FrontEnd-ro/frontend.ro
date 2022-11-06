import React, { Ref, Suspense } from 'react';
import { withMonacoEditor } from '~/services/MonacoService';
import { ExerciseFolder } from '~/services/utils/FolderStructure';
import EditorPlaceholder from '../EditorPlaceholder/EditorPlaceholder';
import DiffMonacoEditor from './DiffEditor';

const DiffEditor = React.lazy(() => import('./DiffEditor'));

const DiffEditorLazy = React.forwardRef((
  {
    originalFolderStructure,
    modifiedFolderStructure,
    className = '',
  }: {
    originalFolderStructure: Pick<ExerciseFolder, 'files' | 'folders'>,
    modifiedFolderStructure: Pick<ExerciseFolder, 'files' | 'folders'>,
    className?: string,
  }, forwardRef: Ref<DiffMonacoEditor>,
) => {
  const { loadError, didLoadMonaco } = withMonacoEditor();
  const Placeholder = (<EditorPlaceholder className={className} />);

  if (loadError) {
    return (<p> Something went wrong. Try again! </p>);
  }

  if (!didLoadMonaco) {
    return <EditorPlaceholder />;
  }

  return (
    <Suspense fallback={Placeholder}>
      <DiffEditor
        ref={forwardRef}
        className={className}
        // FIXME
        // https://github.com/FrontEnd-ro/frontend.ro/issues/111
        key={`${JSON.stringify(modifiedFolderStructure)}_${JSON.stringify(originalFolderStructure)}`}
        originalFolderStructure={originalFolderStructure || {}}
        modifiedFolderStructure={modifiedFolderStructure || {}}
      />
    </Suspense>
  );
});

export default DiffEditorLazy;
