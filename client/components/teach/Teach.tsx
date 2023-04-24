import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import Search from '~/components/Search';
import { RootState } from '~/redux/root.reducer';
import ExerciseSubmission from './ExerciseSubmission/ExerciseSubmission';
import ExerciseSubmissionSkeleton from './ExerciseSubmission/ExerciseSubmissionSkeleton';
import SweetAlertService from '~/services/sweet-alert/SweetAlert.service';
import { loadSubmissions, searchSubmissions } from '~/redux/exercise-submissions/exercise-submissions.actions';
import PageContainer from '../PageContainer';
import Button from '~/components/Button';

import AdminSubmissionService from '~/services/api/AdminSubmission.service';
import { SubmissionStatus } from '~/../shared/types/submission.types';
import { Submission } from '~/redux/exercise-submissions/types';
import List from '../List';

import styles from './Teach.module.scss';

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
      const newSubmissions = await AdminSubmissionService.searchSubmissions(submissions.page, '', Object.values(SubmissionStatus));
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

    let inProgressSubmissions = [];
    let awaitingReviewSubmissions = [];
    let doneSubmissions = [];

    // This is undefined while we're fetching the data
    // from the server. That's why we need this check.
    if (submissions.submissions) {
      inProgressSubmissions = submissions.submissions.filter(
        (s) => s.status === SubmissionStatus.IN_PROGRESS,
      );
      awaitingReviewSubmissions = submissions.submissions.filter(
        (s) => s.status === SubmissionStatus.AWAITING_REVIEW,
      );
      doneSubmissions = submissions.submissions.filter(
        (s) => s.status === SubmissionStatus.DONE,
      );
    }

    return (
      <PageContainer className={styles.teach}>
        <h1> Exerciții rezolvate </h1>
        <p className="text-2xl font-light mb-8">
          Oferă feedback celor ce au rezolvat exercițiile de mai
          jos și ajută-i să devină mai buni.
        </p>
        {/* <Search query={submissions.search} onSearch={this.searchData} /> */}

        {loading && <SubmissionsSkeletonLoading />}

        {!submissions.submissions?.length && !loading && (
          <p className={`${styles['no-results']} text-center`}>
            Căutarea nu a întors nici un rezultat...
          </p>
        )}

        {submissions.submissions?.length > 0 && (
          <>
            {awaitingReviewSubmissions.length > 0 && (
            <SubmissionsSection
              className="mb-8"
              title="Exerciții ce așteaptă feedback"
              submissions={awaitingReviewSubmissions}
            />
            )}
            {inProgressSubmissions.length > 0 && (
            <SubmissionsSection
              className="mb-8"
              title="Exerciții în progres"
              description="Exercițiile de mai jos sunt începute de studenți dar încă nu le-au trimis către feedback."
              submissions={inProgressSubmissions}
            />
            )}
            {doneSubmissions.length > 0 && (
            <SubmissionsSection
              className="mb-8"
              title="Exerciții corect rezolvate"
              description="Exercițiile de mai jos au fost aprobate de către noi. Ele sunt corect rezolvate."
              submissions={doneSubmissions}
            />
            )}
          </>
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

const SubmissionsSection = ({
  title,
  description,
  submissions,
  className,
}: { title: string, description?: string, submissions: Submission[], className?: string }) => (
  <section className={className ?? ''}>
    <h2 className="mb-0">
      👇
      {' '}
      {title}
    </h2>
    {description && (
      <p>
        {description}
      </p>
    )}
    <List className={`${styles['cards-wrapper']}`}>
      {submissions && submissions.map((submission) => (
        <li key={submission._id}>
          <ExerciseSubmission submission={submission} />
        </li>
      ))}
    </List>
  </section>
);

const SubmissionsSkeletonLoading = () => (
  <List className={`${styles['cards-wrapper']}`}>
    {Array.from(Array(5), (_, index) => (
      <li key={index}>
        <ExerciseSubmissionSkeleton />
      </li>
    ))}
  </List>
);

const mapStateToProps = (state: RootState) => ({
  submissions: state.submissions,
});

const connector = connect(mapStateToProps);

export default connector(Teach);
