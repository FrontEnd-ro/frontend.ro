import React from 'react';
import { connect } from 'react-redux';
import getMockSubmissions from '../../services/Helpers';
import { loadSubmissions, searchSubmissions } from '../../redux/exercise-submissions/exercise-submissions.actions';

interface Props {
  dispatch: any;
}
function ExerciseSubmissionPage(props: { submissions, dispatch }) {
  const { submissions, dispatch } = props;

  const onSearchSubmission = (e) => {
    e.preventDefault();
    let keyword = e.target.searchKeyword.value;
    dispatch(searchSubmissions(keyword));
  };

  return (
    <div>
      <form onSubmit={onSearchSubmission}>
        <input
          type="text"
          name="searchKeyword"
          placeholder="search"
        />
        <button type="submit">
          Search
        </button>
      </form>
      <br />
      <ul>
        {submissions.submissions.map((submission) => (
          <li key={submission.id}>
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
            >
              Edit
            </button>
            <button
              type="button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => dispatch(loadSubmissions(getMockSubmissions(5)))}>
        Next page
      </button>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  submissions: state.submissions,
});

export default connect(mapStateToProps)(ExerciseSubmissionPage);
