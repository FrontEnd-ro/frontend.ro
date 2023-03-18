import React, { useState } from 'react';
import FolderStructure from '~/../shared/utils/FolderStructure';
import Button from '~/components/Button';
import Form from '~/components/Form';
import { uuid } from '~/services/Utils';
import { filesToFolderStructure, fsEntriesToFolderStructure } from '~/services/utils/FileUtils';

import styles from './InitForm.module.scss';

interface Props {
  createFirstFile: ({ name }: { name: string; }) => void;
  onFolderStructureUpload: (folderStructure: FolderStructure) => void;
  className?: string;
}

function InitForm({ createFirstFile, onFolderStructureUpload, className = '' }: Props) {
  const [fileInputID] = useState(uuid());
  const [isDropable, setIsDropable] = useState(false);

  const onDragEnter = (e) => {
    e.preventDefault();
    setIsDropable(true);
  };

  const onDragLeave = (e) => {
    e.preventDefault();
    if (e.target.tagName === 'INPUT' && e.target.type === 'file') {
      setIsDropable(false);
    }
  };

  const onDrop = () => setIsDropable(false);

  const uploadStructure = ({ nativeEvent }) => {
    setIsDropable(false);

    let computeFolderStructure = null;
    if (nativeEvent.target.webkitEntries && nativeEvent.target.webkitEntries.length) {
      computeFolderStructure = fsEntriesToFolderStructure(nativeEvent.target.webkitEntries);
    } else {
      computeFolderStructure = filesToFolderStructure(nativeEvent.target.files);
    }

    computeFolderStructure.then((folderStructure: FolderStructure) => {
      onFolderStructureUpload(folderStructure);
    }).catch((err) => {
      console.error('[InitForm.uploadStructure] Failed to convert files to FolderStructure', err);
    });
  };

  return (
    <Form
      className={`
        ${className}
        ${styles['init-editor-form']} 
        ${isDropable ? styles['is--dropable'] : ''} 
        d-flex align-items-center justify-content-center`}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onSubmit={createFirstFile}
    >
      <label>
        <span>Numele fișierului*</span>
        <div className={styles['input-and-button']}>
          <input required type="text" name="name" />
          <Button type="submit" variant="success">
            Creează
          </Button>
        </div>
      </label>
      <span className={styles.separator}>
        <span>sau</span>
      </span>
      <p className={styles['dnd-cta']}>
        <label htmlFor={fileInputID}>Drag and drop</label>
        {' '}
        fișiere și foldere
      </p>

      <label className={`${styles['upload-label']} pin-full d-flex align-items-center justify-content-center`}>
        <p>
          <span className="icon-check mr-2" />
          Adaugă fișierele
        </p>
        <input className="pin-full" id={fileInputID} type="file" multiple onChange={uploadStructure} />
      </label>
    </Form>
  );
}

export default InitForm;
