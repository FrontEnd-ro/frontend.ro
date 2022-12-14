import React from 'react';
import { Theme } from '../../themes';
import MonacoService from '~/services/MonacoService';
import FileIcons from '~/services/utils/FileIcons';
import InitForm from '../../InitForm/InitForm';
import FolderStructure from '~/../shared/utils/FolderStructure';
import MonacoBase from '../../Monaco.base';
import EditorExplorer from '../../EditorExplorer/EditorExplorer';
import ResizableExplorerContainer from '../../ResizableExplorerContainer/ResizableExplorerContainer';

import styles from '../../Editor.module.scss';

// extends MonacoBase
class DeprecatedBasicMonacoEditor extends MonacoBase {
  constructor(props) {
    super(props);

    this.state = {
      folderStructure: new FolderStructure(props.folderStructure),
    };
  }

  initEditor = () => {
    const { readOnly } = this.props;

    // FIXME
    // This should look at the prop. By looking at the state,
    // when receiving new props we can't re-render this component nicely.
    // To test: have a look at the SolveExercise page and jump
    // between 2 exercises one with example code and one without
    const { folderStructure, selectedFileKey } = this.state;

    if (!folderStructure.files.length && !folderStructure.folders.length) {
      return;
    }

    let { file } = folderStructure.getFile(selectedFileKey);

    this.editor = MonacoService.create(this.editorRef.current, {
      readOnly,
      value: file ? file.content : '',
      scrollBeyondLastLine: false,
      theme: Theme.VS,
    });

    if (file) {
      this.onFileSelect(file.key);
      this.updateLanguageBasedOnFileName(file.name);
    }
  }

  onModelChange = () => {
    const { folderStructure } = this.state;
    folderStructure.setContent(this.state.selectedFileKey, this.editor.getValue());

    this.setState({ folderStructure });
  }

  render() {
    const { readOnly } = this.props;
    const {
      folderStructure, selectedFileKey, isDropable,
    } = this.state;
    const selectedFile = folderStructure.getFile(selectedFileKey).file;

    return (
      <div
        className={`
        ${styles['editor-wrapper']}
        ${isDropable ? styles['is--dropable'] : ''}
      `}
        onDragEnter={this.onDragEnter}
        onDragLeave={this.onDragLeave}
      >
        {folderStructure.files.length || folderStructure.folders.length ? (
          <>
            <ResizableExplorerContainer
              onResize={this.onResize}
              containerRef={this.editorExplorerContainer}
              initialWidth={`${this.INITIAL_EXPLORER_WIDTH_PX}px`}
            >
              <EditorExplorer
                folderStructure={folderStructure}
                selectedFileKey={selectedFileKey}
                readOnly={readOnly}
                onFileAdd={this.onFileAdd}
                onFolderAdd={this.onFolderAdd}
                onSelect={this.onFileSelect}
                onFileRename={this.onFileRename}
                onFolderRename={this.onFolderRename}
                onFileDelete={this.onFileDelete}
                onFolderDelete={this.onFolderDelete}
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
            <label className="upload-label pin-full d-flex justify-content-center align-items-center">
              <p>
                <span className="icon-check mr-2" />
                Drop to replace
              </p>
              <input className="pin-full" type="file" multiple onChange={this.onReplace} />
            </label>
          </>
        ) : (
          <InitForm createFirstFile={this.createFirstFile} uploadStructure={this.uploadStructure} />
        )}
      </div>
    );
  }
}

export default DeprecatedBasicMonacoEditor;
