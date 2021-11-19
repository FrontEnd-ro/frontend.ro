import React, { useEffect, useRef, useState } from 'react';
import { format } from 'date-fns';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '../Button';
import { Checkbox } from '../Form';
import { timeAgo } from '~/services/Utils';
import DiffEditorLazy from '../Editor/DiffEditor/DiffEditor.lazy';
import { SubmissionVersionI } from '~/../shared/types/submission.types';
import CompleteEditorLazy from '../Editor/CompleteEditor/CompleteEditor.lazy';

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

  const folderStructure = React.useMemo(() => {
    if (!submission) {
      return null;
    }

    return JSON.parse(submission.code);
  }, [submission._id]);

  const previousFolderStructure = React.useMemo(() => {
    if (!previousSubmissionCode) {
      return null;
    }

    return JSON.parse(previousSubmissionCode);
  }, [previousSubmissionCode]);

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
            originalFolderStructure={previousFolderStructure}
            modifiedFolderStructure={folderStructure}
          />
        ) : (
          <CompleteEditorLazy
            readOnly
            askTooltip
            feedbacks={submission.feedbacks}
            folderStructure={folderStructure}
          />
        )}

      </section>
    </div>
  );
};

export default SubmissionPreview;
