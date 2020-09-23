import React, { useState } from 'react';
import { connect } from 'react-redux';

import ExerciseSubmission from './ExerciseSubmission';
import EditSubmissionForm from './EditSubmissionForm';

function ExerciseSubmissionList(props: { submissions }) {
  const { submissions } = props;
  const [isEditing, setEditing] = useState(null);

  function editSubmission(id) {
    setEditing(id);
  }

  const viewSubmission = (id) => {
    setEditing(id);
  };

  return (
    <div>
      <h1>All Submissions</h1>
      {submissions.submissions.map((submission) => (
        <div key={submission.id}>
          {
          isEditing === submission.id
            ? (
              <EditSubmissionForm
                viewSubmission={() => viewSubmission(submission.id)}
                submission={submission}
              />
            )

            : (
              <ExerciseSubmission
                editSubmission={() => editSubmission(submission.id)}
                submission={submission}
              />
            )
            }
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  submissions: state.submissions,
});

export default connect(mapStateToProps)(ExerciseSubmissionList);
