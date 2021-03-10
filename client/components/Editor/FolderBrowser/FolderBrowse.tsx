/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from '~/components/Button';
import FileIcons from '~/services/utils/FileIcons';
import FolderStructure from '~/services/utils/FolderStructure';
import Feedbacks from '../Feedbacks';
import FilesList from '../FileList/FilesList';

import styles from './FolderBrowse.module.scss';

interface Props {
  folderKey: string;
  readOnly: boolean;
  ctxMenuKey: string;
  feedbacks: Feedbacks;
  selectedFileKey: string;
  folderStructure: FolderStructure;
  renamedAsset: { key: string, name: string, type: 'FILE' | 'FOLDER' };
  onRename: (e: React.ChangeEvent<HTMLInputElement>) => void;
  saveAsset: (e: any) => void;
  selectFile: (key: string) => void;
  enterEditMode: (key: string) => void;
  openMenu: (e: Event, isFolder: boolean) => void;
}

interface State {
  isOpen: boolean;
}

class FolderBrowse extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  toggle = (value?: boolean) => {
    const { renamedAsset, folderKey } = this.props;
    const { isOpen } = this.state;

    if (renamedAsset && renamedAsset.key === folderKey) {
      return;
    }

    this.setState({ isOpen: value === undefined ? !isOpen : value });
  }

  onContextMenu = (e) => {
    const { readOnly, openMenu } = this.props;

    if (!readOnly) {
      this.toggle(true);
      openMenu(e, true);
    }
  }

  containsFileWithFeedback = () => {
    const { feedbacks, folderStructure, folderKey } = this.props;
    return !!Object.keys(feedbacks).find((fileKey) => {
      return folderStructure.hasFile(fileKey, folderStructure.getFolder(folderKey).folder);
    });
  }

  render() {
    const {
      folderKey,
      folderStructure,
      ctxMenuKey,
      readOnly,
      renamedAsset,
      selectFile,
      openMenu,
      enterEditMode,
      onRename,
      saveAsset,
      selectedFileKey,
      feedbacks,
    } = this.props;
    let { folders, files, name } = folderStructure.getFolder(folderKey).folder;
    const { isOpen } = this.state;

    files = files.map((f) => ({ ...f, icon: FileIcons.getIcon(f.name) }));

    return (
      <div className={`
        ${styles['folder-browse']}
        ${isOpen ? styles['is--open'] : ''}
        ${this.containsFileWithFeedback() ? styles['has--file-with-feedback'] : ''}`}
      >
        <div
          onClick={() => this.toggle()}
          onContextMenu={this.onContextMenu}
          data-key={folderKey}
          className={`
            ${styles['folder-button']} 
            btn--transparent 
            ellipsis-overflow
            ${renamedAsset.key === folderKey ? 'is-being-renamed' : ''}
            ${folderKey === ctxMenuKey ? 'is--ctx-selected' : ''}`}
        >
          <form noValidate onSubmit={saveAsset} className="d-flex align-items-center">
            <>
              {isOpen
                ? <FontAwesomeIcon style={{ marginRight: '0.5em' }} icon={faChevronDown} width="18" height="18" />
                : <FontAwesomeIcon style={{ marginRight: '0.5em' }} icon={faChevronRight} width="18" height="18" /> }
            </>
            <input
              className={styles['folder-input']}
              type="text"
              value={renamedAsset.key === folderKey ? renamedAsset.name : name}
              disabled={renamedAsset.key !== folderKey}
              onChange={onRename}
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus={renamedAsset.key === folderKey}
              onBlur={saveAsset}
            />
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <Button hidden loading={renamedAsset.key !== folderKey} type="submit" />
          </form>
        </div>
        {folders.map((folder) => (
          <FolderBrowse
            key={folder.key}
            folderKey={folder.key}
            folderStructure={folderStructure}
            feedbacks={feedbacks}
            readOnly={readOnly}
            selectFile={selectFile}
            selectedFileKey={selectedFileKey}
            renamedAsset={renamedAsset}
            ctxMenuKey={ctxMenuKey}
            openMenu={openMenu}
            enterEditMode={enterEditMode}
            onRename={onRename}
            saveAsset={saveAsset}
          />
        ))}
        <FilesList
          readOnly={readOnly}
          files={files}
          feedbacks={feedbacks}
          ctxMenuKey={ctxMenuKey}
          selectFile={selectFile}
          selectedFileKey={selectedFileKey}
          enterEditMode={enterEditMode}
          openMenu={openMenu}
          renamedAsset={renamedAsset}
          onRename={onRename}
          saveAsset={saveAsset}
        />
      </div>
    );
  }
}

export default FolderBrowse;
