import React from 'react';
import MonacoService from '~/services/MonacoService';
import FileIcons from '~/services/utils/FileIcons';
import FolderStructure, { ExerciseFile, ExerciseFolder } from '~/services/utils/FolderStructure';
import MonacoBase from '../Monaco.base';
import EditorExplorer from '../EditorExplorer/EditorExplorer';
import ResizableExplorerContainer from '../ResizableExplorerContainer/ResizableExplorerContainer';

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

    this.editor = MonacoService.createDiffEditor(this.editorRef.current, {
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
      selectedFileKey,
    } = this.state;
    const { className } = this.props;
    const selectedFile = modifiedFolderStructure.getFile(selectedFileKey).file;

    return (
      <div
        className={`
        ${className ?? ''}
        ${styles['editor-wrapper']}
      `}
        onDragEnter={this.onDragEnter}
        onDragLeave={this.onDragLeave}
      >
        <ResizableExplorerContainer
          onResize={this.onResize}
          containerRef={this.editorExplorerContainer}
          initialWidth={`${this.INITIAL_EXPLORER_WIDTH_PX}px`}
        >
          <EditorExplorer
            readOnly
            folderStructure={modifiedFolderStructure}
            selectedFileKey={selectedFileKey}
            onSelect={this.onDiffFileSelect}
            onDownload={this.onDownload}
          />
        </ResizableExplorerContainer>
        <div
          className={`
            ${styles.editor}
            ${selectedFileKey ? '' : styles['has--no-selected-file']}
          `}
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
