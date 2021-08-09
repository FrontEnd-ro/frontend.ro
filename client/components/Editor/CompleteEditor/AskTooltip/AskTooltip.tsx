import React from 'react';
// FIXME
import marked from 'marked';
import { FEEDBACK_TYPES } from '~/services/Constants';
import Form, { Checkbox } from '~/components/Form';

import styles from './AskTooltip.module.scss';
import editorTooltipStyles from '../EditorTooltip.module.scss';

interface State {
  body: string;
  type: string;
  forceShow: boolean;
  showMarkdown: boolean;
}

interface Props {
  visible: boolean;
  onAsk: ({ type, body }: { type: string, body: string }) => void
}

class AskTooltip extends React.Component<Props, State> {
  private timeoutId: NodeJS.Timeout;

  private formRef: React.RefObject<HTMLFormElement>;

  private markdownRef: React.RefObject<HTMLDivElement>;

  private textareaRef: React.RefObject<HTMLTextAreaElement>;

  constructor(props) {
    super(props);
    this.state = {
      body: '',
      type: FEEDBACK_TYPES.IMPROVEMENT,
      forceShow: false,
      showMarkdown: false,
    };

    this.timeoutId = null;
    this.formRef = React.createRef();
    this.markdownRef = React.createRef();
    this.textareaRef = React.createRef();
  }

  componentDidMount() {
    const { visible } = this.props;

    if (visible && this.textareaRef.current) {
      setTimeout(() => this.textareaRef.current.focus(), 0);
    }
  }

  componentDidUpdate(prevProps: Props) {
    const { visible } = this.props;

    if (visible && !prevProps.visible) {
      setTimeout(() => this.textareaRef.current.focus(), 0);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }

  onAsk = (e) => {
    const { type, body } = this.state;
    const { onAsk } = this.props;

    if (body) {
      onAsk({ type, body });

      this.setState({
        body: '',
        forceShow: false,
      });
    }
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
    }, 500);
  }

  onKeyDown = (e) => {
    if ((e.key === 'Enter' || e.keyCode === 13) && e.ctrlKey) {
      const submitEvent = document.createEvent('Event');
      submitEvent.initEvent('submit', true, true);

      this.formRef.current.dispatchEvent(submitEvent);
    }
  }

  onBodyChange = (e) => {
    this.setState({
      body: e.target.value,
    });
  }

  changeType = (newType) => {
    this.setState({ type: newType });
  }

  toggleMarkdown = () => {
    const { body, showMarkdown } = this.state;
    this.setState({
      showMarkdown: !showMarkdown,
    });

    if (!showMarkdown) {
      this.markdownRef.current.innerHTML = marked(body);
    } else {
      this.markdownRef.current.innerHTML = null;
      setTimeout(() => {
        this.textareaRef.current.focus();
      }, 100);
    }
  }

  render() {
    const { visible } = this.props;
    const {
      body,
      type,
      forceShow,
      showMarkdown,
    } = this.state;

    return (
      <Form
        ref={this.formRef}
        onSubmit={this.onAsk}
        className={`
          ${styles['ask-tooltip']}
          ${editorTooltipStyles['feedback-tooltip']}
          ${editorTooltipStyles[`feedback--${type}`]}
          ${visible || forceShow ? editorTooltipStyles['feedback-tooltip--visible'] : ''}
        `}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <div className={`${showMarkdown ? styles.markdown : ''}`} ref={this.markdownRef} />
        <textarea
          required
          rows={8}
          ref={this.textareaRef}
          style={{
            display: showMarkdown ? 'none' : 'block',
          }}
          value={body}
          onChange={this.onBodyChange}
          onKeyDown={this.onKeyDown}
          spellCheck={false}
          placeholder="Oferă feedback (psst: suportă markdown)"
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus={visible}
        />
        <div className={styles['feedback-tooltip__controls']}>
          <div>
            {Object.keys(FEEDBACK_TYPES).map((feedbackType) => (
              <Checkbox
                key={feedbackType}
                className="d-block"
                type="radio"
                name="feedback-type"
                onChange={() => this.changeType(FEEDBACK_TYPES[feedbackType])}
                checked={type === FEEDBACK_TYPES[feedbackType]}
                value={type}
              >
                {FEEDBACK_TYPES[feedbackType]}
              </Checkbox>
            ))}

            <div className={styles.separator} />
            <Checkbox
              type="checkbox"
              name="feedback-type"
              value="showMarkdown"
              defaultChecked={showMarkdown}
              onChange={this.toggleMarkdown}
            >
              Preview
            </Checkbox>
          </div>
          <button type="submit" className="btn btn--light" title="Mark as done">
            <span>Done</span>
          </button>
        </div>
      </Form>
    );
  }
}

export default AskTooltip;
