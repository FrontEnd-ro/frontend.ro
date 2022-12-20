import {
  CSSProperties,
  MouseEvent,
  useState,
  useRef,
  useEffect,
} from 'react';
import noop from 'lodash/noop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faFolderPlus,
  faChevronLeft,
  faCloudDownloadAlt,
} from '@fortawesome/free-solid-svg-icons';
import Feedbacks from '../Feedbacks';
import Button from '~/components/Button';
import FolderBrowser from '../../FileBrowser/FolderBrowser';
import { uuid, nextUntitledFilename } from '~/services/Utils';
import FileList from '~/components/FileBrowser/FileList/FileList';
import SweetAlertService from '~/services/sweet-alert/SweetAlert.service';
import FolderStructure, { NewSourceFile } from '~/../shared/utils/FolderStructure';
import ContextMenu, { Target as ContextMenuTarget } from '~/components/FileBrowser/ContextMenu/ContextMenu';

import styles from './EditorExplorer.module.scss';

interface Props {
  selectedFileKey: string;
  folderStructure: FolderStructure,
  readOnly?: boolean,
  onSelect?: (key: string) => void
  onDownload?: () => Promise<void>
  onFolderAdd?: (parentKey: string | undefined, asset: any) => void;
  onFolderRename?: (key: string, name: string) => void;
  onFolderDelete?: (key: string) => void;
  onFileAdd?: (parentKey: string | undefined, asset: any, cb: () => void) => void
  onFileRename?: (key: string, name: string) => void;
  onFileDelete?: (key: string) => void;
  onCollapse?: () => void;
  feedbacks?: any[]; // TODO: add types
  className?: string;
  filesOrFoldersToIgnore?: string[];
}

const EditorExplorer = ({
  selectedFileKey,
  folderStructure,
  readOnly,
  onSelect,
  onDownload,
  onFolderAdd,
  onFolderDelete,
  onFolderRename,
  onFileAdd,
  onFileRename,
  onFileDelete,
  onCollapse,
  feedbacks = [],
  // List of ids of files and/or folder that we want to hide
  // from the explorer. This is a quick (and dirty) solution
  // so we can hide the Testing code in our Christmas Advent.
  filesOrFoldersToIgnore = [],
  className = '',
}: Props) => {
  const editorExplorerRef = useRef<HTMLDivElement | null>(null);
  const [contextMenuKey, setContextMenuKey] = useState<string | undefined>(undefined);
  const [dropdownCSS, setDropdownCSS] = useState<CSSProperties>({ display: 'none' });
  const [contextMenuTarget, setContextMenuTarget] = useState<ContextMenuTarget>(
    ContextMenuTarget.FILE,
  );
  const [renamedAsset, setRenamedAsset] = useState<{
    key: string;
    name: string;
    type: ContextMenuTarget
  } | null>(null);

  useEffect(() => {
    return () => {
      document.removeEventListener('click', closeContextMenu);
    };
  }, []);

  const selectFile = (key: string) => {
    if (!renamedAsset || key !== renamedAsset.key) {
      /** Editing a file's name & clicking on another file */
      (document.activeElement as HTMLElement)?.blur();
    }

    if (onSelect) {
      onSelect(key);
    }
  };

  const openContextMenu = (key: string, e: MouseEvent<HTMLElement>, target: ContextMenuTarget) => {
    const SPAN = '[EditorExplorer: maybeTriggerRename]';
    if (editorExplorerRef.current === null) {
      console.log(`${SPAN} Tried to open context menu, but React.Ref is null.`);
      return;
    }

    e.preventDefault();
    e.stopPropagation();
    document.removeEventListener('click', closeContextMenu);

    const { clientX, clientY } = e;

    const bbox = editorExplorerRef.current.getBoundingClientRect();

    setDropdownCSS({
      top: `${clientY - bbox.y}px`,
      left: `${clientX - bbox.x}px`,
    });
    setContextMenuKey(key);
    setContextMenuTarget(target);

    document.addEventListener('click', closeContextMenu);
  };

  const closeContextMenu = () => {
    setContextMenuKey(undefined);
    setDropdownCSS({ display: 'none' });

    document.removeEventListener('click', closeContextMenu);
  };

  const newFile = (parentKey?: string) => {
    const SPAN = `[EditorExplorer: newFile(${parentKey})]`;
    if (onFileAdd === undefined) {
      console.log(`${SPAN} Tried to add file but onFileAdd() is missing.`);
      return;
    }

    const renamedAsset = NewSourceFile(nextUntitledFilename(folderStructure
      .getFolder(parentKey).folder.files.map((f: any) => f.name)));

    // When creating a new file automatically enter the "renaming" state
    setRenamedAsset({
      ...renamedAsset,
      type: ContextMenuTarget.FILE,
    });
    onFileAdd(parentKey, renamedAsset, noop);
  };

  const newFolder = (parentKey?: string) => {
    const SPAN = `[EditorExplorer: newFolder(${parentKey})]`;
    if (onFolderAdd === undefined) {
      console.log(`${SPAN} Tried to add folder but onFolderAdd() is missing.`);
      return;
    }

    const renamedAsset = {
      key: uuid(),
      files: [],
      folders: [],
      name: nextUntitledFilename(folderStructure.getFolder(parentKey).folder.folders.map((f) => f.name), 'Untitled folder'),
    };

    // When creating a new folder automatically enter the "renaming" stte
    setRenamedAsset({
      ...renamedAsset,
      type: ContextMenuTarget.FOLDER,
    });
    onFolderAdd(parentKey, renamedAsset);
  };

  // Custom classes to be applied to the Files in this explorer
  const customFileClasses = (key: string) => {
    const fileFeedbacks = new Feedbacks(null, feedbacks).getTypesByFileKey()[key];
    if (fileFeedbacks === undefined) {
      return '';
    }

    const feedbackClasses = fileFeedbacks
      ?.map((type) => ` ${styles[`has--feedback-${type}`]}`)
      ?.join('') ?? '';
    return `${feedbackClasses} ${styles['has--feedback']}`;
  };

  const deleteFileOrFolder = (key: string) => {
    const SPAN = `[EditorExplorer: deleteFileOrFolder(${key})]`;
    if (!onFolderDelete || !onFileDelete) {
      console.log(`${SPAN} Tried to delete file/folder but onFolderDelete() or onFileDelete() functions are missing. Bug?`);
      return;
    }

    if (contextMenuTarget === ContextMenuTarget.FOLDER) {
      onFolderDelete(key);
    } else {
      onFileDelete(key);
    }
  };

  const onRenameStart = (key: string) => {
    let renamedAsset = folderStructure.getFile(key).file;
    if (renamedAsset) {
      setRenamedAsset({
        ...renamedAsset,
        type: ContextMenuTarget.FILE,
      });
    } else {
      setRenamedAsset({
        ...folderStructure.getFolder(key).folder,
        type: ContextMenuTarget.FOLDER,
      });
    }
  };

  const onRenameDone = (key: string, name: string) => {
    const SPAN = `[EditorExplorer: onRenameDone(${key}, ${name})]`;
    if (!renamedAsset) {
      console.log(`${SPAN} Tried to rename file/folder but the 'renameAsset' has no value. Bug?`);
      return;
    }

    if (!onFolderRename || !onFileRename) {
      console.log(`${SPAN} Tried to rename file/folder but onFolderRename() or onFileRename() functions are missing. Bug?`);
      return;
    }

    if (renamedAsset.type === ContextMenuTarget.FOLDER) {
      onFolderRename(key, name);
    } else {
      onFileRename(key, name);
    }

    setRenamedAsset(null);
  };

  const onInnerDownload = () => {
    const SPAN = '[EditorExplorer: onInnerDownload]';
    if (onDownload === undefined) {
      console.log(`${SPAN} No 'onDownload' callback found. Misconfiguration?`);
      return Promise.resolve();
    }

    return onDownload()
      .catch(() => {
        SweetAlertService.toast({
          type: 'error',
          text: 'Oups, generating the archive failed. Give it another try!',
        });
      });
  };

  return (
    <>
      <div
        ref={editorExplorerRef}
        className={`h-100 w-100 ${className} ${styles.EditorExplorer}`}
      >
        <ActionBar
          readOnly={readOnly}
          onNewFile={() => newFile()}
          onNewFolder={() => newFolder()}
          onCollapse={onCollapse}
          onDownload={onInnerDownload}
        />
        <div>
          {folderStructure.folders
            .filter((folder) => !filesOrFoldersToIgnore.includes(folder.key))
            .map((folder) => (
              <FolderBrowser
                key={folder.key}
                folder={folder}
                readOnly={readOnly}
                onFileSelect={selectFile}
                selectedFileKey={selectedFileKey}
                renamedKey={renamedAsset?.key}
                contextSelectedKey={contextMenuKey}
                openContextMenu={openContextMenu}
                onRenameStart={onRenameStart}
                onRenameDone={onRenameDone}
                customClasses={customFileClasses}
                filesOrFoldersToIgnore={filesOrFoldersToIgnore}
              />
            ))}
          <FileList
            readOnly={readOnly}
            files={folderStructure.files}
            selectedFileKey={selectedFileKey}
            onContextMenu={(key, e) => openContextMenu(key, e, ContextMenuTarget.FILE)}
            renamedFileKey={renamedAsset?.key}
            contextSelectedFileKey={contextMenuKey}
            onRenameStart={onRenameStart}
            onRenameDone={onRenameDone}
            onFileSelect={selectFile}
            customClasses={customFileClasses}
            filesToIgnore={filesOrFoldersToIgnore}
          />
        </div>
      </div>
      {contextMenuKey && (
        <ContextMenu
          target={contextMenuTarget}
          style={dropdownCSS}
          className="absolute"
          onNewFile={() => newFile(contextMenuKey)}
          onNewFolder={() => newFolder(contextMenuKey)}
          onRename={() => onRenameStart(contextMenuKey)}
          onDelete={() => deleteFileOrFolder(contextMenuKey)}
        />
      )}
    </>
  );
};

const ActionBar = ({
  readOnly,
  onNewFile,
  onNewFolder,
  onDownload,
  onCollapse,
}: {
  readOnly?: boolean;
  onNewFile?: () => void;
  onNewFolder?: () => void;
  onDownload?: () => Promise<void>;
  onCollapse?: () => void;
}) => {
  const [isGeneratingArchive, setIsGeneratingArchive] = useState(false);
  const onDownloadClick = () => {
    setIsGeneratingArchive(true);
    onDownload!().finally(() => {
      setIsGeneratingArchive(false);
    });
  };

  return (
    <div className={styles.ActionBar}>
      <div>
        {!readOnly && onNewFile !== undefined && (
          <Button onClick={onNewFile} title="New file">
            <FontAwesomeIcon icon={faPlus} width="18" height="18" />
          </Button>
        )}
        {!readOnly && onNewFolder !== undefined && (
          <Button onClick={onNewFolder} title="New folder">
            <FontAwesomeIcon icon={faFolderPlus} width="18" height="18" />
          </Button>
        )}
        {onDownload !== undefined && (
          <Button
            onClick={onDownloadClick}
            loading={isGeneratingArchive}
            title="Download to device"
          >
            <FontAwesomeIcon icon={faCloudDownloadAlt} width="18" height="18" />
          </Button>
        )}
      </div>
      {onCollapse !== undefined && (
        <Button onClick={onCollapse} title="Collapse panel">
          <FontAwesomeIcon icon={faChevronLeft} width="18" height="18" />
        </Button>
      )}
    </div>
  );
};

export default EditorExplorer;
