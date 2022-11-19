import React, { Suspense } from 'react';
import { withMonacoEditor } from '~/services/MonacoService';
import EditorPlaceholder from '../EditorPlaceholder/EditorPlaceholder';

const CompleteEditor = React.lazy(() => import('./CompleteEditor'));

const CompleteEditorLazy = React.forwardRef((
  { folderStructure, feedbacks, ...rest }: any,
  forwardRef,
) => {
  const { loadError, didLoadMonaco } = withMonacoEditor();
  const Placeholder = (<EditorPlaceholder className={`bg-silver ${rest.className}`} />);

  if (loadError) {
    return (<p> Something went wrong. Try again! </p>);
  }

  if (!didLoadMonaco) {
    return Placeholder;
  }

  return (
    <Suspense fallback={Placeholder}>
      <CompleteEditor
        ref={forwardRef}
        // FIXME
        // https://github.com/FrontEnd-ro/frontend.ro/issues/111
        key={`${folderStructure}-${feedbacks.length}`}
        folderStructure={folderStructure || {}}
        feedbacks={feedbacks}
        {...rest}
      />
    </Suspense>
  );
});

export default CompleteEditorLazy;
