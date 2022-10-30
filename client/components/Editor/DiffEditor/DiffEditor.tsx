import React from 'react';
import * as Monaco from '../monaco';
import FileIcons from '~/services/utils/FileIcons';
import FolderStructure, { ExerciseFile, ExerciseFolder } from '~/services/utils/FolderStructure';
import MonacoBase from '../Monaco.base';
import FileSwitcher from '../FileSwitcher/FileSwitcher';

import styles from '../Editor.module.scss';

interface Props {
  originalFolderStructure: {
    folders: ExerciseFolder[],
    files: ExerciseFile[]
  }
}

interface State {
  selectedFileKey: string | null;
  originalFolderStructure: FolderStructure;
  modifiedFolderStructure: FolderStructure;
}

class DiffMonacoEditor extends MonacoBase<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      selectedFileKey: null,
      originalFolderStructure: new FolderStructure(props.originalFolderStructure),
      modifiedFolderStructure: new FolderStructure(props.modifiedFolderStructure),
    };
  }

  componentDidMount() {
    const { modifiedFolderStructure } = this.state;

    const firstFile = modifiedFolderStructure.files[0];

    this.setState(
      {
        selectedFileKey: firstFile ? firstFile.key : null,
      },
      () => {
        this.initEditor();
      },
    );
  }

  initEditor = () => {
    // FIXME
    // This should look at the prop. By looking at the state,
    // when receiving new props we can't re-render this component nicely.
    // To test: have a look at the SolveExercise page and jump
    // between 2 exercises one with example code and one without
    const { modifiedFolderStructure, selectedFileKey } = this.state;

    if (!modifiedFolderStructure.files.length && !modifiedFolderStructure.folders.length) {
      return;
    }

    const modifiedFile = modifiedFolderStructure.getFile(selectedFileKey).file;

    this.editor = Monaco.createDiffEditor(this.editorRef.current, {
      scrollBeyondLastLine: false,
    });

    if (modifiedFile) {
      this.onDiffFileSelect(modifiedFile.key);
      this.updateDiffLanguageBasedOnFileName(modifiedFile.name);
    }
  }

  render() {
    const {
      modifiedFolderStructure,
      fileSwitcherWidth,
      selectedFileKey,
    } = this.state;
    const selectedFile = modifiedFolderStructure.getFile(selectedFileKey).file;

    return (
      <div
        className={`
        ${styles['editor-wrapper']}
      `}
        onDragEnter={this.onDragEnter}
        onDragLeave={this.onDragLeave}
      >
        <FileSwitcher
          readOnly
          folderStructure={modifiedFolderStructure}
          selectedFileKey={selectedFileKey}
          onSelect={this.onDiffFileSelect}
          onDownload={this.onDownload}
          onResize={this.onResize}
        />
        <div
          className={`
            ${styles.editor}
            ${selectedFileKey ? '' : styles['has--no-selected-file']}
          `}
          style={{
            width: `calc(100% - ${fileSwitcherWidth}px)`,
            maxWidth: `calc(100% - ${fileSwitcherWidth}px)`,
          }}
          ref={this.editorRef}
        />
        {selectedFile && (
        <p className={`${styles['selected-file']} d-flex justify-content-center align-items-center`} title={selectedFile.name}>
          <img width="20" src={FileIcons.getIconUrl(selectedFile.name)} alt="icon" />
          <span className="ellipsis-overflow">{selectedFile.name}</span>
        </p>
        )}

      </div>
    );
  }
}

export default DiffMonacoEditor;
