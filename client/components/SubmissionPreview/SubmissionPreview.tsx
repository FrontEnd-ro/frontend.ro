import React, { useEffect, useRef, useState } from 'react';
import { format } from 'date-fns';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '../Button';
import { Checkbox } from '../Form';
import IDE from '../Editor/IDE/IDE';
import { timeAgo } from '~/services/Utils';
import FolderStructure from '~/../shared/utils/FolderStructure';
import DiffEditorLazy from '../Editor/DiffEditor/DiffEditor.lazy';
import { SubmissionVersionI } from '~/../shared/types/submission.types';

import styles from './SubmissionPreview.module.scss';

interface Props {
  onClose: () => void;
  submission: SubmissionVersionI;
  className?: string
  previousSubmissionCode?: string;
}

const SubmissionPreview = ({
  submission, onClose, previousSubmissionCode, className = '',
}: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [showDiff, setShowDiff] = useState(false);

  const folderStructureJSON = JSON.parse(submission.code);
  const previousFolderStructureJSON = previousSubmissionCode === undefined
    ? { files: [], folders: [] }
    : JSON.parse(previousSubmissionCode);

  const close = () => {
    setActive(false);
    onClose();
  };

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current.contains(e.target as HTMLElement)) {
      return;
    }

    close();
  };

  useEffect(() => {
    // Without this  delay, the element won't transition up the way we want.
    // Instead the CSS styles will be directly applied from the beginning.
    setTimeout(() => setActive(true), 0);
  }, []);

  return (
    <div onClick={onClick} className={styles.overlay}>
      <section
        ref={cardRef}
        className={`
          ${className} 
          ${styles.SubmissionPreview} 
          ${active ? styles.active : ''} 
          bg-white
        `}
      >
        <Button
          onClick={close}
          variant="light"
          className={`${styles['close-button']} absolute`}
        >
          <FontAwesomeIcon icon={faTimes} width="16" />
        </Button>
        <div className="d-flex align-items-center">
          <p className="text-bold mr-2 text-xl">
            {submission.approved ? (
              <> Soluție corectă </>
            ) : (
              <> Soluție respinsă </>
            )}
          </p>
          <time
            className="d-block text-grey"
            dateTime={format(new Date(submission.createdAt).getTime(), 'yyyy-MM-dd')}
          >
            /
            {' '}
            {timeAgo(new Date(submission.createdAt))}
          </time>
        </div>
        <Checkbox
          checked={showDiff}
          onChange={() => { setShowDiff(!showDiff); }}
        >
          Vezi progresul față de versiunea precedentă
        </Checkbox>

        {showDiff ? (
          <DiffEditorLazy
            originalFolderStructure={previousFolderStructureJSON}
            modifiedFolderStructure={folderStructureJSON}
          />
        ) : (
          <IDE
            feedbacks={submission.feedbacks}
            initialFolderStructure={new FolderStructure(folderStructureJSON)}
          />
        )}

      </section>
    </div>
  );
};

export default SubmissionPreview;
