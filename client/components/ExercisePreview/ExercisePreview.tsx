import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faPlay } from '@fortawesome/free-solid-svg-icons';

import Link from '~/components/generic/Link';
import styles from './ExercisePreview.module.scss';
import Markdown from '../Markdown';
import { API_LessonExerciseI } from '~/../shared/types/lesson-exercise.types';

export type ExerciseViewMode = 'STUDENT' | 'TEACHER'

interface Props {
  href: string;
  viewMode: ExerciseViewMode;
  isPrivate?: boolean;
  exercise: API_LessonExerciseI,
  feedbackCount: number;
  isApproved: boolean;

  className?: string;
  // Do we need this?
  readOnly: boolean;
}

function ExercisePreview({
  href,
  viewMode,
  isPrivate = false,
  readOnly,
  feedbackCount,
  isApproved,
  exercise,
  className = '',
}: Props) {
  const { btnText, infoMessage } = getFooterTexts(viewMode, feedbackCount, readOnly, isApproved);

  let computedClassName = `${styles['exercise-preview']} bg-white rounded-md`;
  if (isApproved) {
    computedClassName += ` ${styles['is--done']}`;
  }
  if (!isApproved && readOnly) {
    computedClassName += ` ${styles['is--waiting']}`;
  }
  if (feedbackCount > 0) {
    computedClassName += ` ${styles['has--issues']}`;
  }

  return (
    <div className={`${computedClassName} ${className}`}>
      <header className="text-right">
        {isPrivate && <FontAwesomeIcon className="text-grey" width="24" icon={faLock} title="Exercițiu privat" />}
      </header>
      <Markdown
        className={`${styles.body} relative overflow-hidden`}
        markdownString={exercise.body}
        variant="transparent"
      />
      <footer className="d-flex align-items-center justify-content-between flex-wrap">
        <span>
          {viewMode === 'STUDENT' && infoMessage && infoMessage}
        </span>
        <Link
          href={href}
          className="d-flex"
          variant="contained"
          prefetch={false}
          color={isApproved || readOnly || feedbackCount > 0 ? 'white' : 'blue'}
        >
          {btnText}
          <FontAwesomeIcon width="16" className="ml-2" icon={faPlay} />
        </Link>
      </footer>
    </div>
  );
}

function getFooterTexts(
  viewMode: ExerciseViewMode,
  feedbackCount: number,
  readOnly: boolean,
  isApproved: boolean,
) {
  let btnText = viewMode === 'STUDENT' ? 'Rezolvă' : 'Editează';
  let infoMessage = '';

  if (viewMode === 'STUDENT') {
    if (readOnly || isApproved) {
      btnText = 'Vezi exercițiul';
    } else if (feedbackCount) {
      btnText = 'Continuă';
    }

    if (isApproved) {
      infoMessage = '✔';
    } else if (feedbackCount) {
      infoMessage = `${feedbackCount} problem${feedbackCount > 1 ? 'e' : 'ă'} de rezolvat`;
    } else if (readOnly) {
      infoMessage = 'În așteptarea feedback-ului';
    }
  }

  return {
    btnText,
    infoMessage,
  };
}

export default ExercisePreview;
