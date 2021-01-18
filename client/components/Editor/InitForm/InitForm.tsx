import React, { useState } from 'react';
import Form from '~/components/Form';
import { uuid } from '~/services/Utils';

import styles from './InitForm.module.scss';

interface Props {
  createFirstFile: ({ name: string }) => void;
  uploadStructure: (e: any) => void
}

function InitForm({ createFirstFile, uploadStructure }: Props) {
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

  return (
    <Form
      className={`
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
          <button type="submit" className="btn btn--success">
            Creează
          </button>
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
