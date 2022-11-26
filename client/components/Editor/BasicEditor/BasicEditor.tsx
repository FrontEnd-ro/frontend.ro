import { useEffect, useRef } from 'react';
import { editor } from 'monaco-editor';
import { Theme } from '../themes';
import MonacoService from '~/services/MonacoService';
import styles from '../Editor.module.scss';
import { extractExtension } from '~/services/utils/FileUtils';
import { noop } from '~/services/Utils';
import { ExerciseFile } from '~/services/utils/FolderStructure';
import { useResizeObserver } from '~/services/Hooks';

export interface BasicEditorProps {
  className?: string,
  readOnly?: boolean,
  file?: ExerciseFile,
  onChange?: (code: string) => void,
  // If this HTML element resizes, then we will
  // trigger a layout change (resize) for the editor
  resizeTarget?: HTMLElement;
  theme?: Theme;
}

const _BasicEditor = ({
  file,
  onChange,
  readOnly = false,
  className = '',
  resizeTarget = null,
  theme = Theme.VS,
}: BasicEditorProps) => {
  // This is where we will mount the Monaco Editor
  const editorRootRef = useRef<HTMLDivElement | null>(null);
  const editor = useRef<editor.IStandaloneCodeEditor>(null);

  const init = async () => {
    await MonacoService.defineTheme(theme);
    editor.current = MonacoService.create(editorRootRef.current, {
      readOnly,
      value: file ? file.content : '',
      scrollBeyondLastLine: false,
      theme,
    });

    if (file !== undefined) {
      updateContent();
    }
  };

  useEffect(() => { init(); }, []);

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
  }, [file?.key, !!editor.current]);

  const updateContent = () => {
    const extension = extractExtension(file.name);

    MonacoService.setModelLanguage(
      editor.current,
      MonacoService.getModelLanguage(extension),
    );
    editor.current.getModel().setValue(file.content);
  };

  useResizeObserver(resizeTarget, () => editor.current.layout());

  return (
    <div className={`${className} ${styles['editor-wrapper']}`}>
      <div className={`${styles.editor}`} ref={editorRootRef} />
    </div>
  );
};

export default _BasicEditor;
