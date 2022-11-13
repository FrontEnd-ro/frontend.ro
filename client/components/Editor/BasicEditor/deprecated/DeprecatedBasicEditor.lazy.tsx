import React, { Suspense } from 'react';
import { withMonacoEditor } from '~/services/MonacoService';
import EditorPlaceholder from '../../EditorPlaceholder/EditorPlaceholder';

const BasicEditor = React.lazy(() => import('./DeprecatedBasicEditor'));

const BasicEditorLazy = React.forwardRef(({ folderStructure, ...rest }: any, forwardRef) => {
  const { loadError, didLoadMonaco } = withMonacoEditor();
  const Placeholder = (<EditorPlaceholder className={rest.className} />);

  if (loadError) {
    return (<p> Something went wrong. Try again! </p>);
  }

  if (!didLoadMonaco) {
    return Placeholder;
  }

  return (
    <Suspense fallback={Placeholder}>
      <BasicEditor
        ref={forwardRef}
          // FIXME
          // https://github.com/FrontEnd-ro/frontend.ro/issues/111
        key={folderStructure}
        folderStructure={folderStructure || {}}
        {...rest}
      />
    </Suspense>
  );
});

export default BasicEditorLazy;
