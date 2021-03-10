/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import noop from 'lodash/noop';
import FileIcons from '~/services/utils/FileIcons';
import Button from '~/components/Button';

import styles from './FilesList.module.scss';

function FilesList({
  readOnly,
  files,
  ctxMenuKey,
  selectFile,
  enterEditMode,
  openMenu,
  renamedAsset,
  onRename,
  saveAsset,
  selectedFileKey,
  feedbacks,
}: any) {
  return (
    <ul className={styles['files-list']}>
      {files.map((f) => (
        <li
          key={f.key}
          className={`
            ${f.key === selectedFileKey ? styles['is--selected'] : ''} 
            ${renamedAsset.key === f.key ? styles['is-being-renamed'] : ''} 
            ${f.key === ctxMenuKey ? styles['is--ctx-selected'] : ''}
            ${feedbacks[f.key] ? feedbacks[f.key].map((type) => ` ${styles[`has--feedback-${type}`]}`).join('') : ''}`}
          data-key={f.key}
          onClick={() => f.key !== selectedFileKey && selectFile(f.key)}
          onDoubleClick={() => !readOnly && enterEditMode(f.key)}
          onContextMenu={readOnly ? noop : openMenu}
        >
          <img
            width="20"
            src={renamedAsset.key === f.key
              ? FileIcons.getIconUrl(renamedAsset.name)
              : FileIcons.getIconUrl(f.name)}
            alt="icon"
            // eslint-disable-next-line no-return-assign
            onError={(e) => e.currentTarget.src = renamedAsset.key === f.key
              ? FileIcons.getIconUrl(renamedAsset.name)
              : FileIcons.getIconUrl(f.name)}
          />
          <form noValidate onSubmit={saveAsset}>
            <input
              className={styles['filename-input']}
              type="text"
              value={renamedAsset.key === f.key ? renamedAsset.name : f.name}
              disabled={renamedAsset.key !== f.key}
              onChange={onRename}
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus={renamedAsset.key === f.key}
              onBlur={saveAsset}
            />
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <Button hidden loading={renamedAsset.key !== f.key} type="submit" />
          </form>
        </li>
      ))}
    </ul>
  );
}

export default FilesList;
