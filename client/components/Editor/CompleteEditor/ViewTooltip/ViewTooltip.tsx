import React from 'react';
import marked from 'marked';
import SubmissionService from '~/services/Submission.service';
import SweetAlertService from '~/services/sweet-alert/SweetAlert.service';

import styles from './ViewTooltip.module.scss';
import editorTooltipStyles from '../EditorTooltip.module.scss';

interface Feedback {
  id: string;
  // This should be tied to feedback types!
  type: string;
  body: string;
  readOnly: boolean;
}

interface State {
  loading: boolean;
  visible: boolean;
  forceShow: boolean;
}

interface Props {
  visible: boolean;
  feedback: Feedback,
  onFeedbackDone: (feedbackId: string) => void;
}

class ViewTooltip extends React.Component<Props, State> {
  private timeoutId: NodeJS.Timeout;

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      visible: false,
      forceShow: false,
    };
    this.timeoutId = null;
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({
        visible: true,
      });
    }, 50);
  }

  componentDidUpdate() {
    const { loading } = this.state;
    const { feedback } = this.props;

    if (!feedback._id && loading) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ loading: false });
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }

  onFeedbackDone = () => {
    this.setState({ loading: true });
    const { feedback, onFeedbackDone } = this.props;

    SubmissionService.markFeedbackAsDone(feedback._id)
      .then((resp) => {
        onFeedbackDone(feedback._id);

        this.setState({
          loading: false,
          forceShow: false,
        });
      })
      .catch((err) => {
        this.setState({
          loading: false,
          forceShow: false,
        });

        SweetAlertService.toast({
          type: 'error',
          text: err.reason,
        });
      });
  }

  onMouseEnter = () => {
    clearTimeout(this.timeoutId);
    this.setState({
      forceShow: true,
    });
  }

  onMouseLeave = () => {
    this.timeoutId = setTimeout(() => {
      this.setState({
        forceShow: false,
      });
    }, 1000);
  }

  render() {
    const { feedback, visible } = this.props;
    const { forceShow, loading } = this.state;

    return (
      <div
        className={`
          ${styles['view-tooltip']}
          ${editorTooltipStyles['feedback-tooltip']}
          ${editorTooltipStyles[`feedback--${feedback.type}`]}
          ${visible || forceShow ? editorTooltipStyles['feedback-tooltip--visible'] : ''}
        `}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {/* eslint-disable-next-line react/no-danger */}
        <div className="markdown" dangerouslySetInnerHTML={{ __html: marked(feedback.body || '') }} />

        {!feedback.readOnly && (
          <div className="feedback-tooltip__controls">
            <button
              type="button"
              disabled={loading}
              title="Mark as done"
              onClick={this.onFeedbackDone}
              className={`btn btn--light ${loading ? ' btn--loading' : ''}`}
            >
              <span>Done</span>
              <i className="icon-check" />
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default ViewTooltip;
