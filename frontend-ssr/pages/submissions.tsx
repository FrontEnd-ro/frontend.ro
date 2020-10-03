import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Head from 'next/head';
import Footer from '~/components/Footer';
import Header from '~/components/Header';

import ExerciseSubmission from '../components/exercise-submissions/ExerciseSubmission';
import ExerciseService from '../services/ExerciseSubmissions.service';
import {
  loadSubmissions,
  searchSubmissions,
} from '~/redux/exercise-submissions/exercise-submissions.actions';
import ExerciseSubmissionSkeleton from '~/components/exercise-submissions/ExerciseSubmissionSkeleton';
import SweetAlertService from '../services/sweet-alert/SweetAlert.service';
import Search from '~/components/Search';
import { RootState } from '../redux/root.reducer';

import styles from './submissions.module.scss';

interface State {
  loading: boolean;
}

class Submissions extends React.Component<ConnectedProps<typeof connector>, State> {
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
      const newSubmissions = await ExerciseService.getSubmissions(submissions.page, '');
      dispatch(loadSubmissions(newSubmissions));
    } catch (err) {
      SweetAlertService.toast({ type: 'error', text: err });
    } finally {
      this.setState({ loading: false });
    }
  };

  searchData = async (query: string) => {
    const { dispatch } = this.props;

    this.setState({ loading: true });

    try {
      const newSubmissions = await ExerciseService.getSubmissions(0, query);
      dispatch(searchSubmissions(query, newSubmissions));
    } catch (err) {
      SweetAlertService.toast({ type: 'error', text: err });
    } finally {
      this.setState({ loading: false });
    }
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
      <>
        <Head>
          <title>HTML</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className={styles.page}>
          <div className={`${styles['page-submissions']}`}>
            <Search
              key={submissions.search}
              query={submissions.search}
              onSearch={this.searchData}
            />
            <ul className={`${styles['cards-wrapper']}`}>
              {submissions.submissions && submissions.submissions.map((submission) => (
                <li key={submission._id}>
                  <ExerciseSubmission submission={submission} />
                </li>
              ))}
              {loading && Array.from(Array(5), (i) => (
                <li key={i}>
                  <ExerciseSubmissionSkeleton />
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="btn btn--blue"
              onClick={this.getData}
              disabled={loading}
            >
              Next page
            </button>
            <div
              className={styles.hidden}
              ref={this.hiddenRef}
            />
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  submissions: state.submissions,
});

const connector = connect(mapStateToProps);

export default connector(Submissions);
