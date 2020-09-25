import React from 'react';
import { connect } from 'react-redux';

import ExerciseSubmission from './ExerciseSubmission';
import EditSubmissiontForm from './EditSubmissionForm';

function ExerciseSubmissionList(props: { submissions }) {
  const { submissions } = props;

  return (
    <div>
      <h1>All Submissions</h1>
      {submissions.submissionReducer.submissions.map((submission) => (
        <div key={submission.id}>
          {
          submission.editing
            ? <EditSubmissiontForm submission={submission} />
            : <ExerciseSubmission submission={submission} />
            }
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  submissions: state,
});

export default connect(mapStateToProps)(ExerciseSubmissionList);
