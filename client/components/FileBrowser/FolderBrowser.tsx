import {
  useState,
  useEffect,
  MouseEvent,
  ChangeEvent,
  FormEvent,
  FocusEvent,
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import { ExerciseFolder } from '~/../shared/utils/FolderStructure';
import FileList from '~/components/FileBrowser/FileList/FileList';
import { Target as ContextMenuTarget } from './ContextMenu/ContextMenu';

import styles from './FolderBrowser.module.scss';

interface Props {
  folder: ExerciseFolder;
  onFileSelect: (key: string) => void;

  readOnly?: boolean;
  className?: string;
  // If we have the Context Menu open, this
  // prop holds the key for that specific file or folder.
  contextSelectedKey?: string;
  selectedFileKey?: string;
  // If a File or Folder is being renamed, this prop
  // holds the key of that File/Folder.
  renamedKey?: string;
  onRenameStart?: (key: string) => void;
  onRenameDone?: (key: string, name: string) => void;
  openContextMenu?: (key: string, e: MouseEvent<HTMLElement>, target: ContextMenuTarget) => void;

  // This allows us to pass custom class names to any File in this Tree.
  customClasses?: (key: string) => string;
}

const FolderBrowser = ({
  folder,
  onFileSelect,
  readOnly,
  className = '',
  contextSelectedKey,
  selectedFileKey,
  renamedKey,
  openContextMenu,
  onRenameDone,
  onRenameStart,
  customClasses,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [renameInputValue, setRenameInputValue] = useState('');
  const { folders, files, name } = folder;

  useEffect(() => {
    // This way, when you start editing a folder, the input
    // has the same value as the folder name.
    if (folder.key === renamedKey) {
      setRenameInputValue(folder.name);
    }
  }, [renamedKey]);

  // Toggle this folder. By passing a value,
  // it will not toggle, instead it will use
  // the value passed as param.
  const toggle = (value?: boolean) => {
    if (renamedKey === folder.key) {
      // Disable toggling while renaming
      return;
    }

    setRenameInputValue('');
    setIsOpen(value === undefined ? !isOpen : value);
  };

  const onContextMenu = (e: MouseEvent<HTMLElement>) => {
    const SPAN = '[FolderBrowser: maybeTriggerRename]';
    if (openContextMenu === undefined) {
      console.log(`${SPAN} Tried to open context menu but 'openContextMenu' is undefined. Is it a misconfiguration?`);
      return;
    }

    toggle(true);
    openContextMenu(folder.key, e, ContextMenuTarget.FOLDER);
  };

  const maybeTriggerRename = (e: FormEvent<HTMLFormElement> | FocusEvent<HTMLInputElement>) => {
    const SPAN = '[FolderBrowser: maybeTriggerRename]';
    if (!onRenameDone) {
      console.log(`${SPAN} Tried to rename file but not callback provided. Is it a misconfiguration?`);
      return;
    }

    if (renamedKey === undefined) {
      console.log(`${SPAN} Tried to rename file but 'renamedKey' is undefined. Is it a bug in our code?`);
      return;
    }

    e.stopPropagation();
    e.preventDefault();

    onRenameDone(renamedKey, renameInputValue);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRenameInputValue(event.currentTarget.value);
  };

  return (
    <div className={`
      ${className}
      relative
      ${styles.FolderBrowser}
      ${isOpen ? styles['is--open'] : ''}`}
    >
      <div
        onClick={() => toggle()}
        onContextMenu={!readOnly ? onContextMenu : undefined}
        className={`
          ${styles.Folder} 
          btn--transparent  ellipsis-overflow w-100
          ${renamedKey === folder.key ? styles['is--renamed'] : ''}
          ${contextSelectedKey === folder.key ? 'is--ctx-selected' : ''}`}
      >
        <form noValidate onSubmit={maybeTriggerRename} className="d-flex align-items-center">
          <>
            {isOpen
              ? <FontAwesomeIcon style={{ marginRight: '0.5em' }} icon={faChevronDown} width="18" height="18" />
              : <FontAwesomeIcon style={{ marginRight: '0.5em' }} icon={faChevronRight} width="18" height="18" />}
          </>
          <input
            type="text"
            className={styles.input}
            value={renamedKey === folder.key ? renameInputValue : name}
            disabled={readOnly || renamedKey !== folder.key}
            onChange={onChange}
            // By setting this key, the input will re-render
            // when the the current file is being renamed.
            // This in turn will toggle the `autoFocus` property,
            // and the input will get focused.
            key={(renamedKey === folder.key).toString()}
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus={renamedKey === folder.key}
            onBlur={maybeTriggerRename}
          />
          <Button
            hidden
            type="submit"
            className="absolute"
            disabled={readOnly || renamedKey !== folder.key}
          />
        </form>
      </div>
      {folders.map((folder) => (
        <FolderBrowser
          key={folder.key}
          folder={folder}
          readOnly={readOnly}
          onFileSelect={onFileSelect}
          selectedFileKey={selectedFileKey}
          renamedKey={renamedKey}
          contextSelectedKey={contextSelectedKey}
          openContextMenu={openContextMenu}
          onRenameStart={onRenameStart}
          onRenameDone={onRenameDone}
          customClasses={customClasses}
        />
      ))}
      <FileList
        className={styles.FilesList}
        readOnly={readOnly}
        files={files}
        selectedFileKey={selectedFileKey}
        onContextMenu={openContextMenu !== undefined
          ? (key, e) => openContextMenu(key, e, ContextMenuTarget.FILE)
          : undefined}
        renamedFileKey={renamedKey}
        contextSelectedFileKey={contextSelectedKey}
        onRenameStart={onRenameStart}
        onRenameDone={onRenameDone}
        onFileSelect={onFileSelect}
        customClasses={customClasses}
      />
    </div>
  );
};

export default FolderBrowser;
