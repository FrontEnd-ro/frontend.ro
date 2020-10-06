import React from 'react';
import { connect } from 'react-redux';
import getSubmissions from '../../services/ExerciseSubmissions.service';
import { loadSubmissions, searchSubmissions } from '../../redux/exercise-submissions/exercise-submissions.actions';
import { Submission } from '~/redux/exercise-submissions/types';

interface Props {
  submissions: any,
  dispatch: any;
}

interface State {
  loading: boolean,
}

class ExerciseSubmissionPage extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const { dispatch } = this.props;
    this.setState({
      loading: true,
    });
    try {
      await getSubmissions(1, 'diana').then((submissions: Submission[]) => {
        dispatch(loadSubmissions(submissions));
        this.setState({
          loading: false,
        });
      });
    } catch (e) {
      alert(e);
    }
  }

  onSearchSubmission = async (e) => {
    const { dispatch } = this.props;
    this.setState({
      loading: true,
    });
    e.preventDefault();
    let keyword = e.target.searchKeyword.value;
    try {
      await getSubmissions(1, 'diana').then((submissions: Submission[]) => {
        dispatch(loadSubmissions(submissions));
        dispatch(searchSubmissions(keyword, submissions));
        this.setState({
          loading: false,
        });
      });
    } catch (err) {
      alert(err);
    }
  };

  render() {
    const { loading } = this.state;
    const { submissions } = this.props;
    return (
      <div>
        <form onSubmit={this.onSearchSubmission}>
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
          {loading ? 'Hey some async call in progress !' : ''}
          {submissions.submissions !== undefined
            ? submissions.submissions.map((submission) => (
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
            )) : null}
        </ul>
        <button
          type="button"
          onClick={() => this.getData()}
        >
          Next page
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  submissions: state.submissions,
});

export default connect(mapStateToProps)(ExerciseSubmissionPage);
