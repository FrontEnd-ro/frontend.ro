import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import Search from '~/components/Search';
import { RootState } from '~/redux/root.reducer';
import ExerciseSubmission from './ExerciseSubmission/ExerciseSubmission';
import ExerciseSubmissionSkeleton from './ExerciseSubmission/ExerciseSubmissionSkeleton';
import ExerciseService from '~/services/Exercise.service';
import SweetAlertService from '~/services/sweet-alert/SweetAlert.service';
import { loadSubmissions, searchSubmissions } from '~/redux/exercise-submissions/exercise-submissions.actions';
import PageContainer from '../PageContainer';
import Button from '~/components/Button';

import styles from './Teach.module.scss';
import SubmissionService from '~/services/Submission.service';

interface State { loading: boolean; }

class Teach extends React.Component<ConnectedProps<typeof connector>, State> {
  private observer: IntersectionObserver;

  private hiddenRef = React.createRef<HTMLDivElement>();

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    const { submissions } = this.props;

    if (!submissions.end) {
      this.initIntersectionObserver();
    }
  }

  componentDidUpdate(prevProps) {
    const { submissions } = this.props;

    if (prevProps.submissions.end !== submissions.end && submissions.end) {
      this.observer.disconnect();
    }

    if (prevProps.submissions.end !== submissions.end && !submissions.end) {
      this.initIntersectionObserver();
    }
  }

  componentWillUnmount() {
    const { submissions } = this.props;

    if (!submissions.end) {
      this.observer.disconnect();
    }
  }

  initIntersectionObserver = () => {
    const options = {
      threshold: 0.7,
    };

    this.observer = new IntersectionObserver(this.loadMore, options);
    this.observer.observe(this.hiddenRef.current);
  };

  getData = async () => {
    const { submissions, dispatch } = this.props;

    this.setState({ loading: true });

    try {
      const newSubmissions = await SubmissionService.searchSubmissions(submissions.page, '');
      dispatch(loadSubmissions(newSubmissions));
    } catch (err) {
      SweetAlertService.toast({ type: 'error', text: err });
    } finally {
      this.setState({ loading: false });
    }
  };

  searchData = async (query: string) => {
    // const { dispatch } = this.props;

    // this.setState({ loading: true });

    // try {
    //   const newSubmissions = await ExerciseService.getSubmissions(0, query);
    //   dispatch(searchSubmissions(query, newSubmissions));
    // } catch (err) {
    //   SweetAlertService.toast({ type: 'error', text: err });
    // } finally {
    //   this.setState({ loading: false });
    // }
  };

  loadMore = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.getData();
      }
    });
  }

  render() {
    const { submissions } = this.props;
    const { loading } = this.state;

    return (
      <PageContainer className={styles.teach}>
        <h1> Exerciții rezolvate </h1>
        <h2>
          Oferă feedback celor ce au rezolvat exercițiile de mai
          jos și ajută-i să devină mai buni.
        </h2>
        {/* <Search query={submissions.search} onSearch={this.searchData} /> */}
        <ul className={`${styles['cards-wrapper']}`}>
          {submissions.submissions && submissions.submissions.map((submission) => (
            <li key={submission._id}>
              <ExerciseSubmission submission={submission} />
            </li>
          ))}
          {loading && Array.from(Array(5), (_, index) => (
            <li key={index}>
              <ExerciseSubmissionSkeleton />
            </li>
          ))}
        </ul>
        {!submissions.submissions?.length && !loading && (
        <p className={`${styles['no-results']} text-center`}>
          Căutarea nu a întors nici un rezultat...
        </p>
        )}
        {!submissions.end && (
        <Button
          variant="blue"
          onClick={this.getData}
          loading={loading}
        >
          Next page
        </Button>
        )}

        <div
          className="invisible"
          ref={this.hiddenRef}
        />
      </PageContainer>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  submissions: state.submissions,
});

const connector = connect(mapStateToProps);

export default connector(Teach);
