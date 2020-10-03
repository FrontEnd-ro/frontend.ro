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

class Submissions extends React.Component<ConnectedProps<typeof connector>,State> {
  constructor(props) {
    super(props);

    this.state = {
      loading: props.submissions.submissions === undefined,
    };
  }

  componentDidMount() {
    let { submissions } = this.props;

    if (submissions.submissions === undefined) {
      this.getData();
    }
  }

  getData = async () => {
    const { submissions, dispatch } = this.props;

    try {
      this.setState({
        loading: true,
      });
      this.setState({
        loading: false,
      });
      dispatch(
        loadSubmissions(
          await ExerciseService.getSubmissions(submissions.page, ''),
        ),
      );
    } catch (err) {
      SweetAlertService.toast({ type: 'error', text: err });
      this.setState({
        loading: false,
      });
    }
  };

  searchData = async (e: any, query: string) => {
    const { dispatch, submissions } = this.props;

    try {
      dispatch(
        searchSubmissions(
          query,
          await ExerciseService.getSubmissions(submissions.page, query),
        ),
      );
    } catch (err) {
      SweetAlertService.toast({ type: 'error', text: err });
    }
  };

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
              onSearch={(e) => this.searchData(e, e.target.query.value)}
            />
            <ul className={`${styles['cards-wrapper']}`}>
              {submissions.submissions !== undefined
                ? submissions.submissions.map((submission) => (
                  <li key={submission.id}>
                    <ExerciseSubmission submission={submission} />
                  </li>
                ))
                : Array.from(Array(5), (i) => (
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
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

const mapState = (state: RootState) => ({
  submissions: state.submissions,
});

const connector = connect(mapState);

export default connector(Submissions);
