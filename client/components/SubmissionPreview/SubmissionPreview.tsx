import React, { useEffect, useRef, useState } from 'react';
import { format } from 'date-fns';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '../Button';
import { timeAgo } from '~/services/Utils';
import { useOutsideClick } from '~/services/Hooks';
import { SubmissionVersionI } from '~/../shared/types/submission.types';
import CompleteEditorLazy from '../Editor/CompleteEditor/CompleteEditor.lazy';

import styles from './SubmissionPreview.module.scss';

interface Props {
  onClose: () => void;
  submission: SubmissionVersionI;
  className?: string
}

const SubmissionPreview = ({ submission, onClose, className = '' }: Props) => {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  const folderStructure = React.useMemo(() => {
    if (!submission) {
      return null;
    }

    return JSON.parse(submission.code);
  }, [submission._id]);

  const close = () => {
    setActive(false);
    onClose();
  };

  useOutsideClick(ref, close);

  useEffect(() => {
    // Without this  delay, the element won't transition up the way we want.
    // Instead the CSS styles will be directly applied from the beginning.
    setTimeout(() => setActive(true), 0);
  }, []);

  return (
    <div className={styles.overlay}>
      <section
        ref={ref}
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
        <p className="text-bold m-0 text-xl">
          {submission.approved ? (
            <> Soluție corectă </>
          ) : (
            <> Soluție respinsă </>
          )}
        </p>
        <time
          className="d-block text-grey mt-2"
          dateTime={format(new Date(submission.createdAt).getTime(), 'yyyy-MM-dd')}
        >
          {timeAgo(new Date(submission.createdAt))}
        </time>
        <CompleteEditorLazy
          readOnly
          askTooltip
          feedbacks={submission.feedbacks}
          folderStructure={folderStructure}
        />
      </section>
    </div>
  );
};

export default SubmissionPreview;
