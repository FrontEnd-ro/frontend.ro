import React from 'react';
import { connect } from 'react-redux';
import { Submission } from '../../redux/exercise-submissions/types';
import { removeSubmission } from '../../redux/exercise-submissions/exercise-submissions.actions';

interface Props {
    submission: Submission,
    dispatch: any,
    editSubmission: any,
}
function ExerciseSubmission({ submission, dispatch, editSubmission } : Props) {
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
          onClick={() => editSubmission()}
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
      <br />
    </ul>
  );
}

export default connect()(ExerciseSubmission);
