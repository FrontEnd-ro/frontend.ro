import React, { Suspense } from 'react';
import { BasicEditorProps } from './BasicEditor';
import { withMonacoEditor } from '~/services/MonacoService';
import EditorPlaceholder from '../EditorPlaceholder/EditorPlaceholder';

const BasicEditor = React.lazy(() => import('./BasicEditor'));

const BasicEditorLazy = (props: BasicEditorProps) => {
  const { loadError, didLoadMonaco } = withMonacoEditor();
  // eslint-disable-next-line react/destructuring-assignment
  const Placeholder = (<EditorPlaceholder theme={props.theme} className={props.className} />);

  if (loadError) {
    return (<p> Something went wrong. Try again! </p>);
  }

  if (!didLoadMonaco) {
    return Placeholder;
  }

  return (
    <Suspense fallback={Placeholder}>
      <BasicEditor {...props} />
    </Suspense>
  );
};

export default BasicEditorLazy;
