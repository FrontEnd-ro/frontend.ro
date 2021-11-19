import React, { useEffect, useState } from 'react';
import loadMonaco from '../loadMonaco';
import EditorPlaceholder from '../EditorPlaceholder/EditorPlaceholder';

const CompleteEditorLazy = React.forwardRef(({ folderStructure, feedbacks, ...rest }: any, forwardRef) => {
  const [CompleteEditor, setCompleteEditor] = useState(null);

  useEffect(() => {
    loadMonaco()
      .then(() => import('./CompleteEditor'))
      .then((module) => {
        setCompleteEditor(() => module.default as any);
      });
  }, []);

  if (!CompleteEditor) {
    return <EditorPlaceholder />;
  }

  return (
    <CompleteEditor
      ref={forwardRef}
        // FIXME
        // https://github.com/FrontEnd-ro/frontend.ro/issues/111
      key={`${folderStructure}-${feedbacks.length}`}
      folderStructure={folderStructure || {}}
      feedbacks={feedbacks}
      {...rest}
    />
  );
});

export default CompleteEditorLazy;
