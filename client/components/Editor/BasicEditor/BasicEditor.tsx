import { useEffect, useRef, useState } from 'react';
import { editor } from 'monaco-editor';
import { Theme } from '../themes';
import MonacoService from '~/services/MonacoService';
import styles from '../Editor.module.scss';
import { extractExtension } from '~/services/utils/FileUtils';
import { noop } from '~/services/Utils';
import { ExerciseFile } from '~/../shared/utils/FolderStructure';
import { useResizeObserver, useViewZones } from '~/services/Hooks';

export interface BasicEditorProps {
  className?: string,
  readOnly?: boolean,
  readOnlyTooltipMessage?: string;
  file?: (ExerciseFile & { path: string }),
  onChange?: (code: string) => void,
  // If this HTML element resizes, then we will
  // trigger a layout change (resize) for the editor
  resizeTarget?: HTMLElement;
  theme?: Theme;

  // Type definitions for the files or libraries
  // we reference in our code. This allows our Editor
  // to have propert Intellisense functionality.
  // > content: is the actual content of the file or it's `.d.ts` definitions
  // > path: path to where is this file or package found. Example:
  //   node_modules/@types/react/index.d.ts
  typeDefinitions?: { content: string; path: string }[];

  // Used to render custom components inside the Editor
  viewZones?: {
    id: string;
    afterLineNumber: number;
    heightInPx: number;
    Component: React.ReactElement;
    range: {
      startLineNumber: number;
      startColumn: number;
      endLineNumber: number;
      endColumn: number;
    };
  }[];
}

const _BasicEditor = ({
  file,
  onChange,
  readOnly = false,
  className = '',
  resizeTarget = null,
  theme = Theme.VS,
  typeDefinitions = [],
  readOnlyTooltipMessage,
  viewZones = [],
}: BasicEditorProps) => {
  // This is where we will mount the Monaco Editor
  const editorRootRef = useRef<HTMLDivElement | null>(null);
  const editor = useRef<editor.IStandaloneCodeEditor>(null);
  const [didLoadEditor, setDidLoadEditor] = useState(false);

  const setTypes = () => {
    MonacoService
      .get()
      .languages
      .typescript
      .typescriptDefaults.setExtraLibs(typeDefinitions.map((lib) => ({
        content: lib.content,
        filePath: `file://${lib.path}`,
      })));
  };

  const init = async () => {
    await MonacoService.defineTheme(theme);
    editor.current = MonacoService.create(editorRootRef.current, {
      readOnly,
      value: file ? file.content : '',
      scrollBeyondLastLine: false,
      theme,
    });

    if (typeDefinitions.length !== 0) {
      setTypes();
    }

    if (file !== undefined) {
      updateContent();
    }
    setDidLoadEditor(true);
  };

  useEffect(() => { init(); }, []);
  useEffect(setTypes, [typeDefinitions.map((t) => t.path).join('_')]);
  useEffect(() => {
    if (editor.current === null) {
      return;
    }

    editor.current.updateOptions({ readOnly });
  }, [readOnly, didLoadEditor]);

  useEffect(() => {
    if (editor.current === null || readOnlyTooltipMessage === undefined) {
      return noop;
    }

    const messageContribution = editor.current.getContribution('editor.contrib.messageController');
    const disposable = editor.current.onDidAttemptReadOnlyEdit(() => {
      // According to this: https://github.com/microsoft/monaco-editor/issues/1742
      // the typings are not 100% complete.
      (messageContribution as any).showMessage(
        readOnlyTooltipMessage,
        editor.current.getPosition(),
      );
    });
    return () => disposable.dispose();
  }, [readOnlyTooltipMessage, didLoadEditor]);

  useEffect(() => {
    if (!editor.current || onChange === undefined) {
      return noop;
    }

    const modelListenerRef = editor.current.onDidChangeModelContent(() => {
      onChange(editor.current.getValue());
    });
    return () => modelListenerRef.dispose();
  }, [onChange]);

  useEffect(() => {
    if (file !== undefined && editor.current !== null) {
      updateContent();
    }
  }, [file?.key, file?.name, !!editor.current]);

  useViewZones(editor.current, viewZones);

  const updateContent = () => {
    const extension = extractExtension(file.name);
    let language = MonacoService.getModelLanguage(extension);

    // Dispose of the current model
    editor.current.getModel()?.dispose();

    // Create a new model with a URI
    // This allows us to have intellisese when using TypeScript.
    // FIXME: this code should be moved down into MonacoService.
    // The internal details should not be handled from here.
    // Like a Facade pattern, we should interact with the service,
    // not directly. But for now, it's ok.
    const modelUri = MonacoService.get().Uri.parse(`file://${file.path}/${file.name}`);
    const existingModel = MonacoService.get().editor.getModel(modelUri);
    if (existingModel !== null) {
      existingModel.setValue(file.content);
      editor.current.setModel(existingModel);
    } else {
      const newModel = MonacoService.get().editor.createModel(
        file.content,
        language,
        modelUri,
      );
      editor.current.setModel(newModel);
    }
  };

  useResizeObserver(resizeTarget, () => editor.current.layout());

  return (
    <div className={`${className} ${styles['editor-wrapper']}`}>
      <div className={`${styles.editor}`} ref={editorRootRef} />
    </div>
  );
};

export default _BasicEditor;
