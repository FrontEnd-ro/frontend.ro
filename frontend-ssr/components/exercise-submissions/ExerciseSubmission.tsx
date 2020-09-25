import React from 'react';
import { connect } from 'react-redux';
import { Submission } from '../../redux/exercise-submissions/types';
import { editSubmission, removeSubmission } from '../../redux/exercise-submissions/submissions.actions';

interface Props {
    submission: Submission,
    dispatch: any,
}
function ExerciseSubmission({ submission, dispatch } : Props) {
  return (
    <ul>
      <li
        key={submission.id}
      >
        <a href="#">
          <img width="40" height="40" alt={`${submission.username} avatar`} src={submission.avatarSrc} />
          <span>
            {submission.username}
          </span>
        </a>
        <p>{submission.chapter}</p>
        <p>{new Date(submission.time).toLocaleString()}</p>
        <p>{submission.type}</p>
        <button
          type="button"
          onClick={() => dispatch(editSubmission(submission.id))}
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => dispatch(removeSubmission(submission.id))}
        >
          Delete
        </button>
      </li>
    </ul>
  );
}

export default connect()(ExerciseSubmission);
