import {
  ChangeEvent,
  FocusEvent,
  FormEvent,
  MouseEvent,
  useEffect,
  useState,
} from 'react';
import List from '~/components/List';
import Button from '~/components/Button';
import FileIcons from '~/services/utils/FileIcons';
import { ExerciseFile } from '~/services/utils/FolderStructure';

import styles from './FileList.module.scss';

interface Props {
  files: ExerciseFile[];
  onFileSelect: (key: string) => void;

  readOnly?: boolean;
  className?: string;
  selectedFileKey?: string;
  renamedFileKey?: string;
  contextSelectedFileKey?: string;
  onContextMenu?: (key: string, e: MouseEvent<HTMLElement>) => void;
  onRenameStart?: (key: string) => void;
  onRenameDone?: (key: string, name: string) => void;
  customClasses?: (key: string) => string;
}

// Renders a List of "Files" that can be renamed or deleted.
// It's meant to be used inside the FolderBrowser component.
function FileList({
  files,
  readOnly,
  className = '',
  selectedFileKey,
  renamedFileKey,

  // If we have the Context Menu open for a file, this
  // prop holds the key for that specific file.
  contextSelectedFileKey,
  onFileSelect,
  onContextMenu,
  onRenameStart,
  onRenameDone,
  customClasses,
}: Props) {
  const [renameInputValue, setRenameInputValue] = useState<string>('');

  useEffect(() => {
    // This way, when you start editing a file, the input
    // has the same value as the file name.
    const matchingFile = files.find((f) => f.key === renamedFileKey);
    if (matchingFile !== undefined) {
      setRenameInputValue(matchingFile.name);
    }
  }, [renamedFileKey]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRenameInputValue(event.currentTarget.value);
  };

  const maybeTriggerRename = (e: FormEvent<HTMLFormElement> | FocusEvent<HTMLInputElement>) => {
    const SPAN = '[FileList: maybeTriggerRename]';
    if (!onRenameDone) {
      console.log(`${SPAN} Tried to rename file but not callback provided. Is it a misconfiguration?`);
      return;
    }

    if (renamedFileKey === undefined) {
      console.log(`${SPAN} Tried to rename file but 'renamedFileKey' is undefined. Is it a bug in our code?`);
      return;
    }

    e.stopPropagation();
    e.preventDefault();

    onRenameDone(renamedFileKey, renameInputValue);
  };

  return (
    <List variant="none" className={className}>
      {files.map(({ key, name }) => (
        <li
          key={key}
          className={`
            ${styles.file}
            d-flex relative align-items-center w-100 cursor-pointer
            ${key === selectedFileKey ? styles['is--selected'] : ''} 
            ${key === renamedFileKey ? styles['is--renamed'] : ''} 
            ${key === contextSelectedFileKey ? styles['is--ctx-selected'] : ''}
            ${customClasses !== undefined ? customClasses(key) : ''}
          `}
          onClick={onFileSelect !== undefined ? () => onFileSelect(key) : undefined}
          onDoubleClick={(!readOnly && onRenameStart !== undefined)
            ? () => onRenameStart(key)
            : undefined}
          onContextMenu={(!readOnly && onContextMenu !== undefined)
            ? (e) => onContextMenu(key, e)
            : undefined}
        >
          <img
            width="20"
            className="mr-2"
            src={renamedFileKey === key
              ? FileIcons.getIconUrl(renameInputValue)
              : FileIcons.getIconUrl(name)}
            alt="icon"
          />
          <form noValidate onSubmit={maybeTriggerRename}>
            {/*
              We're using a disabled Input to render the filename.
              This allows us to easily transition to the "renaming" state,
              by making this input `not disabled`.
            */}
            {/* <p> {(renamedFileKey === key).toString()}</p> */}
            <input
              type="text"
              onBlur={maybeTriggerRename}
              className={`${styles.input} w-100`}
              onChange={(e) => onChange(e)}
              disabled={renamedFileKey !== key}
              // By setting this key, the input will re-render
              // when the the current file is being renamed.
              // This in turn will toggle the `autoFocus` property,
              // and the input will get focused.
              key={(renamedFileKey === key).toString()}
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus={renamedFileKey === key}
              value={renamedFileKey === key ? renameInputValue : name}
            />
            <Button
              hidden
              type="submit"
              className="absolute"
              style={{ display: 'none' }}
              disabled={renamedFileKey !== key}
            />
          </form>
        </li>
      ))}
    </List>
  );
}

export default FileList;
